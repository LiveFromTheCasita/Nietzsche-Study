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
      title: "Paper Not Found",
    };
  }

  return {
    title: paper.title,
    alternates: { canonical: `/corpus/papers/${slug}` },
    description: paper.summary,
  };
}

export default async function PaperPage({ params }) {
  const { slug } = await params;
  const paper = await getPaperDocument(slug);

  if (!paper) notFound();

  return (
    <main id="content" tabIndex={-1} className="paper-page">
      <div className="paper-shell">
        <Link href="/themes" className="text-link">
          Back to themes
        </Link>

        <header className="paper-header">
          <div className="chip-row">
            <span className="meta-chip meta-chip--amber">Submitted Paper</span>
            {paper.theme ? <span className="meta-chip">{paper.theme.title}</span> : null}
            {paper.submittedOn ? <span className="meta-chip">Submitted {paper.submittedOn}</span> : null}
            {paper.type ? <span className="meta-chip">{paper.type}</span> : null}
          </div>
          <h1>{paper.title}</h1>
          <p className="fine-print">Site editor: <Link href="/about">Bob Smith</Link></p>
          {paper.summary ? <p className="paper-intro">{paper.summary}</p> : null}
        </header>

        {paper.html ? (
          <article className="paper-prose" dangerouslySetInnerHTML={{ __html: paper.html }} />
        ) : paper.assetUrl ? (
          <section className="paper-file-viewer" aria-label={`${paper.title} PDF`}>
            <div className="paper-file-viewer__actions">
              <a href={paper.assetUrl} className="button button--primary">
                Open PDF
              </a>
              <a href={paper.assetUrl} download className="button button--secondary">
                Download
              </a>
            </div>
            <iframe src={paper.assetUrl} title={`${paper.title} PDF`} className="paper-pdf-frame" />
          </section>
        ) : null}
      </div>
    </main>
  );
}
