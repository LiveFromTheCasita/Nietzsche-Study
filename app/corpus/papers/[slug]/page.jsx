import Link from "next/link";
import { notFound } from "next/navigation";

import { getPaperDocument, getPaperStaticParams } from "../../../../lib/papers";

export async function generateStaticParams() {
  return getPaperStaticParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const paper = await getPaperDocument(slug);

  if (!paper) {
    return {
      title: "Paper Not Found | Nietzsche Study",
    };
  }

  return {
    title: `${paper.title} | Nietzsche Study`,
    description: paper.summary,
  };
}

export default async function PaperPage({ params }) {
  const { slug } = await params;
  const paper = await getPaperDocument(slug);

  if (!paper) notFound();

  return (
    <main className="paper-page">
      <div className="paper-shell">
        <Link href="/#themes" className="text-link">
          Back to corpus
        </Link>

        <header className="paper-header">
          <div className="chip-row">
            <span className="meta-chip meta-chip--amber">Submitted Paper</span>
            {paper.theme ? <span className="meta-chip">{paper.theme.title}</span> : null}
            {paper.submittedOn ? <span className="meta-chip">Submitted {paper.submittedOn}</span> : null}
          </div>
          <h1>{paper.title}</h1>
          {paper.summary ? <p className="paper-intro">{paper.summary}</p> : null}
        </header>

        <article className="paper-prose" dangerouslySetInnerHTML={{ __html: paper.html }} />
      </div>
    </main>
  );
}
