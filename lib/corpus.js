import { passages, relationTypes, themes, works } from "../content/corpusData";

const workMap = new Map(works.map((work) => [work.id, work]));
const passageMap = new Map(passages.map((passage) => [passage.id, passage]));
const themeMap = new Map(themes.map((theme) => [theme.id, theme]));

function enrichPassage(passage) {
  if (!passage) return null;

  const work = workMap.get(passage.workId);

  return {
    ...passage,
    work: work?.title ?? passage.workId,
    period: work?.period ?? "late",
  };
}

export function getPassageById(id) {
  return enrichPassage(passageMap.get(id));
}

export function getWorkById(id) {
  return workMap.get(id);
}

export function getThemeById(id) {
  return themeMap.get(id);
}

export function getThemePassages(theme) {
  return (theme.passageLinks || [])
    .map((link) => {
      const passage = getPassageById(link.passageId);
      if (!passage) return null;

      return {
        ...passage,
        relation: link.relation,
        importance: link.importance,
        readingOrder: link.readingOrder,
        relevance: link.relevance,
        connectedPassageIds: link.connectedPassageIds || [],
      };
    })
    .filter(Boolean);
}

export function relationRank(relation) {
  return relationTypes[relation]?.rank ?? 999;
}

function comparePassageAssociations(a, b) {
  return (
    b.importance - a.importance ||
    relationRank(a.relation) - relationRank(b.relation) ||
    (a.readingOrder ?? 999) - (b.readingOrder ?? 999) ||
    a.themeTitle.localeCompare(b.themeTitle)
  );
}

export function sortPassages(passageList, sort) {
  const sorted = [...passageList];

  if (sort === "readingOrder") {
    return sorted.sort((a, b) => (a.readingOrder ?? 999) - (b.readingOrder ?? 999));
  }

  if (sort === "workOrder") {
    return sorted.sort((a, b) => {
      const workA = workMap.get(a.workId)?.publicationOrder ?? 999;
      const workB = workMap.get(b.workId)?.publicationOrder ?? 999;
      return workA - workB || relationRank(a.relation) - relationRank(b.relation);
    });
  }

  if (sort === "relation") {
    return sorted.sort((a, b) => relationRank(a.relation) - relationRank(b.relation));
  }

  return sorted.sort(
    (a, b) =>
      b.importance - a.importance ||
      relationRank(a.relation) - relationRank(b.relation) ||
      (a.readingOrder ?? 999) - (b.readingOrder ?? 999)
  );
}

export function getLibraryPassages() {
  const library = new Map();

  for (const theme of themes) {
    const themePassages = getThemePassages(theme);

    for (const passage of themePassages) {
      const existing = library.get(passage.id);
      const themeReference = {
        themeId: theme.id,
        themeTitle: theme.title,
        themeShortTitle: theme.shortTitle || theme.title,
        themeCategory: theme.category,
        relation: passage.relation,
        importance: passage.importance,
        relevance: passage.relevance,
        readingOrder: passage.readingOrder,
      };

      if (!existing) {
        library.set(passage.id, {
          ...passage,
          status: "Published work",
          connectedPassageIds: [...(passage.connectedPassageIds || [])],
          themes: [themeReference],
        });
        continue;
      }

      existing.themes.push(themeReference);
      existing.connectedPassageIds = [...new Set([...existing.connectedPassageIds, ...(passage.connectedPassageIds || [])])];
    }
  }

  return [...library.values()].map((entry) => {
    const themeReferences = [...entry.themes].sort(comparePassageAssociations);
    const strongestReference = themeReferences[0];

    return {
      ...entry,
      themes: themeReferences,
      themeIds: themeReferences.map((themeReference) => themeReference.themeId),
      themeCount: themeReferences.length,
      primaryThemeId: strongestReference?.themeId ?? null,
      primaryThemeTitle: strongestReference?.themeTitle ?? "",
      strongestRelation: strongestReference?.relation ?? "related",
      maxImportance: Math.max(...themeReferences.map((themeReference) => themeReference.importance)),
      relationSpread: [...new Set(themeReferences.map((themeReference) => themeReference.relation))].sort(
        (left, right) => relationRank(left) - relationRank(right)
      ),
      libraryRelevance: strongestReference?.relevance ?? entry.summary,
    };
  });
}

export function sortLibraryPassages(passageList, sort) {
  const sorted = [...passageList];

  if (sort === "workOrder") {
    return sorted.sort((a, b) => {
      const workA = workMap.get(a.workId)?.publicationOrder ?? 999;
      const workB = workMap.get(b.workId)?.publicationOrder ?? 999;
      return workA - workB || b.maxImportance - a.maxImportance || a.title.localeCompare(b.title);
    });
  }

  if (sort === "alphabetical") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "importance") {
    return sorted.sort(
      (a, b) =>
        b.maxImportance - a.maxImportance ||
        relationRank(a.strongestRelation) - relationRank(b.strongestRelation) ||
        a.title.localeCompare(b.title)
    );
  }

  return sorted.sort(
    (a, b) =>
      b.themeCount - a.themeCount ||
      b.maxImportance - a.maxImportance ||
      relationRank(a.strongestRelation) - relationRank(b.strongestRelation) ||
      a.title.localeCompare(b.title)
  );
}

export function titleCase(value = "") {
  return value
    .split("-")
    .join(" ")
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}
