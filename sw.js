var cacheName = 'v3';

var assetsToCache = [
  '/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
        return cache.addAll(assetsToCache);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') { return; }
  if (/http:/.test(event.request.url)) { return; }
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return fetch(event.request).then(function(networkResponse) {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      }).catch(function() {
        return cache.match(event.request);
      })
    })
  );
});
