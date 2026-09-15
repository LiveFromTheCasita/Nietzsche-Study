import { ImageResponse } from "next/og";

export const alt = "Nietzsche Study — Read closely. Think for yourself.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#1d1714", color: "#f7efe7", borderBottom: "12px solid #f1b663" }}>
      <div style={{ display: "flex", fontSize: 28, color: "#f1b663" }}>NIETZSCHE STUDY</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.1, fontWeight: 700 }}>
        <span>Read closely.</span><span>Think for yourself.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#d1c5ba" }}>
        <span>Books · Themes · Guided lessons</span><span>thewilltopower.com</span>
      </div>
    </div>,
    size,
  );
}
