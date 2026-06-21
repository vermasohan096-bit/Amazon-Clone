import React from "react";

export default function Footer() {
  return (
    <footer style={{ marginTop: 40 }}>
      <div style={{ background: "#1f2937", color: "white", padding: "30px 0", cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <p style={{ textAlign: "center", margin: 0, fontSize: 14, fontWeight: 500 }}>Back to top</p>
      </div>
      <div style={{ background: "#111827", color: "#d1d5db", padding: "40px 0" }}>
        <div style={{ width: "100%", margin: "0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[
            { title: "Get to Know Us", items: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"] },
            { title: "Make Money with Us", items: ["Sell on Amazon", "Sell under Amazon Accelerator", "Amazon Associates", "Fulfilment by Amazon", "Advertise Your Products"] },
            { title: "Amazon Payment Products", items: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"] },
            { title: "Let Us Help You", items: ["COVID-19 and Amazon", "Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices", "Amazon Assistant", "Help"] }
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: "white", margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>{col.title}</h4>
              {col.items.map(item => (
                <div key={item} style={{ fontSize: 13, marginBottom: 6, cursor: "pointer", color: "#9ca3af", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "white"}
                  onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
                >{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#0f172a", color: "#6b7280", padding: "20px 0", textAlign: "center", fontSize: 12 }}>
        <div style={{ marginBottom: 8 }}>
          { ["Conditions of Use & Sale", "Privacy Notice", "Interest-Based Ads"].map((item, i) => (
            <span key={item}>
              <span style={{ color: "#9ca3af", cursor: "pointer" }}>{item}</span>
              {i < 2 && <span style={{ margin: "0 10px" }}>|</span>}
            </span>
          )) }
        </div>
        © 1996-2025, Amazon.com, Inc. or its affiliates — Amazon Clone Demo
      </div>
    </footer>
  );
}
