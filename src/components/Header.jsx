import React, { useState } from "react";

export default function Header({ cart, onCartClick, onSearch, searchQuery, setSearchQuery, onHome, onCategory }) {
  const [dept, setDept] = useState("All");
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const depts = ["All", "Electronics", "Fashion", "Books", "Toys", "Sports", "Kitchen", "Home"];

  return (
    <header style={{ background: "#131921", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", width: "100%", boxSizing: "border-box" }}>
        <div onClick={onHome} style={{ cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", padding: "4px 8px", borderRadius: 4, border: "1px solid transparent" }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          <svg width="80" height="28" viewBox="0 0 80 28">
            <text x="0" y="22" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="white">amazon</text>
            <path d="M8 25 Q35 32 65 25" stroke="#e47911" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <polygon points="64,22 68,25 64,28" fill="#e47911"/>
            <text x="52" y="14" fontFamily="Arial, sans-serif" fontSize="9" fill="white">.in</text>
          </svg>
        </div>

        <div style={{ color: "white", cursor: "pointer", flexShrink: 0, padding: "4px 6px", borderRadius: 4, border: "1px solid transparent" }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          <div style={{ fontSize: 10, color: "#ccc" }}>Deliver to</div>
          <div style={{ fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 3 }}>
            <span>📍</span> India
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center", borderRadius: 8, overflow: "hidden", height: 44, background: "#fff", padding: "4px", boxSizing: "border-box", boxShadow: "0 1px 3px rgba(2,6,23,0.08)" }}>
          <select value={dept} onChange={e => setDept(e.target.value)}
            style={{ background: "#fff", border: "none", padding: "6px 12px", fontSize: 13, color: "#111827", cursor: "pointer", borderRight: "1px solid #e6e7eb", height: 34 }}>
            {depts.map(d => <option key={d}>{d}</option>)}
          </select>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && onSearch(searchQuery, dept)}
            placeholder="Search Amazon.in"
            style={{ flex: 1, border: "none", padding: "8px 12px", fontSize: 14, outline: "none", background: "transparent", color: "#0f172a" }}
          />
          <button onClick={() => onSearch(searchQuery, dept)}
            style={{ background: "#ffd814", border: "1px solid #f0c14b", padding: "6px 12px", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", borderRadius: 6 }}
            onMouseEnter={e => e.currentTarget.style.background = "#f7ca00"}
            onMouseLeave={e => e.currentTarget.style.background = "#ffd814"}
          >
            🔍
          </button>
        </div>

        <div style={{ color: "white", cursor: "pointer", flexShrink: 0, padding: "4px 6px", borderRadius: 4, border: "1px solid transparent" }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          <div style={{ fontSize: 10, color: "#ccc" }}>Hello, Sign in</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Account & Lists ▾</div>
        </div>

        <div style={{ color: "white", cursor: "pointer", flexShrink: 0, padding: "4px 6px", borderRadius: 4, border: "1px solid transparent" }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          <div style={{ fontSize: 10, color: "#ccc" }}>Returns</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>&amp; Orders</div>
        </div>

        <div onClick={onCartClick} style={{ color: "white", cursor: "pointer", display: "flex", alignItems: "flex-end", gap: 4, padding: "4px 8px", borderRadius: 4, border: "1px solid transparent" }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          <div style={{ position: "relative" }}>
            <span style={{ fontSize: 32 }}>🛒</span>
            <span style={{ position: "absolute", top: -2, right: -4, background: "#f08804", color: "white", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
              {cartCount}
            </span>
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, paddingBottom: 4 }}>Cart</span>
        </div>
      </div>

      <div style={{ background: "#232f3e", padding: "6px 0", display: "flex", gap: 4, overflowX: "auto", width: "100%", boxSizing: "border-box" }}>
        <button style={{ background: "none", border: "none", color: "white", fontSize: 13, cursor: "pointer", padding: "4px 10px", borderRadius: 3, whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 4 }}
          onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
          onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
        >
          ☰ All
        </button>
        { ["Today's Deals", "Buy Again", "Amazon miniTV", "Customer Service", "Electronics", "Fashion", "Prime", "Home & Kitchen", "Mobiles", "New Releases"].map(item => (
          <button key={item} onClick={() => {
            const cat = ["Electronics","Fashion","Home","Books","Toys","Sports","Kitchen"].find(c => item.includes(c));
            if (cat) onCategory(cat);
          }}
            style={{ background: "none", border: "1px solid transparent", color: "white", fontSize: 13, cursor: "pointer", padding: "4px 10px", borderRadius: 3, whiteSpace: "nowrap" }}
            onMouseEnter={e => e.currentTarget.style.border = "1px solid white"}
            onMouseLeave={e => e.currentTarget.style.border = "1px solid transparent"}
          >
            {item}
          </button>
        )) }
      </div>
    </header>
  );
}
