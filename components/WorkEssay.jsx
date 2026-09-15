const workEssaySubheadings = new Set([
  "Main Question",
  "Summary",
  "Key Concepts",
  "Place in Nietzsche’s Larger Philosophy",
]);

function isWorkEssayMajorHeading(block) {
  return /^Part (One|Two|Three):/.test(block) || block.startsWith("Final Reflection:");
}

function getMarkdownHeading(block) {
  const match = block.match(/^(#{1,4})\s+(.+)$/);
  if (!match) return null;
  return { level: Math.min(Number(match[1].length) + 1, 4), text: match[2] };
}

function getBoldHeading(block) {
  const match = block.match(/^\*\*(.+)\*\*$/);
  if (!match) return null;
  return { level: 3, text: match[1] };
}

function renderInlineText(text) {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) return <a key={`${index}-${part}`} href={link[2]}>{link[1]}</a>;
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${index}-${part}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${index}-${part}`}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}

function renderWorkEssayHeading(level, text, key) {
  if (level === 2) return <h2 key={key}>{renderInlineText(text)}</h2>;
  if (level === 3) return <h3 key={key}>{renderInlineText(text)}</h3>;
  return <h4 key={key}>{renderInlineText(text)}</h4>;
}

function stripInlineMarkdown(text) {
  return text.replace(/^#{1,4}\s+/, "").replace(/\*\*/g, "").replace(/\*/g, "").trim();
}

function getCodeBlock(block) {
  const match = block.match(/^(?:```|~~~)([\w-]+)?\n([\s\S]*?)\n(?:```|~~~)$/);
  if (!match) return null;
  return { language: match[1] || "text", code: match[2] };
}

function parseTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function getMarkdownTable(block) {
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 3 || !lines.every((line) => line.startsWith("|"))) return null;
  if (!/^\|?\s*:?-{3,}/.test(lines[1])) return null;

  return {
    headers: parseTableRow(lines[0]),
    rows: lines.slice(2).map(parseTableRow),
  };
}

function WorkEssayCodeBlock({ codeBlock }) {
  return (
    <pre className={`work-essay-code work-essay-code--${codeBlock.language}`}>
      <code>{codeBlock.code}</code>
    </pre>
  );
}

function WorkEssayTable({ table }) {
  return (
    <div className="work-essay-table-wrap">
      <table>
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{renderInlineText(header)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`}>{renderInlineText(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getWorkEssayBlocks(essay) {
  return essay
    .trim()
    .split(/\n{2,}/)
    .flatMap((block) => {
      const lines = block.trim().split("\n");

      if (lines.length > 1 && isWorkEssayMajorHeading(lines[0])) {
        return [lines[0], lines.slice(1).join("\n").trim()].filter(Boolean);
      }

      return [block.trim()];
    })
    .filter(Boolean);
}

export default function WorkEssay({ essay }) {
  if (!essay) return null;

  const blocks = getWorkEssayBlocks(essay);

  return (
    <article className="work-essay">
      {blocks.map((block, index) => {
        const codeBlock = getCodeBlock(block);
        if (codeBlock) {
          return <WorkEssayCodeBlock key={`${index}-code`} codeBlock={codeBlock} />;
        }

        const table = getMarkdownTable(block);
        if (table) {
          return <WorkEssayTable key={`${index}-table`} table={table} />;
        }

        const lines = block.split("\n");
        if (lines.every((line) => /^[-*]\s+/.test(line))) {
          return <ul key={`${index}-list`}>{lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineText(line.replace(/^[-*]\s+/, ""))}</li>)}</ul>;
        }
        if (lines.every((line) => /^\d+[.)]\s+/.test(line))) {
          return <ol key={`${index}-list`}>{lines.map((line, lineIndex) => <li key={lineIndex}>{renderInlineText(line.replace(/^\d+[.)]\s+/, ""))}</li>)}</ol>;
        }

        const markdownHeading = getMarkdownHeading(block);
        if (markdownHeading) {
          return renderWorkEssayHeading(markdownHeading.level, markdownHeading.text, `${index}-${block}`);
        }

        const boldHeading = getBoldHeading(block);
        if (boldHeading) {
          return renderWorkEssayHeading(boldHeading.level, boldHeading.text, `${index}-${block}`);
        }

        if (index === 0) {
          return <h2 key={`${index}-${block}`}>{renderInlineText(block)}</h2>;
        }

        if (isWorkEssayMajorHeading(block)) {
          return <h3 key={`${index}-${block}`}>{renderInlineText(block)}</h3>;
        }

        if (workEssaySubheadings.has(block)) {
          return <h4 key={`${index}-${block}`}>{renderInlineText(block)}</h4>;
        }

        return <p key={`${index}-${block.slice(0, 32)}`}>{renderInlineText(block)}</p>;
      })}
    </article>
  );
}

function getWorkEssayTitle(essay) {
  const firstBlock = getWorkEssayBlocks(essay)[0] || "Essay";
  return stripInlineMarkdown(firstBlock);
}

export function normalizeWorkEssays(essay, essays) {
  const items = essays || (essay ? [essay] : []);

  return items
    .map((item, index) => {
      const content = typeof item === "string" ? item : item.content;
      if (!content) return null;

      const id = typeof item === "string" ? `work-essay-${index + 1}` : item.id || `work-essay-${index + 1}`;

      return {
        id,
        anchorId: `development-${id}`,
        title: typeof item === "string" ? getWorkEssayTitle(content) : item.title || getWorkEssayTitle(content),
        content,
      };
    })
    .filter(Boolean);
}
