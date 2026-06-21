import React from "react";

const cartPanelStyles = {
  container: { position: "fixed", top: 0, right: 0, height: "100vh", width: 420, background: "white", boxShadow: "-4px 0 24px rgba(0,0,0,0.12)", zIndex: 1000, display: "flex", flexDirection: "column", overflowY: "hidden" },
  header: { padding: "16px 20px", background: "#1f2937", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 },
  itemsList: { flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 0 },
  emptyCart: { textAlign: "center", padding: 60, color: "#6b7280", margin: "auto" },
  item: { display: "flex", gap: 12, padding: "16px 0", borderBottom: "1px solid #e5e7eb", alignItems: "flex-start" },
  itemImg: { width: 80, height: 80, objectFit: "contain", background: "#f3f4f6", borderRadius: 8, flexShrink: 0 },
  qtyBtn: { width: 32, height: 32, borderRadius: "50%", border: "2px solid #131921", background: "#ffffff", cursor: "pointer", fontSize: 16, fontWeight: 600, color: "#131921", transition: "all 0.2s ease", display: "flex", alignItems: "center", justifyContent: "center" },
  footer: { padding: "20px", borderTop: "1px solid #e5e7eb", background: "#fff", flexShrink: 0 },
  btnPrimary: { width: "100%", background: "#ffd814", border: "1px solid #f0c14b", borderRadius: 8, padding: "12px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 10, color: "#000", transition: "all 0.2s ease" },
  btnSecondary: { width: "100%", background: "#e8e8e8", border: "1px solid #d1d1d1", borderRadius: 8, padding: "12px", fontSize: 14, cursor: "pointer", fontWeight: 600, transition: "all 0.2s ease" }
};

export default function CartPanel({ cart, onClose, onUpdateQty, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const itemCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={cartPanelStyles.container}>
      <div style={cartPanelStyles.header}>
        <h2 style={{ margin: 0, fontSize: 18 }}>🛒 Cart ({itemCount})</h2>
        <button onClick={onClose} style={{ background: "none", border: "none", color: "white", fontSize: 24, cursor: "pointer" }}>✕</button>
      </div>

      <div style={cartPanelStyles.itemsList}>
        {cart.length === 0 ? (
          <div style={cartPanelStyles.emptyCart}>
            <div style={{ fontSize: 60, marginBottom: 12 }}>🛒</div>
            <p style={{ fontSize: 16, marginBottom: 20 }}>Your cart is empty</p>
            <button onClick={onClose} style={cartPanelStyles.btnPrimary}>Continue Shopping</button>
          </div>
        ) : (
          cart.map(item => (
            <div key={item.id} style={cartPanelStyles.item}>
              <img src={item.img} alt={item.title} style={cartPanelStyles.itemImg} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4, lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ color: "#B12704", fontWeight: 700, fontSize: 15 }}>${(item.price * item.qty).toFixed(2)}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                  <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={cartPanelStyles.qtyBtn}>−</button>
                  <span style={{ fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                  <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={cartPanelStyles.qtyBtn}>+</button>
                  <button onClick={() => onRemove(item.id)} style={{ marginLeft: 8, color: "#c7511f", background: "none", border: "none", cursor: "pointer", fontSize: 12, textDecoration: "underline" }}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div style={cartPanelStyles.footer}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: 4 }}>
            <span>Subtotal:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 16 }}>✓ FREE Delivery on this order</div>
          <button style={cartPanelStyles.btnPrimary} onMouseEnter={e => e.currentTarget.style.background = "#f7ca00"} onMouseLeave={e => e.currentTarget.style.background = "#ffd814"}>Proceed to Checkout →</button>
          <button onClick={onClose} style={cartPanelStyles.btnSecondary} onMouseEnter={e => e.currentTarget.style.background = "#f3f4f6"} onMouseLeave={e => e.currentTarget.style.background = "white"}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}
