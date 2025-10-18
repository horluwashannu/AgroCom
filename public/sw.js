// Service Worker for PWA support
const CACHE_NAME = "agrocom-v1"
const urlsToCache = ["/", "/manifest.json", "/icon-192.png", "/icon-512.png", "/offline.html"]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((err) => {
        console.log("[v0] Cache addAll error:", err)
      })
    }),
  )
  self.skipWaiting()
})

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
  self.clients.claim()
})

// Fetch event - Network first, fallback to cache
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type === "error") {
          return response
        }

        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
      .catch(() => {
        return caches.match(event.request).then((response) => {
          return response || new Response("Offline - Page not available", { status: 503 })
        })
      }),
  )
})

// Handle push notifications
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {}
  const options = {
    body: data.message || "New notification from AgroCom",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: data.type || "notification",
    requireInteraction: false,
  }

  event.waitUntil(self.registration.showNotification(data.title || "AgroCom", options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i]
        if (client.url === "/" && "focus" in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/")
      }
    }),
  )
})
