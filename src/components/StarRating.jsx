import React from "react";

export default function StarRating({ rating, reviews }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <div style={{ display: "flex", color: "#e47911" }}>
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{ fontSize: 13 }}>
            {i <= full ? "★" : (i === full + 1 && half ? "⯨" : "☆")}
          </span>
        ))}
      </div>
      <span style={{ fontSize: 12, color: "#007185", cursor: "pointer" }}>
        ({reviews?.toLocaleString()})
      </span>
    </div>
  );
}
