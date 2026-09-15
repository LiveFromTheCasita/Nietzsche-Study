"use client";

import { useEffect, useRef } from "react";

export default function WorkEssayDisclosure({ id, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const openLinkedEssay = () => {
      if (window.location.hash === `#${id}` && ref.current) {
        ref.current.open = true;
        ref.current.scrollIntoView({ block: "start" });
      }
    };
    openLinkedEssay();
    window.addEventListener("hashchange", openLinkedEssay);
    return () => window.removeEventListener("hashchange", openLinkedEssay);
  }, [id]);
  return <details ref={ref} id={id} className="work-essay-disclosure work-essay-holder"><summary>{title}</summary>{children}</details>;
}
