import React from "react";
import StarRating from "./StarRating";
import PrimeBadge from "./PrimeBadge";

export default function ProductCard({ product, onView, onAddToCart }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  return (
    <div onClick={() => onView(product)} style={{ background: "#fff", borderRadius: 10, padding: 16, cursor: "pointer", border: "none", transition: "box-shadow 0.2s, transform 0.15s", display: "flex", flexDirection: "column", gap: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"; e.currentTarget.style.transform = "translateY(-4px)" }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "none" }}
    >
      <div style={{ position: "relative", textAlign: "center", background: "#f5f5f5", borderRadius: 6, padding: 12, height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={product.img} alt={product.title} style={{ maxHeight: 160, maxWidth: "100%", objectFit: "contain" }} />
        {product.badge && (
          <span style={{ position: "absolute", top: 8, left: 8, background: product.badge.includes("Best") ? "#cc0c39" : product.badge.includes("Deal") ? "#c7511f" : "#007185", color: "white", fontSize: 11, fontWeight: 700, padding: "2px 7px", borderRadius: 3 }}>
            {product.badge}
          </span>
        )}
      </div>
      <div style={{ fontSize: 13, color: "#0f172a", lineHeight: 1.4, fontWeight: 500, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {product.title}
      </div>
      <StarRating rating={product.rating} reviews={product.reviews} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ color: "#B12704", fontSize: 18, fontWeight: 700 }}>${product.price}</span>
        <span style={{ color: "#767676", fontSize: 12, textDecoration: "line-through" }}>${product.originalPrice}</span>
        <span style={{ color: "#cc0c39", fontSize: 12, fontWeight: 600 }}>-{discount}%</span>
      </div>
      {product.prime && <PrimeBadge />}
      <button
        onClick={e => { e.stopPropagation(); onAddToCart(product); }}
        style={{ background: "#ffd814", border: "1px solid #f0c14b", borderRadius: 20, padding: "6px 12px", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#0f1111", marginTop: 4, transition: "background 0.15s" }}
        onMouseEnter={e => e.currentTarget.style.background = "#f7ca00"}
        onMouseLeave={e => e.currentTarget.style.background = "#ffd814"}
      >
        Add to Cart
      </button>
    </div>
  );
}
