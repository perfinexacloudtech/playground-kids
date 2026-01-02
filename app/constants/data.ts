export const CATEGORIES = [
  { id: "gym", name: "Outdoor Gym", slug: "outdoor-gym", image: "/images/outdoor.webp" },
  { id: "playground", name: "Outdoor Playground",slug: "outdoor-playground" , image: "/images/outdoor1.webp" },
  { id: "play-equip", name: "Playground Equip",slug: "playground-equip", image: "/images/playground.webp" },
  // { id: "play-outdoor", name: "Outdoor Play",slug: "outdoor-play" , image: "/images/outdoorplay.webp" },
  // { id: "slide", name: "Playground Slide", slug:"playground-slide", image: "/images/playground.webp" },
  // { id: "multiplay", name: "Multiplay Station", slug:"multiplay-station" ,image: "/images/multiplay.webp" },
  { id: "indoor", name: "Indoor Equipment", slug:"indoor-equip" ,image: "/images/indoor.webp" },
  // { id: "open-gym", name: "Open Gym", slug:"open-gym" , image: "/images/opengym.webp" },
  { id: "dustbin", name: "Fiber Dustbin", slug:"dustbin" , image: "/images/dustbin.webp" },
];

export const TOP_DEALS = [
  {
    id: "triple-twister-gym",
    name: "Triple Twister Outdoor Gym",
    price: "₹26,500",
    oldPrice: "₹31,000",
    discount: "15% off",
    image: "/images/outdoor-gym-triple-twister.jpg",
    category: "Outdoor Gym",
    hot: true
  },
  {
    id: "multiplay-system-350",
    name: "Outdoor Multiplay System",
    price: "₹3,50,000",
    oldPrice: "₹4,00,000",
    discount: "12% off",
    image: "/images/Outdoor Multiplay System.webp",
    category: "Playground",
    hot: true
  },
  {
    id: "frp-plain-slide",
    name: "Frp Plain Slide",
    price: "₹24,500",
    oldPrice: "₹28,000",
    discount: "12% off",
    image: "/images/08-Foot-FRP-Plain-Slide.jpg",
    category: "Slides",
    hot: false
  },
  {
    id: "jumbo-nursery-set",
    name: "Multiplay Nursery Jumbo Set",
    price: "₹79,990",
    oldPrice: "₹85,000",
    discount: "6% off",
    image: "/images/Multiplay Nursery Jumbo Set.jpg",
    category: "Indoor",
    hot: true
  }
];


export const ALL_PRODUCTS = [
  // ================= OUTDOOR GYM =================
  {
    id: "triple-twister",
    name: "Triple Twister Outdoor Gym",
    price: "₹26,500",
    category: "Outdoor Gym",
    categorySlug: "outdoor-gym",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/outdoor-gym-triple-twister.jpg",
    specs: { automation: "Manual", portable: "Yes" }
  },
  {
    id: "leg-press-double",
    name: "Leg Press Double Outdoor",
    price: "₹28,900",
    category: "Outdoor Gym",
    categorySlug: "outdoor-gym",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/leg-press-double.jpeg",
    specs: { automation: "Manual" }
  },
  {
    id: "outdoor-chest-press",
    name: "Outdoor Chest Press Double",
    price: "₹42,900",
    category: "Outdoor Gym",
    categorySlug: "outdoor-gym",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/chest-press-double.jpg",
    specs: { model: "Chest Press", usage: "Outdoor Gym" }
  },
  {
    id: "dual-leg-press-ms",
    name: "Mild Steel Outdoor Gym Dual Leg Press",
    price: "₹28,000",
    category: "Outdoor Gym",
    categorySlug: "outdoor-gym",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/mild streel outdoor gym.jpg",
    specs: { color: "White, Green" }
  },
  {
    id: "surfboard-gym",
    name: "Surfboard Outdoor Gym Double",
    price: "₹28,500",
    category: "Outdoor Gym",
    categorySlug: "outdoor-gym",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/Surfboard Outdoor Gym Double.jpg",
    specs: { automation: "Manual" }
  },

  // ================= OUTDOOR PLAYGROUND =================
  {
    id: "frp-plain-slide",
    name: "Perfinexa FRP Plain Slide",
    price: "₹24,500",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "FRP",
    brand: "Perfinexa",
    image: "/images/08-Foot-FRP-Plain-Slide.jpg",
    specs: { slideType: "Straight", color: "Any" }
  },
  {
    id: "multiplay-system-mega",
    name: "Outdoor Multiplay System",
    price: "₹3,50,000",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "Mild Steel",
    brand: "Perfinexa",
    image: "/images/mega-multiplay-equipment.jpg",
    specs: { location: "Outdoor", origin: "India" }
  },
  {
    id: "double-wave-slide-canopy",
    name: "Playground Double Wave Slide With Canopy",
    price: "₹55,000",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "FRP",
    brand: "Perfinexa",
    image: "/images/double-wave-slide-canopy.jpg",
    specs: { ageGroup: "8-12", slideType: "Wave" }
  },
  {
    id: "frp-6ft-wave",
    name: "FRP 6ft Wave Slide",
    price: "₹15,500",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "FRP",
    brand: "Perfinexa",
    image: "/images/FRP 6ft Wave Slide.webp",
    specs: { size: "6ft", color: "Customizable" }
  },
  {
    id: "duck-mgr",
    name: "Four Seater Duck Merry Go Round",
    price: "₹28,000",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "FRP",
    brand: "Perfinexa",
    image: "/images/FRP-Duck-Merry-Go-Round.jpg",
    specs: { type: "Merry Go Round" }
  },
  {
    id: "hdpe-play-system",
    name: "HDPE Kids Play System",
    price: "Contact for Price",
    category: "Outdoor Playground",
    categorySlug: "outdoor-playground",
    material: "HDPE",
    brand: "Replay",
    image: "/images/HDPE Kids Play System.jpg",
    specs: { color: "Blue" }
  },

  // ================= INDOOR EQUIPMENT =================
  {
    id: "nursery-jumbo-set",
    name: "Multiplay Nursery Jumbo Set",
    price: "₹79,990",
    category: "Indoor Equipment",
    categorySlug: "indoor-equip",
    material: "Plastic",
    brand: "Perfinexa",
    image: "/images/Multiplay Nursery Jumbo Set.jpg",
    specs: { dimensions: "120x73x70", origin: "India" }
  },
  {
    id: "toddler-ring-toy",
    name: "Plastic Toddler Ring Toy",
    price: "₹499",
    category: "Indoor Equipment",
   categorySlug: "indoor-equip",
    material: "Plastic",
    brand: "Perfinexa",
    image: "/images/Plastic Toddler Ring Toy.jpg",
    specs: { age: "0-3 Yrs", rings: "12" }
  },
  {
    id: "pony-rocking-ride",
    name: "Pony Rocking Ride On",
    price: "₹2,490",
    category: "Indoor Equipment",
   categorySlug: "indoor-equip",
    material: "Plastic",
    brand: "Perfinexa",
    image: "/images/Pony Rocking Ride On.jpg",
    specs: { color: "Green", age: "0-3 Yrs" }
  },

  // ================= DUSTBIN =================
  {
    id: "rabbit-dustbin",
    name: "Rabbit Big Dustbin FRP",
    price: "₹5,500",
    category: "Fiber Dustbin",
    categorySlug: "dustbin",
    material: "FRP",
    brand: "Perfinexa",
    image: "/images/dustbin.webp",
    specs: { capacity: "90 L", height: "4FT" }
  },
  {
    id: "penguin-dustbin",
    name: "FRP Small Penguin Dustbin",
    price: "₹2,800",
    category: "Fiber Dustbin",
    categorySlug: "dustbin",
    material: "Fiber",
    brand: "Perfinexa",
    image: "/images/duck.webp",
    specs: { usage: "Outdoor / Indoor" }
  }
];
