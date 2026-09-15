import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="study-footer">
      <div className="study-footer__inner">
        <div>
          <Link href="/" className="site-nav__brand">Nietzsche Study</Link>
          <p>Read closely. Follow the argument. Test your interpretation.</p>
          <p className="fine-print">Edited by <Link href="/about">Bob Smith</Link></p>
        </div>
        <nav aria-label="Editorial information">
          <Link href="/about">About</Link>
          <Link href="/method">Reading method</Link>
          <Link href="/editions">Editions &amp; sources</Link>
        </nav>
      </div>
    </footer>
  );
}
