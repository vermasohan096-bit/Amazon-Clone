import React, { useState } from "react";
import { PRODUCTS, CATEGORIES, BANNERS } from "./data";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
import CartPanel from "./components/CartPanel";
import ProductDetail from "./components/ProductDetail";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home"); // home | product | search
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filterCat, setFilterCat] = useState(null);
  const [toast, setToast] = useState(null);
  const [sortBy, setSortBy] = useState("featured");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
    showToast(`✓ Added to cart: ${product.title.slice(0, 40)}...`);
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const handleSearch = (q, dept) => {
    const query = q.toLowerCase();
    const results = PRODUCTS.filter(p =>
      (p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) &&
      (dept === "All" || p.category === dept)
    );
    setSearchResults(results);
    setFilterCat(null);
    setPage("search");
  };

  const displayProducts = () => {
    let prods = page === "search" ? searchResults : filterCat ? PRODUCTS.filter(p => p.category === filterCat) : PRODUCTS;
    if (sortBy === "price-low") prods = [...prods].sort((a,b) => a.price - b.price);
    if (sortBy === "price-high") prods = [...prods].sort((a,b) => b.price - a.price);
    if (sortBy === "rating") prods = [...prods].sort((a,b) => b.rating - a.rating);
    if (sortBy === "reviews") prods = [...prods].sort((a,b) => b.reviews - a.reviews);
    return prods;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "Amazon Ember, Arial, sans-serif" }}>
      <Header
        cart={cart}
        onCartClick={() => setCartOpen(true)}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onHome={() => { setPage("home"); setFilterCat(null); setSearchQuery(""); }}
        onCategory={(cat) => { setFilterCat(cat); setPage("home"); }}
      />

      {/* Toast */}
      {toast && (
        <div style={{ position: "fixed", bottom: 30, left: "50%", transform: "translateX(-50%)", background: "#23aa5a", color: "white", padding: "12px 28px", borderRadius: 30, fontSize: 14, fontWeight: 600, zIndex: 9999, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", whiteSpace: "nowrap" }}>
          {toast}
        </div>
      )}

      {/* Cart Panel */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 999 }} />
          <CartPanel cart={cart} onClose={() => setCartOpen(false)} onUpdateQty={updateQty} onRemove={removeFromCart} />
        </>
      )}

      {/* Product Detail */}
      {page === "product" && selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setPage("home")}
          onAddToCart={addToCart}
          onBuyNow={(p, qty) => { addToCart(p, qty); setCartOpen(true); }}
        />
      ) : (
        <>
          {/* HOME page */}
          {page === "home" && !filterCat && (
            <Banner banners={BANNERS} />
          )}

          {/* Main content (full-bleed) */}
          <div style={{ width: "100%", padding: "16px 0", boxSizing: "border-box" }}>
            {/* Categories */}
            {page === "home" && !filterCat && (
              <Categories categories={CATEGORIES} onSelect={name => setFilterCat(name)} />
            )}

            {/* Deals */}
            {page === "home" && !filterCat && <Deals />}

            {/* Filter bar */}
            <FilterBar
              page={page}
              filterCat={filterCat}
              setFilterCat={setFilterCat}
              searchResults={searchResults}
              searchQuery={searchQuery}
              productsCount={PRODUCTS.length}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Products Grid */}
            <ProductGrid
              products={displayProducts()}
              onView={(p) => { setSelectedProduct(p); setPage("product"); window.scrollTo(0, 0); }}
              onAddToCart={addToCart}
            />
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}


export default App