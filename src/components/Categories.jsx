import React from "react";

export default function Categories({ categories, onSelect }) {
  return (
    <div style={{ background: "white", borderRadius: 10, padding: 20, marginBottom: 16, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 16px", color: "#0f172a" }}>Shop by Category</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 12 }}>
        {categories.map(cat => (
          <div key={cat.name} onClick={() => onSelect(cat.name)}
            style={{ textAlign: "center", cursor: "pointer", padding: "12px 8px", borderRadius: 10, border: "none", background: "#ebedee", transition: "all 0.2s", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "#ebe9e9"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.05)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "#ecedee"; }}
          >
            <div style={{ fontSize: 28, marginBottom: 6 }}>{cat.icon}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: cat.color }}>{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
