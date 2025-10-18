"use client"

import { useState } from "react"
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  LogOut,
  Navigation,
  Star,
  DollarSign,
  Package,
  User,
  Truck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Mock delivery agent data
const AGENT_DATA = {
  id: "AG-001",
  name: "Chukwu Obi",
  phone: "+234 803 456 7890",
  rating: 4.9,
  totalDeliveries: 342,
  todayDeliveries: 8,
  earnings: {
    today: 12500,
    week: 87500,
    month: 325000,
  },
  status: "online",
}

const MOCK_DELIVERIES = [
  {
    id: "ORD-1728000001",
    customer: "Adekunle Okafor",
    phone: "+234 801 234 5678",
    address: "123 Lekki Road, Lagos",
    items: ["Premium Maize Seeds", "Organic Fertilizer"],
    amount: 11000,
    status: "in-transit",
    distance: 2.3,
    estimatedTime: 15,
    rating: null,
  },
  {
    id: "ORD-1728000002",
    customer: "Amina Hassan",
    phone: "+234 802 345 6789",
    address: "456 Victoria Island, Lagos",
    items: ["Garden Hoe (Steel)"],
    amount: 4700,
    status: "pending",
    distance: 5.1,
    estimatedTime: 25,
    rating: null,
  },
  {
    id: "ORD-1728000003",
    customer: "Tunde Adeyemi",
    phone: "+234 804 567 8901",
    address: "789 Ikoyi Lane, Lagos",
    items: ["Tomato Seeds (Hybrid)", "Cassava Cuttings Bundle"],
    amount: 5300,
    status: "completed",
    distance: 0,
    estimatedTime: 0,
    rating: 5,
  },
  {
    id: "ORD-1728000004",
    customer: "Chioma Nwankwo",
    phone: "+234 805 678 9012",
    address: "321 Ajah Road, Lagos",
    items: ["Irrigation Pipe (50m)"],
    amount: 12500,
    status: "pending",
    distance: 8.7,
    estimatedTime: 35,
    rating: null,
  },
]

export default function AgentDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [deliveries, setDeliveries] = useState(MOCK_DELIVERIES)
  const [selectedDelivery, setSelectedDelivery] = useState(null)
  const [agentStatus, setAgentStatus] = useState(AGENT_DATA.status)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const updateDeliveryStatus = (orderId, newStatus) => {
    setDeliveries(deliveries.map((d) => (d.id === orderId ? { ...d, status: newStatus } : d)))
  }

  const submitRating = (orderId, rating) => {
    setDeliveries(deliveries.map((d) => (d.id === orderId ? { ...d, rating } : d)))
    setSelectedDelivery(null)
  }

  const pendingDeliveries = deliveries.filter((d) => d.status === "pending")
  const inTransitDeliveries = deliveries.filter((d) => d.status === "in-transit")
  const completedDeliveries = deliveries.filter((d) => d.status === "completed")

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-blue-700">AgroCom Agent</h1>
            <p className="text-gray-500 mt-2">Delivery Partner Portal</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsLoggedIn(true)
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agent ID</label>
              <input
                type="text"
                placeholder="AG-001"
                defaultValue="AG-001"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-blue-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-700">AgroCom Agent</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${agentStatus === "online" ? "bg-green-500" : "bg-gray-400"}`} />
              <span className="text-sm font-medium text-gray-700 capitalize">{agentStatus}</span>
            </div>
            <button
              onClick={() => setAgentStatus(agentStatus === "online" ? "offline" : "online")}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition font-medium"
            >
              {agentStatus === "online" ? "Go Offline" : "Go Online"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentPage === "dashboard" && (
          <>
            {/* Agent Info Card */}
            <Card className="p-6 mb-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    {AGENT_DATA.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{AGENT_DATA.name}</h2>
                    <p className="text-blue-100">Agent ID: {AGENT_DATA.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                    <span className="text-lg font-bold">{AGENT_DATA.rating}</span>
                  </div>
                  <p className="text-blue-100">{AGENT_DATA.totalDeliveries} deliveries</p>
                </div>
              </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Today's Earnings</p>
                    <p className="text-3xl font-bold text-blue-700">₦{AGENT_DATA.earnings.today.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-12 h-12 text-blue-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Week's Earnings</p>
                    <p className="text-3xl font-bold text-green-700">₦{AGENT_DATA.earnings.week.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-green-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Today's Deliveries</p>
                    <p className="text-3xl font-bold text-purple-700">{AGENT_DATA.todayDeliveries}</p>
                  </div>
                  <Package className="w-12 h-12 text-purple-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Pending Orders</p>
                    <p className="text-3xl font-bold text-orange-700">{pendingDeliveries.length}</p>
                  </div>
                  <AlertCircle className="w-12 h-12 text-orange-100" />
                </div>
              </Card>
            </div>

            {/* Deliveries Tabs */}
            <div className="mb-6">
              <div className="flex gap-2 border-b border-gray-200">
                {[
                  { id: "pending", label: "Pending", count: pendingDeliveries.length },
                  {
                    id: "in-transit",
                    label: "In Transit",
                    count: inTransitDeliveries.length,
                  },
                  {
                    id: "completed",
                    label: "Completed",
                    count: completedDeliveries.length,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentPage(`deliveries-${tab.id}`)}
                    className="px-4 py-3 font-medium text-gray-600 border-b-2 border-transparent hover:border-blue-500 transition relative"
                  >
                    {tab.label}
                    <span className="ml-2 bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={() => setCurrentPage("deliveries-pending")}
                className="bg-orange-600 hover:bg-orange-700 py-6 text-lg"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                View Pending Orders
              </Button>
              <Button
                onClick={() => setCurrentPage("deliveries-in-transit")}
                className="bg-blue-600 hover:bg-blue-700 py-6 text-lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Active Deliveries
              </Button>
              <Button onClick={() => setCurrentPage("profile")} className="bg-gray-600 hover:bg-gray-700 py-6 text-lg">
                <User className="w-5 h-5 mr-2" />
                My Profile
              </Button>
            </div>
          </>
        )}

        {currentPage.startsWith("deliveries-") && (
          <div>
            <Button variant="outline" onClick={() => setCurrentPage("dashboard")} className="mb-6">
              ← Back to Dashboard
            </Button>

            <div className="space-y-4">
              {(currentPage === "deliveries-pending"
                ? pendingDeliveries
                : currentPage === "deliveries-in-transit"
                  ? inTransitDeliveries
                  : completedDeliveries
              ).map((delivery) => (
                <Card
                  key={delivery.id}
                  className="p-6 cursor-pointer hover:shadow-lg transition"
                  onClick={() => setSelectedDelivery(delivery)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Order ID: {delivery.id}</p>
                      <h3 className="text-xl font-bold text-gray-800">{delivery.customer}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        delivery.status === "pending"
                          ? "bg-orange-100 text-orange-800"
                          : delivery.status === "in-transit"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {delivery.status === "in-transit"
                        ? "In Transit"
                        : delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Distance</p>
                        <p className="font-semibold text-gray-800">{delivery.distance} km</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Est. Time</p>
                        <p className="font-semibold text-gray-800">{delivery.estimatedTime} min</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Amount</p>
                        <p className="font-semibold text-gray-800">₦{delivery.amount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500">Contact</p>
                        <p className="font-semibold text-gray-800 text-sm">{delivery.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 pb-4 border-b">
                    <p className="text-sm text-gray-500 mb-2">Items</p>
                    <ul className="space-y-1">
                      {delivery.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {delivery.address}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentPage === "profile" && (
          <div className="max-w-2xl mx-auto">
            <Button variant="outline" onClick={() => setCurrentPage("dashboard")} className="mb-6">
              ← Back
            </Button>
            <Card className="p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-3xl font-bold">
                  {AGENT_DATA.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{AGENT_DATA.name}</h2>
                  <p className="text-gray-500">Agent ID: {AGENT_DATA.id}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold text-gray-800">{AGENT_DATA.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Star className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Rating</p>
                    <p className="font-semibold text-gray-800">{AGENT_DATA.rating} / 5.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Total Deliveries</p>
                    <p className="font-semibold text-gray-800">{AGENT_DATA.totalDeliveries}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 mb-6 bg-gradient-to-r from-green-50 to-blue-50">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Earnings Summary</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Today</p>
                  <p className="text-2xl font-bold text-green-700">₦{AGENT_DATA.earnings.today.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">This Week</p>
                  <p className="text-2xl font-bold text-blue-700">₦{AGENT_DATA.earnings.week.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">This Month</p>
                  <p className="text-2xl font-bold text-purple-700">₦{AGENT_DATA.earnings.month.toLocaleString()}</p>
                </div>
              </div>
            </Card>

            <Button variant="destructive" className="w-full justify-start gap-2" onClick={() => setIsLoggedIn(false)}>
              <LogOut className="w-5 h-5" />
              Sign Out
            </Button>
          </div>
        )}
      </main>

      {/* Delivery Detail Modal */}
      {selectedDelivery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedDelivery.customer}</h2>
                <button
                  onClick={() => setSelectedDelivery(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Order ID</p>
                  <p className="font-semibold text-gray-800">{selectedDelivery.id}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Delivery Address</p>
                  <p className="font-semibold text-gray-800">{selectedDelivery.address}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Contact</p>
                  <p className="font-semibold text-gray-800">{selectedDelivery.phone}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">Items</p>
                  <ul className="space-y-1">
                    {selectedDelivery.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-500 mb-1">Amount</p>
                  <p className="text-2xl font-bold text-green-700">₦{selectedDelivery.amount.toLocaleString()}</p>
                </div>
              </div>

              {selectedDelivery.status === "pending" && (
                <Button
                  onClick={() => {
                    updateDeliveryStatus(selectedDelivery.id, "in-transit")
                    setSelectedDelivery(null)
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 mb-2"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Start Delivery
                </Button>
              )}

              {selectedDelivery.status === "in-transit" && (
                <Button
                  onClick={() => {
                    updateDeliveryStatus(selectedDelivery.id, "completed")
                    setSelectedDelivery(null)
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 mb-2"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mark as Delivered
                </Button>
              )}

              {selectedDelivery.status === "completed" && !selectedDelivery.rating && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Rate this delivery</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => submitRating(selectedDelivery.id, star)}
                        className="text-2xl hover:scale-110 transition"
                      >
                        {star <= selectedDelivery.rating ? "⭐" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button variant="outline" onClick={() => setSelectedDelivery(null)} className="w-full">
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
