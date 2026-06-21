import React from "react";

export default function FilterBar({ page, filterCat, setFilterCat, searchResults, searchQuery, productsCount, sortBy, setSortBy }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, background: "white", padding: "12px 16px", borderRadius: 10, border: "none", boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {filterCat && (
          <>
            <button onClick={() => setFilterCat(null)} style={{ background: "none", border: "none", color: "#007185", cursor: "pointer", fontSize: 13 }}>← All</button>
            <span style={{ color: "#555" }}>›</span>
          </>
        )}
        <span style={{ fontSize: 14, color: "#6b7280", fontWeight: 500 }}>
          {page === "search" ? `${searchResults.length} results for "${searchQuery}"` :
            filterCat ? `${filterCat} (${productsCount} products)` :
            `All Products (${productsCount})`}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>Sort by:</span>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}
          style={{ padding: "6px 10px", border: "1px solid #e6e7eb", borderRadius: 6, fontSize: 13, background: "white", cursor: "pointer" }}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Avg. Customer Review</option>
          <option value="reviews">Most Reviewed</option>
        </select>
      </div>
    </div>
  );
}
