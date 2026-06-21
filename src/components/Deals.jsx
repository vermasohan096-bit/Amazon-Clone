import React from "react";

export default function Deals() {
  return (
    <div style={{ background: "#fffbeb", borderRadius: 10, padding: "12px 20px", marginBottom: 16, display: "flex", alignItems: "center", gap: 16, border: "none", boxShadow: "0 2px 8px rgba(251, 146, 60, 0.08)" }}>
      <span style={{ fontSize: 24 }}>⚡</span>
      <div>
        <strong style={{ color: "#c7511f" }}>Today's Deals</strong>
        <span style={{ fontSize: 13, color: "#555", marginLeft: 8 }}>Lightning deals — ends in 06:32:14</span>
      </div>
      <span style={{ marginLeft: "auto", color: "#007185", cursor: "pointer", fontSize: 14 }}>See all deals →</span>
    </div>
  );
}
