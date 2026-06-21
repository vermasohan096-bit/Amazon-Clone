import React, { useState, useEffect } from "react";

export default function Banner({ banners }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, [banners.length]);
  const b = banners[idx];
  return (
    <div style={{ position: "relative", background: b.bg, padding: "60px 0", minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", transition: "background 0.8s" }}>
      <div style={{ color: "white", width: "100%", padding: "0 24px", boxSizing: "border-box" }}>
        <div style={{ fontSize: 14, color: b.accent, fontWeight: 600, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>Special Offer</div>
        <h1 style={{ fontSize: 42, fontWeight: 900, margin: "0 0 12px", lineHeight: 1.1, fontFamily: "Georgia, serif" }}>{b.title}</h1>
        <p style={{ fontSize: 18, color: "#ddd", margin: "0 0 28px" }}>{b.subtitle}</p>
        <button style={{ background: b.accent, color: "#0f1111", border: "none", padding: "12px 32px", fontSize: 16, fontWeight: 700, borderRadius: 8, cursor: "pointer", transition: "opacity 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          {b.cta} →
        </button>
      </div>
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8 }}>
        {banners.map((_, i) => (
          <div key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? b.accent : "rgba(255,255,255,0.4)", cursor: "pointer", transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
