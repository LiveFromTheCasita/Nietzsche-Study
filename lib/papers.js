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
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
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

function isTableBlock(block) {
  const lines = block.split("\n").map((line) => line.trim());

  if (lines.length < 2) return false;

  return (
    lines.every((line) => line.startsWith("|")) &&
    /^\|?(?:\s*:?-+:?\s*\|)+\s*$/.test(lines[1])
  );
}

function renderTable(block) {
  const lines = block.split("\n").map((line) => line.trim());
  const rows = lines.map((line) =>
    line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => renderInlineMarkdown(normalizeParagraph(cell)))
  );

  const [header, , ...body] = rows;

  const headerHtml = header.map((cell) => `<th>${cell}</th>`).join("");
  const bodyHtml = body
    .map(
      (row) =>
        `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`
    )
    .join("");

  return `<div class="paper-table-wrap"><table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
}

function isOrderedListBlock(block) {
  return block
    .split("\n")
    .every((line) => /^\d+\.\s+/.test(line.trim()));
}

function isUnorderedListBlock(block) {
  return block
    .split("\n")
    .every((line) => /^[-*]\s+/.test(line.trim()));
}

function renderList(block, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  const pattern = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
  const items = block
    .split("\n")
    .map((line) => line.trim().replace(pattern, ""))
    .map((line) => `<li>${renderInlineMarkdown(normalizeParagraph(line))}</li>`)
    .join("");

  return `<${tag}>${items}</${tag}>`;
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
  if (!paper) return null;

  if (!paper.fileName && paper.assetUrl) {
    return {
      ...paper,
      markdown: null,
      html: null,
    };
  }

  if (!paper.fileName) return null;

  const markdown = await fs.readFile(path.join(PAPERS_DIR, paper.fileName), "utf8");

  return {
    ...paper,
    markdown,
    html: renderPaperMarkdown(markdown),
  };
}

export function getPaperStaticParams() {
  return getAllSubmittedPapers()
    .filter((paper) => paper.slug && (paper.fileName || paper.assetUrl))
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

      if (isTableBlock(block)) {
        return renderTable(block);
      }

      if (isOrderedListBlock(block)) {
        return renderList(block, true);
      }

      if (isUnorderedListBlock(block)) {
        return renderList(block, false);
      }

      return `<p>${renderInlineMarkdown(normalizeParagraph(block))}</p>`;
    })
    .join("\n");
}
