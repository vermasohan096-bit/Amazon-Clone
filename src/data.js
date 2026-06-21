export const PRODUCTS = [
  { id: 1, title: "Apple AirPods Pro (2nd Gen)", price: 189.99, originalPrice: 249.99, rating: 4.8, reviews: 84321, category: "Electronics", badge: "Best Seller", img: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80", description: "Active Noise Cancellation, Transparency Mode, Adaptive Audio, Personalized Spatial Audio, MagSafe Charging Case, USB-C.", prime: true },
  { id: 2, title: "Samsung 55\" 4K QLED Smart TV", price: 597.99, originalPrice: 799.99, rating: 4.7, reviews: 32541, category: "Electronics", badge: "Deal of the Day", img: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHR2JTIwc2Ftc3VuZyUyMHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D", description: "Quantum HDR, Motion Xcelerator Turbo+, Object Tracking Sound, built-in Alexa, Game Mode.", prime: true },
  { id: 3, title: "Instant Pot Duo 7-in-1", price: 59.99, originalPrice: 99.99, rating: 4.7, reviews: 128000, category: "Kitchen", badge: "#1 Best Seller", img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&q=80", description: "Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, warmer. 6 Quart.", prime: true },
  { id: 4, title: "Kindle Paperwhite (16 GB)", price: 139.99, originalPrice: 159.99, rating: 4.8, reviews: 61200, category: "Electronics", badge: "Amazon's Choice", img: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=400&q=80", description: "The thinnest, lightest Kindle Paperwhite ever. Flush-front design and 300 ppi glare-free display.", prime: true },
  { id: 5, title: "Nike Air Max 270 Sneakers", price: 89.95, originalPrice: 130.00, rating: 4.6, reviews: 18432, category: "Fashion", badge: "", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", description: "Nike's first lifestyle Air unit, visible 270 degrees. Engineered mesh upper, foam midsole.", prime: true },
  { id: 6, title: "LEGO Star Wars Millennium Falcon", price: 169.99, originalPrice: 199.99, rating: 4.9, reviews: 9823, category: "Toys", badge: "Limited Deal", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", description: "1,351 pieces. Features rotating gun turrets, lowering boarding ramp, and removable cockpit cover.", prime: false },
  { id: 7, title: "Dyson V15 Detect Cordless Vacuum", price: 549.99, originalPrice: 749.99, rating: 4.7, reviews: 7841, category: "Home", badge: "Amazon's Choice", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", description: "Laser detects invisible dust. LCD screen shows scientifically-proven real-time particle count.", prime: true },
  { id: 8, title: "The Alchemist by Paulo Coelho", price: 11.99, originalPrice: 17.99, rating: 4.8, reviews: 245000, category: "Books", badge: "#1 Best Seller", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80", description: "A special 25th anniversary edition of the extraordinary international bestseller.", prime: true },
  { id: 9, title: "Logitech MX Master 3S Mouse", price: 74.99, originalPrice: 99.99, rating: 4.8, reviews: 28310, category: "Electronics", badge: "Best Seller", img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80", description: "8K DPI any-surface tracking, quiet clicks, fast magnetic scroll wheel, USB-C charging.", prime: true },
  { id: 10, title: "Hydro Flask 32 oz Water Bottle", price: 34.95, originalPrice: 44.95, rating: 4.8, reviews: 43200, category: "Sports", badge: "Amazon's Choice", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80", description: "TempShield double-wall vacuum insulation. 18/8 pro-grade stainless steel. Keeps cold 24hrs.", prime: true },
  { id: 11, title: "Sony WH-1000XM5 Headphones", price: 279.99, originalPrice: 399.99, rating: 4.8, reviews: 19203, category: "Electronics", badge: "Deal", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", description: "Industry-leading noise cancellation, 30-hr battery, Multipoint Connection, speak-to-chat.", prime: true },
  { id: 12, title: "Vitamix E310 Explorian Blender", price: 299.95, originalPrice: 349.95, rating: 4.8, reviews: 11820, category: "Kitchen", badge: "", img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&q=80", description: "10 variable speeds, pulse feature, 48 oz container. 5-year full warranty.", prime: true },
];

export const CATEGORIES = [
  { name: "Electronics", icon: "💻", color: "#146eb4" },
  { name: "Fashion", icon: "👗", color: "#c7511f" },
  { name: "Home", icon: "🏠", color: "#067D62" },
  { name: "Books", icon: "📚", color: "#e47911" },
  { name: "Toys", icon: "🎮", color: "#cc0c39" },
  { name: "Sports", icon: "⚽", color: "#007185" },
  { name: "Kitchen", icon: "🍳", color: "#c45500" },
  { name: "Garden", icon: "🌿", color: "#067D62" },
];

export const BANNERS = [
  { bg: "linear-gradient(135deg, #131921 0%, #232f3e 100%)", title: "Great Indian Festival", subtitle: "Up to 80% off on Electronics", cta: "Shop Now", accent: "#febd69" },
  { bg: "linear-gradient(135deg, #1a6b36 0%, #0f4c23 100%)", title: "Prime Day Deals", subtitle: "Exclusive deals for Prime members", cta: "Get Prime", accent: "#00a8e1" },
  { bg: "linear-gradient(135deg, #c7511f 0%, #8b3914 100%)", title: "New Season Fashion", subtitle: "Trending styles & top brands", cta: "Explore Now", accent: "#febd69" },
];

export default { PRODUCTS, CATEGORIES, BANNERS };
