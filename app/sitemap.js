import { getSiteUrl } from "../lib/site";
import { themes, works } from "../content/corpusData";
import course from "../content/beginnerCourse.json";
import { getAllSubmittedPapers } from "../lib/papers";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const mainPaths = ["", "/lessons", "/works", "/themes", "/navigator", "/the-will-to-power", "/about", "/method", "/editions"];
  const studyPaths = [
    ...course.sessions.map(({ slug }) => `/lessons/${slug}`),
    ...works.map(({ id }) => `/works/${id}`),
    ...themes.map(({ id }) => `/themes/${id}`),
    ...getAllSubmittedPapers().filter(({ slug }) => slug).map(({ slug }) => `/corpus/papers/${slug}`),
  ];
  return [...mainPaths, ...studyPaths].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : mainPaths.includes(path) ? 0.8 : 0.7,
  }));
}
