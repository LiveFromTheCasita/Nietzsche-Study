"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
  ["/lessons", "Start here"],
  ["/works", "Books"],
  ["/themes", "Themes"],
  ["/navigator", "Passage navigator"],
  ["/the-will-to-power", "The Will to Power"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);

  return (
    <header className="site-nav" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }}>
      <a href="#content" className="skip-link" onClick={() => setOpen(false)}>Skip to content</a>
      <div className="site-nav__inner">
        <Link href="/" className="site-nav__brand" onClick={() => setOpen(false)}>
          Nietzsche Study
          <span className="site-nav__descriptor">The Will to Power</span>
        </Link>
        <button ref={menuButton} type="button" className="site-nav__toggle" aria-expanded={open}
          aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Menu"}
        </button>
        <nav id="primary-navigation" className={`site-nav__links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined}
              onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
