// Service Worker cho eTax Mobile PWA
const CACHE_NAME = 'etax-mobile-v1';
const urlsToCache = [
  '/',
  '/login.html',
  '/home.html',
  '/manifest.json',
  '/css/common.css',
  '/css/login.css',
  '/css/home.css',
  '/js/login.js',
  '/js/home.js',
  '/js/auth.js',
  '/js/utils.js',
  '/assets/logo-192.webp',
  '/assets/bglogin.webp'
];

// Install event - Cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error);
      })
  );
  self.skipWaiting();
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If both fail, return offline page if available
        if (event.request.destination === 'document') {
          return caches.match('/login.html');
        }
      })
  );
});

