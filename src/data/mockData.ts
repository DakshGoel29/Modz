// Digital Marketing Practice Mock Data
// Providing substantial realistic records for testing funnels, filtering, and components

export const FEATURED_CATEGORIES = [
  { id: 1, name: "Seat Covers", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800", slug: "seat-covers", filterCategory: "Interior" },
  { id: 2, name: "Alloy Wheels", image: "https://images.unsplash.com/photo-1615886981881-54c37e6f30e9?auto=format&fit=crop&q=80&w=800", slug: "alloy-wheels", filterCategory: "Exterior" },
  { id: 3, name: "LED Lighting", image: "https://images.unsplash.com/photo-1549646487-73d82d49bb1e?auto=format&fit=crop&q=80&w=800", slug: "led-lighting", filterCategory: "Electronics" },
  { id: 4, name: "Dash Cameras", image: "https://images.unsplash.com/photo-1587309995116-f3ec0b021d7b?auto=format&fit=crop&q=80&w=800", slug: "dash-cameras", filterCategory: "Electronics" },
  { id: 5, name: "Floor Mats", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800", slug: "floor-mats", filterCategory: "Interior" },
  { id: 6, name: "Detailing Kits", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800", slug: "detailing", filterCategory: "Detailing" },
  { id: 7, name: "Performance Accessories", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800", slug: "performance", filterCategory: "Performance" }
];

export const PRODUCTS = [
  { id: "P101", name: "Premium Leather Seat Cover", category: "Interior", price: 8999, originalPrice: 10999, rating: 4.8, reviews: 245, image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80", inStock: true, brand: "EliteModz" },
  { id: "P102", name: "Luxury Car Perfume", category: "Interior", price: 1299, originalPrice: 1999, rating: 4.9, reviews: 1045, image: "https://images.unsplash.com/photo-1596751303335-ca4afb9eeeba?auto=format&fit=crop&q=80", inStock: true, brand: "AromaDrive" },
  { id: "P103", name: "Dashboard Accessories Set", category: "Interior", price: 799, originalPrice: 1200, rating: 4.5, reviews: 189, image: "https://images.unsplash.com/photo-1507133750070-44473e65c0bd?auto=format&fit=crop&w=800", inStock: true, brand: "EliteModz" },
  { id: "P104", name: "4K Dash Cam Pro", category: "Electronics", price: 6999, originalPrice: 8499, rating: 4.7, reviews: 341, image: "https://images.unsplash.com/photo-1587309995116-f3ec0b021d7b?auto=format&fit=crop&q=80", inStock: true, brand: "Carbon" },
  { id: "P105", name: "NeoGlow LED Headlights", category: "Exterior", price: 5499, originalPrice: 7999, rating: 4.9, reviews: 512, image: "https://images.unsplash.com/photo-1563223771-4775d71311ff?auto=format&fit=crop&q=80", inStock: true, brand: "NeoGlow" },
  { id: "P106", name: "Aero Alloy Wheel Set", category: "Exterior", price: 29999, originalPrice: 35000, rating: 5.0, reviews: 88, image: "https://images.unsplash.com/photo-1615886981881-54c37e6f30e9?auto=format&fit=crop&q=80", inStock: true, brand: "AeroWheels" },
  { id: "P107", name: "Magnetic Window Shades", category: "Interior", price: 1499, originalPrice: 2000, rating: 4.6, reviews: 124, image: "https://plus.unsplash.com/premium_photo-1661876541629-9e8cbbfa8629?auto=format&fit=crop&q=80", inStock: true, brand: "EliteModz" },
  { id: "P108", name: "Diamond Floor Mats (7D)", category: "Interior", price: 4299, originalPrice: 5999, rating: 4.6, reviews: 341, image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80", inStock: true, brand: "EliteModz" },
  { id: "P109", name: "Microfiber Cleaning Cloth", category: "Detailing", price: 599, originalPrice: 999, rating: 4.8, reviews: 2041, image: "https://images.unsplash.com/photo-1550355191-aa8a80b41353?auto=format&fit=crop&q=80", inStock: true, brand: "GlossMax" }
];

export const TESTIMONIALS = [
  { id: 1, name: "Rahul Sharma", city: "Delhi", car: "Hyundai Creta", avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, text: "The quality exceeded my expectations. My Creta looks completely transformed." },
  { id: 2, name: "Aman Verma", city: "Chandigarh", car: "Kia Seltos", avatar: "https://randomuser.me/api/portraits/men/44.jpg", rating: 5, text: "Fast delivery and excellent customer support. Highly recommended for premium parts." },
  { id: 3, name: "Vikram Patel", city: "Ahmedabad", car: "Toyota Fortuner", avatar: "https://randomuser.me/api/portraits/men/67.jpg", rating: 5, text: "Professional installation and premium finish. The ambient lights and Android screen are flawless." },
  { id: 4, name: "Neha Singh", city: "Mumbai", car: "Tata Harrier", avatar: "https://randomuser.me/api/portraits/women/24.jpg", rating: 4, text: "Got the 7D floor mats and custom seat covers. Really good fitment, totally worth it." },
  { id: 5, name: "Arjun Kapoor", city: "Pune", car: "Mahindra Thar", avatar: "https://randomuser.me/api/portraits/men/85.jpg", rating: 5, text: "The offroad accessories are top notch. Loving the new vibe of my Thar." },
  { id: 6, name: "Simran Kaur", city: "Delhi", car: "Maruti Baleno", avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, text: "The custom lighting looks beautiful and the service was super fast!" },
  { id: 7, name: "Karan Singh", city: "Gurgaon", car: "VW Polo GT", avatar: "https://randomuser.me/api/portraits/men/22.jpg", rating: 5, text: "High-performance parts are legit. Excellent quality and easy installation." },
  { id: 8, name: "Rohan Desai", city: "Bangalore", car: "Honda Civic", avatar: "https://randomuser.me/api/portraits/men/91.jpg", rating: 4, text: "Got the Ceramic coating. The shine is unreal but took a little longer than expected." },
  { id: 9, name: "Priya Sharma", city: "Chennai", car: "Kia Sonet", avatar: "https://randomuser.me/api/portraits/women/65.jpg", rating: 5, text: "The floor mats and seat covers fit perfectly. Friendly staff and great communication." },
  { id: 10, name: "Ankit Jain", city: "Jaipur", car: "Ford Endeavour", avatar: "https://randomuser.me/api/portraits/men/11.jpg", rating: 5, text: "Best place for premium SUV modifications. Highly recommended." }
];

export const BLOG_POSTS = [
  { id: 1, title: "Best Ceramic Coatings For Indian Weather", category: "Car Care", date: "Oct 15, 2025", readTime: "5 min", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600" },
  { id: 2, title: "Automotive Accessories Trends 2026", category: "Trends", date: "Oct 20, 2025", readTime: "7 min", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600" },
  { id: 3, title: "Best Accessories For Mahindra Scorpio N", category: "SEO", date: "Nov 02, 2025", readTime: "6 min", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600" },
  { id: 4, title: "Choosing The Right Dash Camera", category: "Buying Guides", date: "Nov 05, 2025", readTime: "8 min", image: "https://images.unsplash.com/photo-1587309995116-f3ec0b021d7b?auto=format&fit=crop&w=600" }
];

export const GALLERY_IMAGES = [
  { id: 1, type: "SUVs", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80", title: "Fortuner Black Edition" },
  { id: 2, type: "Sedans", image: "https://images.unsplash.com/photo-1555562139-44d5cf3ff2a7?auto=format&fit=crop&q=80", title: "Honda City Carbon Fiber" },
  { id: 3, type: "Luxury Cars", image: "https://images.unsplash.com/photo-1503376713400-09db171f1d17?auto=format&fit=crop&q=80", title: "BMW 5 Series Wrap" },
  { id: 4, type: "Hatchbacks", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80", title: "Swift Sport Mods" },
  { id: 5, type: "SUVs", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80", title: "Thar Offroad Build" },
  { id: 6, type: "Luxury Cars", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80", title: "Mercedes Ceramic Coat" },
];

export const SERVICES = [
  { id: "S1", name: "Deep Cleaning", startPrice: 3499, description: "Professional deep cleaning inside out with aroma treatment, vacuuming & leather conditioning.", image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800" },
  { id: "S2", name: "Custom Lighting Installation", startPrice: 4999, description: "Ambient lights, LED beams, and starlight roof.", image: "https://images.unsplash.com/photo-1549646487-73d82d49bb1e?auto=format&fit=crop&q=80&w=800" },
  { id: "S3", name: "Infotainment Upgrade", startPrice: 7999, description: "Android screens with Apple CarPlay & premium sound.", image: "https://images.unsplash.com/photo-1533558701576-23c65e0272fb?auto=format&fit=crop&q=80&w=800" },
  { id: "S4", name: "Ceramic Coating", startPrice: 14999, description: "9H hard protection lasting up to 3 years.", image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" }
];

export const FAQS = [
  { q: "Do you deliver across India?", a: "Yes, we ship to over 120+ cities across India via our premium logistics partners." },
  { q: "Do products include warranty?", a: "All our products come with a genuine brand warranty ranging from 1 to 5 years depending on the item." },
  { q: "Can I return products?", a: "Yes, we have a 7-day hassle-free return policy for unused products in original packaging." },
  { q: "How long does installation take?", a: "Most basic accessories are installed in 1-2 hours. Complex electronics or detailing might take up to a full day." },
  { q: "Do you offer COD?", a: "Yes, Cash on Delivery is available for orders below ₹10,000." },
  { q: "Do you provide professional fitting?", a: "Absolutely. We have partner garages and in-house technicians for professional fittings." }
];
