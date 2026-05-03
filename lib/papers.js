import fs from "fs/promises";
import path from "path";

import { themes } from "../content/corpusData";
import { submittedPapersByTheme } from "../content/studyContent";

const PAPERS_DIR = path.join(process.cwd(), "content", "papers");

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderInlineMarkdown(text) {
  const escaped = escapeHtml(text);

  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>");
}

function normalizeParagraph(text) {
  return text
    .replaceAll("\u2003", " ")
    .replaceAll("\\.", ".")
    .replace(/\s+/g, " ")
    .trim();
}

export function getAllSubmittedPapers() {
  return Object.entries(submittedPapersByTheme).flatMap(([themeId, papers]) =>
    papers.map((paper) => ({
      ...paper,
      themeId,
      theme: themes.find((theme) => theme.id === themeId) || null,
    }))
  );
}

export function getPaperBySlug(slug) {
  return getAllSubmittedPapers().find((paper) => paper.slug === slug) || null;
}

export async function getPaperDocument(slug) {
  const paper = getPaperBySlug(slug);
  if (!paper || !paper.fileName) return null;

  const markdown = await fs.readFile(path.join(PAPERS_DIR, paper.fileName), "utf8");

  return {
    ...paper,
    markdown,
    html: renderPaperMarkdown(markdown),
  };
}

export function getPaperStaticParams() {
  return getAllSubmittedPapers()
    .filter((paper) => paper.slug && paper.fileName)
    .map((paper) => ({ slug: paper.slug }));
}

export function renderPaperMarkdown(markdown) {
  const blocks = markdown
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks
    .map((block) => {
      if (block.startsWith("# ")) {
        return `<h1>${renderInlineMarkdown(normalizeParagraph(block.slice(2)))}</h1>`;
      }

      if (block.startsWith("## ")) {
        return `<h2>${renderInlineMarkdown(normalizeParagraph(block.slice(3)))}</h2>`;
      }

      if (block.startsWith("### ")) {
        return `<h3>${renderInlineMarkdown(normalizeParagraph(block.slice(4)))}</h3>`;
      }

      return `<p>${renderInlineMarkdown(normalizeParagraph(block))}</p>`;
    })
    .join("\n");
}
