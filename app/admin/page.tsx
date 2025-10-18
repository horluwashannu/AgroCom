"use client"

import { useState } from "react"
import {
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  TrendingUp,
  Settings,
  LogOut,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  Filter,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Mock admin data
const ADMIN_DATA = {
  totalRevenue: 2450000,
  totalOrders: 342,
  totalCustomers: 1250,
  totalAgents: 45,
  monthlyGrowth: 12.5,
}

const MOCK_PRODUCTS = [
  { id: 1, name: "Premium Maize Seeds", category: "Seeds", price: 2500, stock: 450, sales: 1240 },
  { id: 2, name: "Organic Fertilizer (50kg)", category: "Fertilizers", price: 8500, stock: 120, sales: 340 },
  { id: 3, name: "Cassava Cuttings Bundle", category: "Crops", price: 3500, stock: 280, sales: 890 },
  { id: 4, name: "Garden Hoe (Steel)", category: "Tools", price: 4200, stock: 95, sales: 450 },
  { id: 5, name: "Tomato Seeds (Hybrid)", category: "Seeds", price: 1800, stock: 620, sales: 2100 },
  { id: 6, name: "Irrigation Pipe (50m)", category: "Tools", price: 12000, stock: 45, sales: 180 },
]

const MOCK_ORDERS = [
  { id: "ORD-001", customer: "Adekunle Okafor", amount: 11000, status: "completed", date: "2024-10-15" },
  { id: "ORD-002", customer: "Amina Hassan", amount: 4700, status: "processing", date: "2024-10-16" },
  { id: "ORD-003", customer: "Tunde Adeyemi", amount: 5300, status: "completed", date: "2024-10-16" },
  { id: "ORD-004", customer: "Chioma Nwankwo", amount: 12500, status: "pending", date: "2024-10-17" },
  { id: "ORD-005", customer: "Emeka Obi", amount: 8900, status: "completed", date: "2024-10-17" },
]

const MOCK_AGENTS = [
  { id: 1, name: "Chukwu Obi", rating: 4.9, deliveries: 342, earnings: 125000, status: "active" },
  { id: 2, name: "Amara Nwosu", rating: 4.8, deliveries: 298, earnings: 98500, status: "active" },
  { id: 3, name: "Tunde Adeyemi", rating: 4.7, deliveries: 215, earnings: 76200, status: "active" },
  { id: 4, name: "Zainab Mohammed", rating: 4.6, deliveries: 189, earnings: 65800, status: "inactive" },
]

export default function AdminDashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [orders, setOrders] = useState(MOCK_ORDERS)
  const [agents, setAgents] = useState(MOCK_AGENTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredOrders = orders.filter((o) => o.id.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredAgents = agents.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()))

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-purple-700">AgroCom Admin</h1>
            <p className="text-gray-500 mt-2">Management Portal</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setIsLoggedIn(true)
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="admin@agrocom.ng"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-2">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-purple-700">AgroCom</h1>
          </div>
          <p className="text-sm text-gray-500">Admin Portal</p>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { id: "dashboard", icon: BarChart3, label: "Dashboard" },
            { id: "products", icon: Package, label: "Products" },
            { id: "orders", icon: ShoppingCart, label: "Orders" },
            { id: "agents", icon: Users, label: "Delivery Agents" },
            { id: "analytics", icon: TrendingUp, label: "Analytics" },
            { id: "settings", icon: Settings, label: "Settings" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                currentPage === id ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <Button
            variant="outline"
            className="w-full justify-start gap-2 bg-transparent"
            onClick={() => setIsLoggedIn(false)}
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {currentPage === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold text-purple-700">
                      ₦{(ADMIN_DATA.totalRevenue / 1000000).toFixed(1)}M
                    </p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-purple-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Orders</p>
                    <p className="text-3xl font-bold text-blue-700">{ADMIN_DATA.totalOrders}</p>
                  </div>
                  <ShoppingCart className="w-12 h-12 text-blue-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Total Customers</p>
                    <p className="text-3xl font-bold text-green-700">{ADMIN_DATA.totalCustomers}</p>
                  </div>
                  <Users className="w-12 h-12 text-green-100" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Active Agents</p>
                    <p className="text-3xl font-bold text-orange-700">{ADMIN_DATA.totalAgents}</p>
                  </div>
                  <Users className="w-12 h-12 text-orange-100" />
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Button
                onClick={() => setCurrentPage("products")}
                className="bg-purple-600 hover:bg-purple-700 py-6 text-lg justify-start gap-2"
              >
                <Package className="w-5 h-5" />
                Manage Products
              </Button>
              <Button
                onClick={() => setCurrentPage("orders")}
                className="bg-blue-600 hover:bg-blue-700 py-6 text-lg justify-start gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                View Orders
              </Button>
              <Button
                onClick={() => setCurrentPage("agents")}
                className="bg-green-600 hover:bg-green-700 py-6 text-lg justify-start gap-2"
              >
                <Users className="w-5 h-5" />
                Manage Agents
              </Button>
            </div>

            {/* Recent Orders */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">{order.id}</td>
                        <td className="py-3 px-4 text-gray-600">{order.customer}</td>
                        <td className="py-3 px-4 font-semibold text-gray-800">₦{order.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {currentPage === "products" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Products</h1>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Plus className="w-5 h-5" />
                Add Product
              </Button>
            </div>

            <Card className="p-6 mb-6">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Filter className="w-5 h-5" />
                  Filter
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Stock</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Sales</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">{product.name}</td>
                        <td className="py-3 px-4 text-gray-600">{product.category}</td>
                        <td className="py-3 px-4 font-semibold text-gray-800">₦{product.price.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              product.stock > 100
                                ? "bg-green-100 text-green-800"
                                : product.stock > 50
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {product.stock}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{product.sales}</td>
                        <td className="py-3 px-4 flex gap-2">
                          <button className="p-2 hover:bg-gray-200 rounded transition">
                            <Eye className="w-5 h-5 text-gray-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded transition">
                            <Edit2 className="w-5 h-5 text-blue-600" />
                          </button>
                          <button className="p-2 hover:bg-gray-200 rounded transition">
                            <Trash2 className="w-5 h-5 text-red-600" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {currentPage === "orders" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="w-5 h-5" />
                Export
              </Button>
            </div>

            <Card className="p-6">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-800">{order.id}</td>
                        <td className="py-3 px-4 text-gray-600">{order.customer}</td>
                        <td className="py-3 px-4 font-semibold text-gray-800">₦{order.amount.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              order.status === "completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{order.date}</td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </>
        )}

        {currentPage === "agents" && (
          <>
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Delivery Agents</h1>
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <Plus className="w-5 h-5" />
                Add Agent
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAgents.map((agent) => (
                <Card key={agent.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                        {agent.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{agent.name}</h3>
                        <p className="text-sm text-gray-500">Agent ID: AG-{String(agent.id).padStart(3, "0")}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        agent.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Rating</p>
                      <p className="font-bold text-gray-800">{agent.rating}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Deliveries</p>
                      <p className="font-bold text-gray-800">{agent.deliveries}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Earnings</p>
                      <p className="font-bold text-green-700">₦{(agent.earnings / 1000).toFixed(0)}K</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      Edit
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {currentPage === "analytics" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Trend</h2>
                <div className="h-64 bg-gradient-to-b from-purple-50 to-white rounded-lg flex items-end justify-around p-4">
                  {[40, 60, 45, 75, 55, 80, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </Card>
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Status Distribution</h2>
                <div className="space-y-4">
                  {[
                    { label: "Completed", value: 65, color: "bg-green-500" },
                    { label: "Processing", value: 20, color: "bg-blue-500" },
                    { label: "Pending", value: 15, color: "bg-yellow-500" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        <span className="text-sm font-bold text-gray-800">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </>
        )}

        {currentPage === "settings" && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Settings</h1>
            <Card className="p-6 max-w-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Platform Name</label>
                  <input
                    type="text"
                    defaultValue="AgroCom"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Support Email</label>
                  <input
                    type="email"
                    defaultValue="support@agrocom.ng"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Fee</label>
                  <input
                    type="number"
                    defaultValue="500"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Save Settings</Button>
              </div>
            </Card>
          </>
        )}
      </main>
    </div>
  )
}
