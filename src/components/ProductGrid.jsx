import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onView, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 80, background: "white", borderRadius: 10, border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 60, marginBottom: 12 }}>🔍</div>
        <h2 style={{ color: "#0f172a" }}>No results found</h2>
        <p style={{ color: "#6b7280" }}>Try different keywords or check the spelling</p>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onView={onView} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
