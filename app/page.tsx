"use client"

import { useState, useEffect } from "react"
import {
  ShoppingCart,
  Home,
  User,
  Truck,
  Search,
  Star,
  MapPin,
  LogOut,
  Settings,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  X,
  Tag,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Users,
  Package,
  TrendingUp,
  Edit2,
  CreditCard,
  LogIn,
  Download,
  MessageCircle,
  Trash2,
  Upload,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const PRODUCTS = [
  // Seeds (30 products)
  {
    id: 1,
    name: "Premium Maize Seeds",
    category: "Seeds",
    price: 2500,
    rating: 4.8,
    reviews: 124,
    image: "/maize-seeds.jpg",
    description: "High-yield maize seeds suitable for Nigerian climate",
    featured: true,
  },
  {
    id: 2,
    name: "Tomato Seeds (Hybrid)",
    category: "Seeds",
    price: 1800,
    rating: 4.5,
    reviews: 98,
    image: "/tomato-seeds.png",
    description: "Disease-resistant hybrid tomato seeds",
    featured: true,
  },
  {
    id: 3,
    name: "Pepper Seeds",
    category: "Seeds",
    price: 2200,
    rating: 4.7,
    reviews: 87,
    image: "/pepper-seeds.jpg",
    description: "Hot and sweet pepper varieties",
    featured: false,
  },
  {
    id: 4,
    name: "Lettuce Seeds",
    category: "Seeds",
    price: 1500,
    rating: 4.3,
    reviews: 56,
    image: "/lettuce-seeds.jpg",
    description: "Fresh green lettuce seeds",
    featured: false,
  },
  {
    id: 5,
    name: "Carrot Seeds",
    category: "Seeds",
    price: 1600,
    rating: 4.6,
    reviews: 72,
    image: "/carrot-seeds.jpg",
    description: "Orange carrot seeds for healthy crops",
    featured: false,
  },
  {
    id: 6,
    name: "Onion Seeds",
    category: "Seeds",
    price: 2000,
    rating: 4.4,
    reviews: 65,
    image: "/onion-seeds.jpg",
    description: "Premium onion seeds",
    featured: false,
  },
  {
    id: 7,
    name: "Cucumber Seeds",
    category: "Seeds",
    price: 1700,
    rating: 4.5,
    reviews: 78,
    image: "/cucumber-seeds.jpg",
    description: "Crisp cucumber seeds",
    featured: false,
  },
  {
    id: 8,
    name: "Watermelon Seeds",
    category: "Seeds",
    price: 2300,
    rating: 4.7,
    reviews: 91,
    image: "/watermelon-seeds.jpg",
    description: "Sweet watermelon seeds",
    featured: false,
  },
  {
    id: 9,
    name: "Cabbage Seeds",
    category: "Seeds",
    price: 1900,
    rating: 4.4,
    reviews: 68,
    image: "/cabbage-seeds.jpg",
    description: "Green cabbage seeds",
    featured: false,
  },
  {
    id: 10,
    name: "Spinach Seeds",
    category: "Seeds",
    price: 1400,
    rating: 4.6,
    reviews: 82,
    image: "/spinach-seeds.jpg",
    description: "Nutritious spinach seeds",
    featured: false,
  },
  {
    id: 11,
    name: "Okra Seeds",
    category: "Seeds",
    price: 1800,
    rating: 4.5,
    reviews: 74,
    image: "/okra-seeds.jpg",
    description: "High-yield okra seeds",
    featured: false,
  },
  {
    id: 12,
    name: "Beans Seeds",
    category: "Seeds",
    price: 2100,
    rating: 4.7,
    reviews: 95,
    image: "/beans-seeds.jpg",
    description: "Protein-rich beans seeds",
    featured: false,
  },
  {
    id: 13,
    name: "Peas Seeds",
    category: "Seeds",
    price: 1900,
    rating: 4.4,
    reviews: 71,
    image: "/peas-seeds.jpg",
    description: "Sweet peas seeds",
    featured: false,
  },
  {
    id: 14,
    name: "Pumpkin Seeds",
    category: "Seeds",
    price: 2400,
    rating: 4.8,
    reviews: 103,
    image: "/pumpkin-seeds.jpg",
    description: "Large pumpkin seeds",
    featured: false,
  },
  {
    id: 15,
    name: "Eggplant Seeds",
    category: "Seeds",
    price: 2000,
    rating: 4.5,
    reviews: 69,
    image: "/eggplant-seeds.jpg",
    description: "Purple eggplant seeds",
    featured: false,
  },
  {
    id: 16,
    name: "Corn Seeds",
    category: "Seeds",
    price: 2600,
    rating: 4.9,
    reviews: 112,
    image: "/corn-seeds.jpg",
    description: "Sweet corn seeds",
    featured: false,
  },
  {
    id: 17,
    name: "Sorghum Seeds",
    category: "Seeds",
    price: 2200,
    rating: 4.6,
    reviews: 85,
    image: "/sorghum-seeds.jpg",
    description: "Drought-resistant sorghum",
    featured: false,
  },
  // Fertilizers (15 products)
  {
    id: 18,
    name: "Organic Fertilizer Mix",
    category: "Fertilizers",
    price: 3500,
    rating: 4.7,
    reviews: 156,
    image: "/organic-fertilizer-mix.png",
    description: "Complete organic fertilizer blend",
    featured: true,
  },
  {
    id: 19,
    name: "NPK 15-15-15",
    category: "Fertilizers",
    price: 4200,
    rating: 4.8,
    reviews: 178,
    image: "/npk-fertilizer.jpg",
    description: "Balanced NPK fertilizer",
    featured: false,
  },
  {
    id: 20,
    name: "Urea Fertilizer",
    category: "Fertilizers",
    price: 2800,
    rating: 4.5,
    reviews: 134,
    image: "/urea-fertilizer.jpg",
    description: "Nitrogen-rich urea",
    featured: false,
  },
  {
    id: 21,
    name: "Potassium Nitrate",
    category: "Fertilizers",
    price: 3800,
    rating: 4.6,
    reviews: 142,
    image: "/potassium-nitrate.jpg",
    description: "Premium potassium source",
    featured: false,
  },
  {
    id: 22,
    name: "Phosphate Fertilizer",
    category: "Fertilizers",
    price: 3200,
    rating: 4.4,
    reviews: 118,
    image: "/phosphate-fertilizer.jpg",
    description: "Phosphorus-rich fertilizer",
    featured: false,
  },
  {
    id: 23,
    name: "Calcium Nitrate",
    category: "Fertilizers",
    price: 3600,
    rating: 4.7,
    reviews: 151,
    image: "/calcium-nitrate.jpg",
    description: "Calcium and nitrogen source",
    featured: false,
  },
  {
    id: 24,
    name: "Magnesium Sulfate",
    category: "Fertilizers",
    price: 2500,
    rating: 4.3,
    reviews: 97,
    image: "/magnesium-sulfate.jpg",
    description: "Epsom salt for plants",
    featured: false,
  },
  {
    id: 25,
    name: "Compost Manure",
    category: "Fertilizers",
    price: 2200,
    rating: 4.6,
    reviews: 128,
    image: "/compost-manure.jpg",
    description: "Organic compost manure",
    featured: false,
  },
  {
    id: 26,
    name: "Bone Meal",
    category: "Fertilizers",
    price: 2900,
    rating: 4.5,
    reviews: 112,
    image: "/bone-meal.jpg",
    description: "Phosphorus-rich bone meal",
    featured: false,
  },
  {
    id: 27,
    name: "Fish Emulsion",
    category: "Fertilizers",
    price: 3100,
    rating: 4.7,
    reviews: 145,
    image: "/fish-emulsion.jpg",
    description: "Liquid fish fertilizer",
    featured: false,
  },
  {
    id: 28,
    name: "Seaweed Extract",
    category: "Fertilizers",
    price: 3400,
    rating: 4.6,
    reviews: 138,
    image: "/seaweed-extract.jpg",
    description: "Natural seaweed fertilizer",
    featured: false,
  },
  {
    id: 29,
    name: "Lime Powder",
    category: "Fertilizers",
    price: 1800,
    rating: 4.4,
    reviews: 105,
    image: "/lime-powder.jpg",
    description: "Soil pH adjuster",
    featured: false,
  },
  {
    id: 30,
    name: "Sulfur Powder",
    category: "Fertilizers",
    price: 2100,
    rating: 4.5,
    reviews: 114,
    image: "/sulfur-powder.jpg",
    description: "Fungicide and soil amendment",
    featured: false,
  },
  // Crops (20 products)
  {
    id: 31,
    name: "Cassava Cuttings",
    category: "Crops",
    price: 1500,
    rating: 4.6,
    reviews: 89,
    image: "/cassava-cuttings.jpg",
    description: "Fresh cassava planting cuttings",
    featured: true,
  },
  {
    id: 32,
    name: "Yam Tubers",
    category: "Crops",
    price: 2500,
    rating: 4.7,
    reviews: 102,
    image: "/yam-tubers.jpg",
    description: "Quality yam planting tubers",
    featured: false,
  },
  {
    id: 33,
    name: "Plantain Suckers",
    category: "Crops",
    price: 800,
    rating: 4.4,
    reviews: 76,
    image: "/plantain-suckers.jpg",
    description: "Healthy plantain suckers",
    featured: false,
  },
  {
    id: 34,
    name: "Banana Suckers",
    category: "Crops",
    price: 600,
    rating: 4.5,
    reviews: 84,
    image: "/banana-suckers.jpg",
    description: "Premium banana suckers",
    featured: false,
  },
  {
    id: 35,
    name: "Cocoa Seedlings",
    category: "Crops",
    price: 3500,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-yield cocoa seedlings",
    featured: false,
  },
  {
    id: 36,
    name: "Cashew Seedlings",
    category: "Crops",
    price: 2800,
    rating: 4.6,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    description: "Grafted cashew seedlings",
    featured: false,
  },
  {
    id: 37,
    name: "Mango Seedlings",
    category: "Crops",
    price: 2200,
    rating: 4.7,
    reviews: 115,
    image: "/placeholder.svg?height=300&width=300",
    description: "Grafted mango seedlings",
    featured: false,
  },
  {
    id: 38,
    name: "Orange Seedlings",
    category: "Crops",
    price: 1800,
    rating: 4.5,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=300",
    description: "Citrus orange seedlings",
    featured: false,
  },
  {
    id: 39,
    name: "Pineapple Suckers",
    category: "Crops",
    price: 500,
    rating: 4.6,
    reviews: 92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Quality pineapple suckers",
    featured: false,
  },
  {
    id: 40,
    name: "Pawpaw Seedlings",
    category: "Crops",
    price: 1200,
    rating: 4.4,
    reviews: 81,
    image: "/placeholder.svg?height=300&width=300",
    description: "Healthy pawpaw seedlings",
    featured: false,
  },
  {
    id: 41,
    name: "Guava Seedlings",
    category: "Crops",
    price: 1000,
    rating: 4.5,
    reviews: 87,
    image: "/placeholder.svg?height=300&width=300",
    description: "Guava fruit seedlings",
    featured: false,
  },
  {
    id: 42,
    name: "Avocado Seedlings",
    category: "Crops",
    price: 2500,
    rating: 4.7,
    reviews: 124,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium avocado seedlings",
    featured: false,
  },
  {
    id: 43,
    name: "Coconut Seedlings",
    category: "Crops",
    price: 1500,
    rating: 4.6,
    reviews: 103,
    image: "/placeholder.svg?height=300&width=300",
    description: "Tall coconut seedlings",
    featured: false,
  },
  {
    id: 44,
    name: "Rubber Seedlings",
    category: "Crops",
    price: 3200,
    rating: 4.8,
    reviews: 142,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-yield rubber seedlings",
    featured: false,
  },
  {
    id: 45,
    name: "Oil Palm Seedlings",
    category: "Crops",
    price: 2800,
    rating: 4.7,
    reviews: 131,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium oil palm seedlings",
    featured: false,
  },
  {
    id: 46,
    name: "Shea Butter Seedlings",
    category: "Crops",
    price: 2200,
    rating: 4.6,
    reviews: 118,
    image: "/placeholder.svg?height=300&width=300",
    description: "Shea butter tree seedlings",
    featured: false,
  },
  {
    id: 47,
    name: "Ginger Rhizomes",
    category: "Crops",
    price: 1800,
    rating: 4.5,
    reviews: 105,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fresh ginger planting rhizomes",
    featured: false,
  },
  {
    id: 48,
    name: "Turmeric Rhizomes",
    category: "Crops",
    price: 1600,
    rating: 4.4,
    reviews: 92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Turmeric planting rhizomes",
    featured: false,
  },
  {
    id: 49,
    name: "Sugarcane Cuttings",
    category: "Crops",
    price: 1200,
    rating: 4.6,
    reviews: 108,
    image: "/placeholder.svg?height=300&width=300",
    description: "Quality sugarcane cuttings",
    featured: false,
  },
  {
    id: 50,
    name: "Bamboo Shoots",
    category: "Crops",
    price: 2000,
    rating: 4.7,
    reviews: 121,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fast-growing bamboo shoots",
    featured: false,
  },
  // Tools (15 products)
  {
    id: 51,
    name: "Garden Hoe",
    category: "Tools",
    price: 3500,
    rating: 4.6,
    reviews: 142,
    image: "/garden-hoe.jpg",
    description: "Durable steel garden hoe",
    featured: true,
  },
  {
    id: 52,
    name: "Irrigation Pipe",
    category: "Tools",
    price: 8500,
    rating: 4.7,
    reviews: 178,
    image: "/irrigation-pipe.jpg",
    description: "50m irrigation pipe system",
    featured: false,
  },
  {
    id: 53,
    name: "Machete",
    category: "Tools",
    price: 2500,
    rating: 4.5,
    reviews: 118,
    image: "/placeholder.svg?height=300&width=300",
    description: "Sharp stainless steel machete",
    featured: false,
  },
  {
    id: 54,
    name: "Spade",
    category: "Tools",
    price: 3200,
    rating: 4.6,
    reviews: 134,
    image: "/placeholder.svg?height=300&width=300",
    description: "Heavy-duty spade",
    featured: false,
  },
  {
    id: 55,
    name: "Rake",
    category: "Tools",
    price: 2800,
    rating: 4.4,
    reviews: 105,
    image: "/placeholder.svg?height=300&width=300",
    description: "Garden rake tool",
    featured: false,
  },
  {
    id: 56,
    name: "Pruning Shears",
    category: "Tools",
    price: 4200,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=300",
    description: "Professional pruning shears",
    featured: false,
  },
  {
    id: 57,
    name: "Watering Can",
    category: "Tools",
    price: 1500,
    rating: 4.3,
    reviews: 87,
    image: "/placeholder.svg?height=300&width=300",
    description: "10L watering can",
    featured: false,
  },
  {
    id: 58,
    name: "Wheelbarrow",
    category: "Tools",
    price: 12000,
    rating: 4.8,
    reviews: 192,
    image: "/placeholder.svg?height=300&width=300",
    description: "Heavy-duty wheelbarrow",
    featured: false,
  },
  {
    id: 59,
    name: "Shovel",
    category: "Tools",
    price: 3800,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=300&width=300",
    description: "Round shovel for digging",
    featured: false,
  },
  {
    id: 60,
    name: "Pickaxe",
    category: "Tools",
    price: 4500,
    rating: 4.6,
    reviews: 145,
    image: "/placeholder.svg?height=300&width=300",
    description: "Heavy-duty pickaxe",
    featured: false,
  },
  {
    id: 61,
    name: "Garden Fork",
    category: "Tools",
    price: 3100,
    rating: 4.4,
    reviews: 112,
    image: "/placeholder.svg?height=300&width=300",
    description: "4-prong garden fork",
    featured: false,
  },
  {
    id: 62,
    name: "Hose Reel",
    category: "Tools",
    price: 6500,
    rating: 4.7,
    reviews: 168,
    image: "/placeholder.svg?height=300&width=300",
    description: "50m hose reel system",
    featured: false,
  },
  {
    id: 63,
    name: "Sprayer",
    category: "Tools",
    price: 5200,
    rating: 4.6,
    reviews: 151,
    image: "/placeholder.svg?height=300&width=300",
    description: "20L knapsack sprayer",
    featured: false,
  },
  {
    id: 64,
    name: "Soil Tester",
    category: "Tools",
    price: 8900,
    rating: 4.8,
    reviews: 184,
    image: "/placeholder.svg?height=300&width=300",
    description: "Digital soil pH tester",
    featured: false,
  },
  {
    id: 65,
    name: "Gloves Set",
    category: "Tools",
    price: 1200,
    rating: 4.5,
    reviews: 98,
    image: "/placeholder.svg?height=300&width=300",
    description: "5-pair work gloves set",
    featured: false,
  },
]

const FARMER_PRODUCTS = [
  {
    id: 101,
    name: "Fresh Tomatoes",
    price: 5000,
    category: "Crops",
    image: "/tomato-seeds.png",
    description: "Fresh organic tomatoes",
  },
  {
    id: 102,
    name: "Cassava Tubers",
    price: 8000,
    category: "Crops",
    image: "/cassava-cuttings.jpg",
    description: "Quality cassava tubers",
  },
]

const DELIVERY_AGENTS = [
  { id: 1, name: "Chisom Obi", phone: "+234 802 345 6789", rating: 4.8, status: "Available", location: "Lagos" },
  { id: 2, name: "Emeka Nwosu", phone: "+234 803 456 7890", rating: 4.6, status: "Available", location: "Lagos" },
  { id: 3, name: "Zainab Hassan", phone: "+234 804 567 8901", rating: 4.9, status: "Busy", location: "Lagos" },
]

const DEMO_CREDENTIALS = {
  admin: { email: "admin@agrocom.ng", password: "admin123" },
  agent: { email: "agent@agrocom.ng", password: "agent123" },
  customer: { email: "customer@agrocom.ng", password: "customer123" },
  farmer: { email: "farmer@agrocom.ng", password: "farmer123" },
}

const PROMO_CODES = {
  AGRO20: { discount: 0.2, description: "20% off on all products" },
  AGRO10: { discount: 0.1, description: "10% off on all products" },
  WELCOME: { discount: 0.15, description: "15% welcome discount" },
  SUMMER: { discount: 0.25, description: "25% summer sale" },
}

export default function AgroCom() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [showSignup, setShowSignup] = useState(false)
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", role: "customer" })

  const [integrationSettings, setIntegrationSettings] = useState({
    paystack: { publicKey: "", secretKey: "", enabled: false },
    remita: { merchantId: "", apiKey: "", enabled: false },
    supabase: { url: "", anonKey: "", enabled: false },
  })
  const [showIntegrationModal, setShowIntegrationModal] = useState(false)
  const [editingIntegration, setEditingIntegration] = useState(null)

  const [paystackMode, setPaystackMode] = useState("test") // "test" or "live"
  const [showLiveChat, setShowLiveChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can we help you today?", timestamp: new Date() },
  ])
  const [chatInput, setChatInput] = useState("")

  const [paymentStatus, setPaymentStatus] = useState(null)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  // Existing state
  const [currentPage, setCurrentPage] = useState("login")
  const [userRole, setUserRole] = useState("customer")
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [orders, setOrders] = useState([])
  const [sliderIndex, setSliderIndex] = useState(0)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [promoCode, setPromoCode] = useState("")
  const [promoError, setPromoError] = useState("")
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [userProfile, setUserProfile] = useState({
    name: "Adekunle Okafor",
    phone: "+234 801 234 5678",
    address: "Lagos, Nigeria",
    email: "adekunle@agrocom.ng",
  })

  const [adminStats, setAdminStats] = useState({
    totalOrders: 1247,
    totalRevenue: 15680000,
    totalUsers: 3456,
    totalAgents: 89,
    activeDeliveries: 34,
    completedDeliveries: 1213,
  })

  const [adminOrders, setAdminOrders] = useState([
    { id: "ORD-001", customer: "Adekunle Okafor", amount: 45000, status: "Delivered", date: "2024-01-15" },
    { id: "ORD-002", customer: "Chioma Nwankwo", amount: 32500, status: "In Transit", date: "2024-01-16" },
    { id: "ORD-003", customer: "Tunde Adeyemi", amount: 58900, status: "Processing", date: "2024-01-17" },
  ])

  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)

  const [farmerProducts, setFarmerProducts] = useState(FARMER_PRODUCTS)
  const [newFarmerProduct, setNewFarmerProduct] = useState({ name: "", price: "", category: "Crops", description: "" })
  const [showChatBot, setShowChatBot] = useState(false)
  // const [chatMessages, setChatMessages] = useState([
  //   { id: 1, sender: "bot", text: "Hello! How can we help you today?" },
  // ])
  // const [chatInput, setChatInput] = useState("")
  const [adminMessages, setAdminMessages] = useState([])
  const [showAdminChat, setShowAdminChat] = useState(false)
  const [assignedDeliveries, setAssignedDeliveries] = useState({})
  const [supabaseSyncStatus, setSupabaseSyncStatus] = useState("idle")
  const [userSettings, setUserSettings] = useState({
    notifications: true,
    emailUpdates: true,
    language: "English",
    theme: "light",
  })
  const [showUserSettings, setShowUserSettings] = useState(false)

  // Helper functions for cart management
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === product.id)
      if (existingItemIndex > -1) {
        const newCart = [...prevCart]
        newCart[existingItemIndex] = {
          ...newCart[existingItemIndex],
          quantity: newCart[existingItemIndex].quantity + 1,
        }
        return newCart
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const applyPromoCode = () => {
    if (!promoCode) {
      setPromoError("Please enter a promo code.")
      return
    }
    if (PROMO_CODES[promoCode]) {
      setAppliedPromo(promoCode)
      setPromoError("")
    } else {
      setPromoError("Invalid promo code.")
      setAppliedPromo(null)
    }
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discountAmount = appliedPromo ? cartTotal * PROMO_CODES[appliedPromo].discount : 0
  const finalTotal = cartTotal - discountAmount + 500 // Add delivery fee

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!")
      return
    }
    setShowPaymentModal(true)
  }

  const processPayment = async (method) => {
    setIsProcessingPayment(true)
    setPaymentStatus("processing")
    setShowPaymentModal(false)

    try {
      if (method === "paystack" && integrationSettings.paystack.enabled) {
        // Use test or live key based on mode
        const publicKey =
          paystackMode === "test"
            ? integrationSettings.paystack.publicKey || "pk_test_YOUR_TEST_PUBLIC_KEY"
            : integrationSettings.paystack.publicKey || "pk_live_YOUR_LIVE_PUBLIC_KEY" // Ensure you have a live key set

        // Initialize Paystack payment
        const response = await fetch("https://api.paystack.co/transaction/initialize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${integrationSettings.paystack.secretKey || "sk_test_YOUR_TEST_SECRET_KEY"}`, // Ensure you have a secret key set
          },
          body: JSON.stringify({
            email: currentUser?.email || "customer@agrocom.ng", // Use logged-in user's email if available
            amount: finalTotal * 100, // Paystack expects amount in kobo
            reference: `ORD-${Date.now().toString().slice(-6)}`,
            metadata: {
              cart: cart,
              items_count: cart.length,
              user_id: currentUser?.id, // Add user ID if available
            },
          }),
        })

        const data = await response.json()

        if (data.status && data.data.authorization_url) {
          // Redirect to Paystack payment page
          window.location.href = data.data.authorization_url
          return // Stop further execution as redirect will handle it
        } else {
          throw new Error(data.message || "Failed to initialize Paystack payment")
        }
      } else if (method === "remita" && integrationSettings.remita.enabled) {
        // Simulate Remita integration
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const paymentSuccess = Math.random() > 0.3
        if (!paymentSuccess) throw new Error("Remita payment failed")
      } else if (method === "bank") {
        // Bank transfer - always successful
        await new Promise((resolve) => setTimeout(resolve, 1500))
      } else if (method === "cod") {
        // Cash on delivery - always successful
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      // Create order
      setPaymentStatus("success")
      const newOrder = {
        id: `ORD-${Date.now().toString().slice(-6)}`,
        date: new Date().toISOString().split("T")[0],
        items: cart,
        total: finalTotal,
        paymentMethod: method,
        status: method === "cod" ? "Pending Confirmation" : "Processing", // Use "Pending Confirmation" for COD
        deliveryAgent: null,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      }
      setOrders([...orders, newOrder])
      setCart([])
      setAppliedPromo(null) // Clear applied promo
      setPromoCode("") // Clear promo code input

      setTimeout(() => {
        setPaymentStatus(null)
        setCurrentPage("orders")
      }, 2000)
    } catch (error) {
      console.error("[v0] Payment error:", error.message)
      setPaymentStatus("error")
      // Optionally, show a more specific error message to the user
      alert(`Payment failed: ${error.message}`)
      setTimeout(() => setPaymentStatus(null), 3000)
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const featuredProducts = PRODUCTS.filter((p) => p.featured)
  const filteredProducts =
    selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((product) => product.category === selectedCategory)

  useEffect(() => {
    if (isLoggedIn && userRole === "admin") {
      const interval = setInterval(() => {
        setAdminStats((prev) => ({
          ...prev,
          activeDeliveries: Math.max(0, prev.activeDeliveries + Math.floor(Math.random() * 3) - 1),
          completedDeliveries: prev.completedDeliveries + Math.floor(Math.random() * 2),
          totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 50000),
        }))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isLoggedIn, userRole])

  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % featuredProducts.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredProducts.length])

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
  }, [])

  const handleLogin = () => {
    setLoginError("")
    if (!loginEmail || !loginPassword) {
      setLoginError("Please enter email and password")
      return
    }

    // Check demo credentials
    let userRole = null
    for (const [role, creds] of Object.entries(DEMO_CREDENTIALS)) {
      if (creds.email === loginEmail && creds.password === loginPassword) {
        userRole = role
        break
      }
    }

    if (userRole) {
      setIsLoggedIn(true)
      setCurrentUser({ email: loginEmail, role: userRole })
      setUserRole(userRole)
      setCurrentPage(userRole === "admin" ? "admin-dashboard" : userRole === "agent" ? "agent-dashboard" : "home")
      setLoginEmail("")
      setLoginPassword("")
    } else {
      setLoginError("Invalid credentials. Use demo: admin@agrocom.ng / admin123")
    }
  }

  const handleSignup = () => {
    if (!signupData.name || !signupData.email || !signupData.password) {
      setLoginError("Please fill all fields")
      return
    }
    setIsLoggedIn(true)
    setCurrentUser({ email: signupData.email, role: signupData.role })
    setUserRole(signupData.role)
    setCurrentPage(
      signupData.role === "admin" ? "admin-dashboard" : signupData.role === "agent" ? "agent-dashboard" : "home",
    )
    setShowSignup(false)
    setSignupData({ name: "", email: "", password: "", role: "customer" })
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setCurrentPage("login")
    setUserRole("customer")
    setCart([])
    setOrders([])
    setShowLiveChat(false) // Close chat on logout
  }

  const handleInstallApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
      }
    }
  }

  const handleSupabaseSync = async () => {
    if (
      !integrationSettings.supabase.enabled ||
      !integrationSettings.supabase.url ||
      !integrationSettings.supabase.anonKey
    ) {
      alert("Please configure Supabase first")
      return
    }

    setSupabaseSyncStatus("syncing")
    try {
      // Simulate sync process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In production, this would create tables and sync data
      console.log("[v0] Supabase sync completed")
      setSupabaseSyncStatus("success")
      setTimeout(() => setSupabaseSyncStatus("idle"), 3000)
    } catch (error) {
      console.error("[v0] Supabase sync failed:", error)
      setSupabaseSyncStatus("error")
    }
  }

  const handleSendChatMessage = () => {
    if (!chatInput.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: chatInput,
      timestamp: new Date(),
    }

    setChatMessages([...chatMessages, userMessage])
    setChatInput("")

    // Auto-response from bot
    setTimeout(() => {
      const autoResponses = [
        "Thank you for your message! Our team will get back to you shortly.",
        "We appreciate your inquiry. A support agent will assist you soon.",
        "Your message has been received. We'll respond within 24 hours.",
        "Thanks for contacting us! How else can we help?",
      ]
      const botMessage = {
        id: chatMessages.length + 2, // Increment ID based on current messages
        sender: "bot",
        text: autoResponses[Math.floor(Math.random() * autoResponses.length)],
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleFarmerProductUpload = () => {
    if (!newFarmerProduct.name || !newFarmerProduct.price) {
      alert("Please fill all fields")
      return
    }

    const product = {
      id: Date.now(),
      ...newFarmerProduct,
      price: Number.parseInt(newFarmerProduct.price),
      image: "/placeholder.svg",
    }

    setFarmerProducts([...farmerProducts, product])
    setNewFarmerProduct({ name: "", price: "", category: "Crops", description: "" })
    alert("Product uploaded successfully!")
  }

  const handleAssignDelivery = (orderId, agentId) => {
    const agent = DELIVERY_AGENTS.find((a) => a.id === agentId)
    setAssignedDeliveries({
      ...assignedDeliveries,
      [orderId]: agent,
    })

    // Update order with agent info
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, deliveryAgent: agent, status: "Assigned to Agent" } // Update status and add agent info
          : order,
      ),
    )

    alert(`Delivery assigned to ${agent.name}`)
  }

  // Conditional rendering for login page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center p-4">
        {showInstallPrompt && (
          <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50 animate-slide-down">
            <div className="flex items-start gap-3">
              <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">Install AgroCom</h3>
                <p className="text-sm text-gray-600 mb-3">Get quick access to our app on your device</p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleInstallApp} className="bg-blue-600 hover:bg-blue-700">
                    Install
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setShowInstallPrompt(false)}
                    className="border-blue-200"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <Card className="w-full max-w-md p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">AgroCom</h1>
            <p className="text-gray-600">Agricultural Marketplace</p>
          </div>

          {!showSignup ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
              {loginError && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {loginError}
                </div>
              )}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="admin@agrocom.ng"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="admin123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
              <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 py-2 mb-4">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-4">
                  Don't have an account?{" "}
                  <button onClick={() => setShowSignup(true)} className="text-blue-600 font-semibold hover:underline">
                    Sign up
                  </button>
                </p>
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 mb-2">Demo Credentials:</p>
                  <p className="text-xs text-gray-600">Admin: admin@agrocom.ng / admin123</p>
                  <p className="text-xs text-gray-600">Agent: agent@agrocom.ng / agent123</p>
                  <p className="text-xs text-gray-600">Customer: customer@agrocom.ng / customer123</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={signupData.role}
                    onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="customer">Customer</option>
                    <option value="agent">Delivery Agent</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
              <Button onClick={handleSignup} className="w-full bg-blue-600 hover:bg-blue-700 py-2 mb-4">
                Create Account
              </Button>
              <button
                onClick={() => setShowSignup(false)}
                className="w-full text-blue-600 font-semibold hover:underline"
              >
                Back to Login
              </button>
            </>
          )}
        </Card>
      </div>
    )
  }

  // Main application UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {showInstallPrompt && (
        <div className="fixed top-20 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50 animate-slide-down">
          <div className="flex items-start gap-3">
            <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Install AgroCom</h3>
              <p className="text-sm text-gray-600 mb-3">Get quick access to our app on your device</p>
              <div className="flex gap-2">
                <Button size="sm" onClick={handleInstallApp} className="bg-blue-600 hover:bg-blue-700">
                  Install
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowInstallPrompt(false)}
                  className="border-blue-200"
                >
                  Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update header with clickable logo and live chat button */}
      <header className="bg-white border-b border-blue-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => {
              setCurrentPage("home")
              setSelectedProduct(null)
            }}
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <h1 className="text-2xl font-bold text-blue-600">AgroCom</h1>
          </button>

          <div className="hidden md:flex items-center gap-4 flex-1 mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {userRole === "customer" && (
              <button
                onClick={() => setCurrentPage("cart")}
                className="relative p-2 hover:bg-blue-100 rounded-lg transition"
              >
                <ShoppingCart className="w-6 h-6 text-blue-600" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            )}

            <div className="relative group">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition">
                {userRole === "customer" ? "👤 Customer" : userRole === "agent" ? "🚚 Agent" : "⚙️ Admin"}
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-50">
                <button
                  onClick={() => {
                    setUserRole("customer")
                    setCurrentPage("home")
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-blue-50 ${userRole === "customer" ? "bg-blue-100 text-blue-700 font-semibold" : ""}`}
                >
                  👤 Customer
                </button>
                <button
                  onClick={() => {
                    setUserRole("agent")
                    setCurrentPage("agent-dashboard")
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-blue-50 ${userRole === "agent" ? "bg-blue-100 text-blue-700 font-semibold" : ""}`}
                >
                  🚚 Delivery Agent
                </button>
                <button
                  onClick={() => {
                    setUserRole("admin")
                    setCurrentPage("admin-dashboard")
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-blue-50 ${userRole === "admin" ? "bg-blue-100 text-blue-700 font-semibold" : ""}`}
                >
                  ⚙️ Admin
                </button>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 hover:bg-blue-100 rounded-lg transition text-blue-600"
              title="Logout"
            >
              <LogOut className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8">
        {currentPage === "admin-dashboard" && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
              <Button onClick={() => setShowIntegrationModal(true)} className="bg-blue-600 hover:bg-blue-700">
                <Settings className="w-4 h-4 mr-2" />
                Integration Settings
              </Button>
            </div>

            {/* Real-time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Orders</p>
                    <p className="text-3xl font-bold text-blue-600">{adminStats.totalOrders}</p>
                  </div>
                  <Package className="w-12 h-12 text-blue-200" />
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Revenue</p>
                    <p className="text-3xl font-bold text-cyan-600">
                      ₦{(adminStats.totalRevenue / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-cyan-200" />
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Users</p>
                    <p className="text-3xl font-bold text-blue-600">{adminStats.totalUsers}</p>
                  </div>
                  <Users className="w-12 h-12 text-blue-200" />
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Agents</p>
                    <p className="text-3xl font-bold text-cyan-600">{adminStats.totalAgents}</p>
                  </div>
                  <Truck className="w-12 h-12 text-cyan-200" />
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Active Deliveries</p>
                    <p className="text-3xl font-bold text-blue-600 animate-pulse-glow">{adminStats.activeDeliveries}</p>
                  </div>
                  <BarChart3 className="w-12 h-12 text-blue-200" />
                </div>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Completed</p>
                    <p className="text-3xl font-bold text-cyan-600">{adminStats.completedDeliveries}</p>
                  </div>
                  <CheckCircle className="w-12 h-12 text-cyan-200" />
                </div>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 px-4 text-gray-600 font-semibold">Order ID</th>
                      <th className="text-left py-2 px-4 text-gray-600 font-semibold">Customer</th>
                      <th className="text-left py-2 px-4 text-gray-600 font-semibold">Amount</th>
                      <th className="text-left py-2 px-4 text-gray-600 font-semibold">Status</th>
                      <th className="text-left py-2 px-4 text-gray-600 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminOrders.map((order) => (
                      <tr key={order.id} className="border-b border-blue-100 hover:bg-blue-50">
                        <td className="py-3 px-4 font-mono text-sm text-blue-600">{order.id}</td>
                        <td className="py-3 px-4 text-gray-800">{order.customer}</td>
                        <td className="py-3 px-4 font-semibold text-gray-800">₦{order.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === "Delivered"
                                ? "bg-blue-100 text-blue-700"
                                : order.status === "In Transit"
                                  ? "bg-cyan-100 text-cyan-700"
                                  : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Integration Status */}
            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Integration Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(integrationSettings).map(([key, value]) => (
                  <div key={key} className="p-4 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800 capitalize">{key}</h4>
                      <span
                        className={`w-3 h-3 rounded-full ${value.enabled ? "bg-green-500 animate-pulse" : "bg-gray-300"}`}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{value.enabled ? "Connected" : "Not configured"}</p>
                    <Button
                      size="sm"
                      onClick={() => {
                        setEditingIntegration(key)
                        setShowIntegrationModal(true)
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      <Edit2 className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Supabase Sync</h3>
              <div className="space-y-4">
                <p className="text-gray-600">Sync all data to Supabase database</p>
                <Button
                  onClick={handleSupabaseSync}
                  disabled={supabaseSyncStatus === "syncing"}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {supabaseSyncStatus === "syncing" ? "Syncing..." : "Sync to Supabase"}
                </Button>
                {supabaseSyncStatus === "success" && (
                  <p className="text-green-600 font-semibold">✓ Sync completed successfully</p>
                )}
                {supabaseSyncStatus === "error" && (
                  <p className="text-red-600 font-semibold">✗ Sync failed. Check configuration.</p>
                )}
              </div>
            </Card>

            {/* Added Assign Deliveries section */}
            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Assign Deliveries</h3>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 border border-blue-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-gray-800">{order.id}</p>
                        <p className="text-sm text-gray-600">
                          Customer: {orders.find((o) => o.id === order.id)?.items?.[0]?.name || "N/A"}
                        </p>
                      </div>
                      <span className="text-blue-600 font-bold">₦{order.total?.toLocaleString() || 0}</span>
                    </div>
                    <select
                      onChange={(e) => handleAssignDelivery(order.id, Number.parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue=""
                    >
                      <option value="">Select Agent</option>
                      {DELIVERY_AGENTS.map((agent) => (
                        <option key={agent.id} value={agent.id}>
                          {agent.name} - {agent.status}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {showIntegrationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Integration Settings</h3>
                <button
                  onClick={() => {
                    setShowIntegrationModal(false)
                    setEditingIntegration(null)
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                    {editingIntegration} Configuration
                  </h4>
                  {/* Update integration settings to include test/live mode toggle for Paystack */}
                  {editingIntegration === "paystack" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mode</label>
                        <select
                          value={paystackMode}
                          onChange={(e) => setPaystackMode(e.target.value)}
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="test">Test Mode (pk_test_...)</option>
                          <option value="live">Live Mode (pk_live_...)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Public Key</label>
                        <input
                          type="text"
                          value={integrationSettings.paystack.publicKey}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              paystack: { ...integrationSettings.paystack, publicKey: e.target.value },
                            })
                          }
                          placeholder={paystackMode === "test" ? "pk_test_..." : "pk_live_..."}
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Secret Key</label>
                        <input
                          type="password"
                          value={integrationSettings.paystack.secretKey}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              paystack: { ...integrationSettings.paystack, secretKey: e.target.value },
                            })
                          }
                          placeholder={paystackMode === "test" ? "sk_test_..." : "sk_live_..."}
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={integrationSettings.paystack.enabled}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              paystack: { ...integrationSettings.paystack, enabled: e.target.checked },
                            })
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Enable Paystack ({paystackMode} mode)</span>
                      </label>
                    </div>
                  )}
                  {editingIntegration === "remita" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Merchant ID</label>
                        <input
                          type="text"
                          value={integrationSettings.remita.merchantId}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              remita: { ...integrationSettings.remita, merchantId: e.target.value },
                            })
                          }
                          placeholder="Merchant ID"
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                        <input
                          type="password"
                          value={integrationSettings.remita.apiKey}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              remita: { ...integrationSettings.remita, apiKey: e.target.value },
                            })
                          }
                          placeholder="API Key"
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={integrationSettings.remita.enabled}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              remita: { ...integrationSettings.remita, enabled: e.target.checked },
                            })
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Enable Remita</span>
                      </label>
                    </div>
                  )}
                  {editingIntegration === "supabase" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Supabase URL</label>
                        <input
                          type="text"
                          value={integrationSettings.supabase.url}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              supabase: { ...integrationSettings.supabase, url: e.target.value },
                            })
                          }
                          placeholder="https://your-project.supabase.co"
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Anon Key</label>
                        <input
                          type="password"
                          value={integrationSettings.supabase.anonKey}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              supabase: { ...integrationSettings.supabase, anonKey: e.target.value },
                            })
                          }
                          placeholder="Anon Key"
                          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={integrationSettings.supabase.enabled}
                          onChange={(e) =>
                            setIntegrationSettings({
                              ...integrationSettings,
                              supabase: { ...integrationSettings.supabase, enabled: e.target.checked },
                            })
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Enable Supabase</span>
                      </label>
                    </div>
                  )}
                </div>
                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setShowIntegrationModal(false)
                      setEditingIntegration(null)
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Save Configuration
                  </Button>
                  <Button onClick={() => setEditingIntegration(null)} variant="outline" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {currentPage === "agent-dashboard" && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800">Delivery Agent Dashboard</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <p className="text-gray-600 text-sm">Today's Deliveries</p>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-3xl font-bold text-cyan-600">8</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <p className="text-gray-600 text-sm">In Transit</p>
                <p className="text-3xl font-bold text-blue-600">3</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
                <p className="text-gray-600 text-sm">Today's Earnings</p>
                <p className="text-3xl font-bold text-cyan-600">₦24,500</p>
              </Card>
            </div>

            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Active Deliveries</h3>
              <div className="space-y-4">
                {[
                  { id: 1, customer: "Adekunle Okafor", location: "Lagos Island", status: "In Transit", amount: 45000 },
                  { id: 2, customer: "Chioma Nwankwo", location: "Ikoyi", status: "In Transit", amount: 32500 },
                  { id: 3, customer: "Tunde Adeyemi", location: "Victoria Island", status: "Pending", amount: 58900 },
                ].map((delivery) => (
                  <div key={delivery.id} className="p-4 border border-blue-200 rounded-lg hover:bg-blue-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800">{delivery.customer}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {delivery.location}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          delivery.status === "In Transit"
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {delivery.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-blue-600">₦{delivery.amount.toLocaleString()}</p>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Update Status
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {currentPage === "farmer-dashboard" && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800">Farmer Dashboard</h2>

            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Upload New Product</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Product Name"
                  value={newFarmerProduct.name}
                  onChange={(e) => setNewFarmerProduct({ ...newFarmerProduct, name: e.target.value })}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Price (₦)"
                  value={newFarmerProduct.price}
                  onChange={(e) => setNewFarmerProduct({ ...newFarmerProduct, price: e.target.value })}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  value={newFarmerProduct.category}
                  onChange={(e) => setNewFarmerProduct({ ...newFarmerProduct, category: e.target.value })}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Crops</option>
                  <option>Seeds</option>
                  <option>Fertilizers</option>
                  <option>Tools</option>
                </select>
                <textarea
                  placeholder="Product Description"
                  value={newFarmerProduct.description}
                  onChange={(e) => setNewFarmerProduct({ ...newFarmerProduct, description: e.target.value })}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <Button onClick={handleFarmerProductUpload} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Product
                </Button>
              </div>
            </Card>

            <Card className="p-6 border-blue-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">My Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {farmerProducts.map((product) => (
                  <div key={product.id} className="p-4 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-gray-800">{product.name}</h4>
                    <p className="text-blue-600 font-bold">₦{product.price.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setFarmerProducts(farmerProducts.filter((p) => p.id !== product.id))}
                      className="mt-2"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {currentPage === "home" && (
          <>
            <div className="mb-8 relative">
              <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl overflow-hidden h-96 relative shadow-lg">
                {featuredProducts.length > 0 && (
                  <>
                    <img
                      src={featuredProducts[sliderIndex].image || "/placeholder.svg"}
                      alt={featuredProducts[sliderIndex].name}
                      className="w-full h-full object-cover animate-fade-in"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                      <h2 className="text-3xl font-bold text-white mb-2 animate-slide-up">
                        {featuredProducts[sliderIndex].name}
                      </h2>
                      <p className="text-white/90 mb-4 animate-slide-up">
                        ₦{featuredProducts[sliderIndex].price.toLocaleString()}
                      </p>
                      <Button
                        onClick={() => {
                          setSelectedProduct(featuredProducts[sliderIndex])
                          setCurrentPage("product-detail")
                        }}
                        className="w-fit bg-white text-blue-600 hover:bg-blue-50 animate-bounce-in"
                      >
                        View Details
                      </Button>
                    </div>
                  </>
                )}
                <button
                  onClick={() =>
                    setSliderIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </button>
                <button
                  onClick={() => setSliderIndex((prev) => (prev + 1) % featuredProducts.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredProducts.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSliderIndex(i)}
                      className={`w-2 h-2 rounded-full transition ${i === sliderIndex ? "bg-white w-8" : "bg-white/50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Categories</h3>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {["All", "Seeds", "Fertilizers", "Crops", "Tools"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-white text-gray-700 border border-blue-200 hover:border-blue-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition cursor-pointer border-blue-200 animate-fade-in"
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentPage("product-detail")
                  }}
                >
                  <div className="aspect-square bg-gray-200 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-blue-600 font-medium text-sm mb-1">{product.category}</p>
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-blue-600">₦{product.price.toLocaleString()}</span>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          addToCart(product)
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {currentPage === "product-detail" && selectedProduct && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Button variant="outline" onClick={() => setCurrentPage("home")} className="mb-6 border-blue-200">
              ← Back
            </Button>
            <Card className="overflow-hidden border-blue-200">
              <div className="aspect-square bg-gray-200">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-blue-600 font-medium mb-2">{selectedProduct.category}</p>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{selectedProduct.rating}</span>
                  <span className="text-gray-500">({selectedProduct.reviews} reviews)</span>
                </div>
                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">₦{selectedProduct.price.toLocaleString()}</span>
                </div>
                <Button
                  onClick={() => {
                    addToCart(selectedProduct)
                    setCurrentPage("home")
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                >
                  Add to Cart
                </Button>
              </div>
            </Card>
          </div>
        )}

        {currentPage === "cart" && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
            {cart.length === 0 ? (
              <Card className="p-8 text-center border-blue-200">
                <ShoppingCart className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <Button onClick={() => setCurrentPage("home")} className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Continue Shopping
                </Button>
              </Card>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <Card key={item.id} className="p-4 flex items-center gap-4 border-blue-200">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-blue-600 font-bold">₦{item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          −
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </Button>
                      </div>
                      <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Button>
                    </Card>
                  ))}
                </div>

                <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button onClick={applyPromoCode} className="bg-blue-600 hover:bg-blue-700">
                      <Tag className="w-4 h-4 mr-2" />
                      Apply
                    </Button>
                  </div>
                  {promoError && (
                    <p className="text-red-600 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {promoError}
                    </p>
                  )}
                  {appliedPromo && (
                    <p className="text-blue-600 text-sm flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {PROMO_CODES[appliedPromo].description}
                    </p>
                  )}
                </Card>

                <Card className="p-6 bg-blue-50 mb-6 border-blue-200">
                  <div className="flex justify-between mb-4 text-lg">
                    <span>Subtotal:</span>
                    <span className="font-semibold">₦{cartTotal.toLocaleString()}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between mb-4 text-lg text-blue-600">
                      <span>Discount ({PROMO_CODES[appliedPromo].discount * 100}%):</span>
                      <span className="font-semibold">-₦{discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between mb-4 text-lg">
                    <span>Delivery:</span>
                    <span className="font-semibold">₦500</span>
                  </div>
                  <div className="border-t border-blue-200 pt-4 flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-blue-600">₦{finalTotal.toLocaleString()}</span>
                  </div>
                </Card>

                {paymentStatus && (
                  <Card
                    className={`p-4 mb-6 ${paymentStatus === "success" ? "bg-green-50 border-green-200" : paymentStatus === "error" ? "bg-red-50 border-red-200" : "bg-yellow-50 border-yellow-200"}`}
                  >
                    <div className="flex items-center gap-2">
                      {paymentStatus === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {paymentStatus === "error" && <AlertCircle className="w-5 h-5 text-red-600" />}
                      {paymentStatus === "processing" && (
                        <div className="w-5 h-5 border-2 border-yellow-600 border-t-transparent rounded-full animate-spin" />
                      )}
                      <span
                        className={`font-semibold ${paymentStatus === "success" ? "text-green-700" : paymentStatus === "error" ? "text-red-700" : "text-yellow-700"}`}
                      >
                        {paymentStatus === "success" && "Payment successful! Redirecting..."}
                        {paymentStatus === "error" && "Payment failed. Please try again."}
                        {paymentStatus === "processing" && "Processing payment..."}
                      </span>
                    </div>
                  </Card>
                )}

                <Button
                  onClick={checkout}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg mb-4"
                  disabled={isProcessingPayment}
                >
                  {isProcessingPayment ? "Processing..." : "Proceed to Checkout"}
                </Button>
                <Button
                  onClick={() => setCurrentPage("home")}
                  variant="outline"
                  className="w-full py-6 border-blue-200"
                >
                  Continue Shopping
                </Button>
              </>
            )}
          </div>
        )}

        {showPaymentModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="w-full max-w-md p-8 shadow-2xl border-blue-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Select Payment Method</h3>
                <button onClick={() => setShowPaymentModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { id: "paystack", name: "Paystack", icon: CreditCard, enabled: integrationSettings.paystack.enabled },
                  { id: "remita", name: "Remita", icon: CreditCard, enabled: integrationSettings.remita.enabled },
                  { id: "bank", name: "Bank Transfer", icon: CreditCard, enabled: true },
                  { id: "cod", name: "Cash on Delivery", icon: Truck, enabled: true },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => {
                      if (!method.enabled && (method.id === "paystack" || method.id === "remita")) {
                        alert(`${method.name} is not configured. Please contact admin.`)
                        return
                      }
                      processPayment(method.id)
                    }}
                    disabled={isProcessingPayment}
                    className={`w-full p-4 border-2 rounded-lg flex items-center gap-3 transition ${
                      method.enabled
                        ? "border-blue-300 hover:border-blue-600 hover:bg-blue-50"
                        : "border-gray-300 bg-gray-50 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <method.icon className="w-6 h-6 text-blue-600" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">{method.name}</p>
                      {!method.enabled && method.id !== "bank" && method.id !== "cod" && (
                        <p className="text-xs text-gray-500">Not configured</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Total Amount:</strong> ₦{finalTotal.toLocaleString()}
                </p>
              </div>

              <Button onClick={() => setShowPaymentModal(false)} variant="outline" className="w-full border-blue-200">
                Cancel
              </Button>
            </Card>
          </div>
        )}

        {currentPage === "orders" && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h2>
            {orders.length === 0 ? (
              <Card className="p-8 text-center border-blue-200">
                <Truck className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No orders yet</p>
                <Button onClick={() => setCurrentPage("home")} className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Start Shopping
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="p-6 border-blue-200">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                        <p className="text-sm text-gray-500">Date: {order.date}</p>
                        <p className="text-sm text-gray-500">Payment: {order.paymentMethod}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === "Processing" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    {order.deliveryAgent && ( // Display agent info if assigned
                      <div className="mb-4 pb-4 border-b border-blue-200">
                        <p className="text-sm text-gray-500 mb-2">Delivery Agent</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-800">{order.deliveryAgent.name}</p>
                            <p className="text-sm text-gray-500">Rating: {order.deliveryAgent.rating} ⭐</p>
                          </div>
                          <span className="text-sm font-medium text-blue-600">{order.deliveryAgent.status}</span>
                        </div>
                      </div>
                    )}
                    <div className="mb-4 pb-4 border-b border-blue-200">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm mb-2">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Estimated Delivery</p>
                        <p className="font-semibold text-gray-800">{order.estimatedDelivery}</p>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">₦{order.total.toLocaleString()}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {currentPage === "profile" && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">My Profile</h2>
            <Card className="p-6 mb-6 border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {userProfile.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{userProfile.name}</h3>
                  <p className="text-gray-600">{userProfile.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-800">{userProfile.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <p className="text-gray-800">{userProfile.address}</p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Add live chat popup globally (appears on all pages) */}
        {showLiveChat && (
          <div className="fixed bottom-20 right-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-2xl border border-blue-200 z-40 flex flex-col max-h-96">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">AgroCom Support</h3>
              <button onClick={() => setShowLiveChat(false)} className="hover:bg-white/20 p-1 rounded">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-blue-200 p-3 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendChatMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendChatMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowLiveChat(!showLiveChat)}
          className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center z-30 hover:scale-110"
          title="Live Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>

        {showUserSettings && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
            <Card className="w-full max-w-md p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Settings</h3>
                <button onClick={() => setShowUserSettings(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={userSettings.notifications}
                    onChange={(e) => setUserSettings({ ...userSettings, notifications: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Enable Notifications</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={userSettings.emailUpdates}
                    onChange={(e) => setUserSettings({ ...userSettings, emailUpdates: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Email Updates</span>
                </label>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select
                    value={userSettings.language}
                    onChange={(e) => setUserSettings({ ...userSettings, language: e.target.value })}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg"
                  >
                    <option>English</option>
                    <option>Yoruba</option>
                    <option>Igbo</option>
                    <option>Hausa</option>
                  </select>
                </div>
                <Button onClick={() => setShowUserSettings(false)} className="w-full bg-blue-600 hover:bg-blue-700">
                  Save Settings
                </Button>
              </div>
            </Card>
          </div>
        )}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-200 md:hidden">
        <div className="flex justify-around">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "cart", icon: ShoppingCart, label: "Cart" },
            { id: "orders", icon: Truck, label: "Orders" },
            { id: "profile", icon: User, label: "Profile" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex-1 py-3 flex flex-col items-center gap-1 transition ${
                currentPage === id ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
        {[
          { id: "home", icon: Home, label: "Home" },
          { id: "cart", icon: ShoppingCart, label: "Cart" },
          { id: "orders", icon: Truck, label: "Orders" },
          { id: "profile", icon: User, label: "Profile" },
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            title={label}
            className={`p-3 rounded-full transition ${
              currentPage === id
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-blue-50 border border-blue-200"
            }`}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </nav>

      {/* Mobile Bottom Padding */}
      <div className="h-20 md:h-0" />
    </div>
  )
}
