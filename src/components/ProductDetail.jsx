import React, { useState } from "react";
import StarRating from "./StarRating";
import PrimeBadge from "./PrimeBadge";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data";

const btnPrimaryStyle = { background: "#ffd814", border: "1px solid #f0c14b", borderRadius: 8, padding: "12px", fontSize: 15, fontWeight: 600, cursor: "pointer", marginBottom: 10 };
const btnSecondaryStyle = { background: "#ff9900", border: "1px solid #e47911", borderRadius: 8, padding: "12px", fontSize: 15, fontWeight: 600, cursor: "pointer" };

export default function ProductDetail({ product, onBack, onAddToCart, onBuyNow }) {
  const [qty, setQty] = useState(1);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div style={{ width: "100%", padding: "20px 16px", boxSizing: "border-box" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "#007185", cursor: "pointer", fontSize: 14, marginBottom: 16, display: "flex", alignItems: "center", gap: 4 }}>
        ← Back to results
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 300px", gap: 32, background: "white", borderRadius: 10, padding: 32, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
        {/* Image */}
        <div style={{ background: "#f9fafb", borderRadius: 10, padding: 40, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400 }}>
          <img src={product.img} alt={product.title} style={{ maxWidth: "100%", maxHeight: 400, objectFit: "contain" }} />
        </div>

        {/* Details */}
        <div>
          <div style={{ fontSize: 12, color: "#007185", marginBottom: 4 }}>{product.category}</div>
          <h1 style={{ fontSize: 22, fontWeight: 400, margin: "0 0 12px", lineHeight: 1.4 }}>{product.title}</h1>
          <StarRating rating={product.rating} reviews={product.reviews} />

          <div style={{ borderTop: "1px solid #e6e7eb", margin: "16px 0", paddingTop: 16 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
              <span style={{ color: "#B12704", fontSize: 28, fontWeight: 700 }}>
                <sup style={{ fontSize: 14 }}>$</sup>{product.price.toFixed(2)}
              </span>
              <span style={{ color: "#767676", fontSize: 14 }}>M.R.P.:</span>
              <span style={{ color: "#767676", fontSize: 14, textDecoration: "line-through" }}>${product.originalPrice}</span>
              <span style={{ color: "#cc0c39", fontWeight: 600, fontSize: 14 }}>({discount}% off)</span>
            </div>
            {product.prime && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                <PrimeBadge />
                <span style={{ fontSize: 13, color: "#007185" }}>FREE delivery on orders above $499</span>
              </div>
            )}
          </div>

          <div style={{ marginBottom: 16 }}>
            <strong style={{ fontSize: 14 }}>About this item:</strong>
            <p style={{ fontSize: 14, color: "#333", lineHeight: 1.6, marginTop: 8 }}>{product.description}</p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Color", "Size", "Material"].map(attr => (
              <span key={attr} style={{ background: "#f9fafb", border: "1px solid #e6e7eb", borderRadius: 6, padding: "4px 10px", fontSize: 12 }}>{attr}</span>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ background: "#f9fafb", borderRadius: 10, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
          <div style={{ color: "#B12704", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>${product.price}</div>
          <div style={{ fontSize: 13, marginBottom: 12, color: "#007600", fontWeight: 600 }}>✓ In Stock</div>

          {product.prime && (
            <div style={{ background: "#e8f4fd", borderRadius: 6, padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#007185" }}>
              <PrimeBadge /> FREE delivery tomorrow
            </div>
          )}

          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 13, display: "block", marginBottom: 4 }}>Qty:</label>
            <select value={qty} onChange={e => setQty(+e.target.value)} style={{ padding: "6px 12px", border: "1px solid #e6e7eb", borderRadius: 6, fontSize: 13, width: "100%", boxSizing: "border-box" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n}>{n}</option>)}
            </select>
          </div>

          <button onClick={() => onAddToCart(product, qty)} style={btnPrimaryStyle} onMouseEnter={e => e.currentTarget.style.background = "#f7ca00"} onMouseLeave={e => e.currentTarget.style.background = "#ffd814"}>
            Add to Cart
          </button>
          <button onClick={() => onBuyNow(product, qty)} style={btnSecondaryStyle} onMouseEnter={e => e.currentTarget.style.background = "#e47911"} onMouseLeave={e => e.currentTarget.style.background = "#ff9900"}>
            Buy Now
          </button>

          <div style={{ marginTop: 16, fontSize: 12, color: "#6b7280", lineHeight: 1.8 }}>
            <div>Ships from: <strong>Amazon.in</strong></div>
            <div>Sold by: <strong>Amazon Retail India</strong></div>
            <div style={{ color: "#c7511f", cursor: "pointer" }}>🔒 Secure transaction</div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#0f172a" }}>Related Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {related.map(p => (
              <ProductCard key={p.id} product={p} onView={onBack} onAddToCart={(prod) => onAddToCart(prod, 1)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
