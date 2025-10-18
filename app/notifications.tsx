"use client"

import { useEffect, useState } from "react"
import { Bell, X } from "lucide-react"

interface Notification {
  id: string
  title: string
  message: string
  type: "order" | "delivery" | "promo" | "alert"
  timestamp: Date
}

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [permission, setPermission] = useState<NotificationPermission>("default")

  useEffect(() => {
    // Check notification permission
    if ("Notification" in window) {
      setPermission(Notification.permission)
    }

    // Register service worker for PWA
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.log("[v0] Service worker registration failed:", err)
      })
    }

    // Simulate incoming notifications
    const timer = setInterval(() => {
      const mockNotifications: Notification[] = [
        {
          id: `notif-${Date.now()}`,
          title: "Order Confirmed",
          message: "Your order has been confirmed and will be delivered soon",
          type: "order",
          timestamp: new Date(),
        },
        {
          id: `notif-${Date.now() + 1}`,
          title: "Delivery Update",
          message: "Your delivery agent is 5 minutes away",
          type: "delivery",
          timestamp: new Date(),
        },
        {
          id: `notif-${Date.now() + 2}`,
          title: "Special Offer",
          message: "Get 20% off on seeds this week only",
          type: "promo",
          timestamp: new Date(),
        },
      ]

      // Randomly add a notification
      if (Math.random() > 0.7) {
        const notification = mockNotifications[Math.floor(Math.random() * mockNotifications.length)]
        setNotifications((prev) => [notification, ...prev.slice(0, 4)])

        // Send browser notification if permitted
        if (permission === "granted" && "serviceWorker" in navigator) {
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(notification.title, {
              body: notification.message,
              icon: "/icon-192.png",
              badge: "/icon-192.png",
              tag: notification.type,
              requireInteraction: false,
            })
          })
        }
      }
    }, 15000)

    return () => clearInterval(timer)
  }, [permission])

  const requestPermission = async () => {
    if ("Notification" in window) {
      const result = await Notification.requestPermission()
      setPermission(result)
    }
  }

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "order":
        return "bg-blue-50 border-blue-200"
      case "delivery":
        return "bg-green-50 border-green-200"
      case "promo":
        return "bg-purple-50 border-purple-200"
      case "alert":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition border border-gray-200"
      >
        <Bell className="w-6 h-6 text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Notifications</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-500">No notifications yet</p>
              {permission !== "granted" && (
                <button
                  onClick={requestPermission}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
                >
                  Enable Notifications
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-4 border-l-4 ${getNotificationColor(notif.type)}`}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{notif.title}</p>
                      <p className="text-gray-600 text-sm mt-1">{notif.message}</p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notif.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    <button onClick={() => removeNotification(notif.id)} className="text-gray-400 hover:text-gray-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
