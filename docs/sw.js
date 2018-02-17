const staticCacheName = 'ak-cache-v12';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache){
      return cache.addAll([
        '/',
        'blog.html',
        'about.html',
        'shop.html',
        'css/main.css',
        'js/main.js',
      ])
    })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      // delete all the caches except current one
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName !== staticCacheName && cacheName.startsWith('ak-cache')
          })
          .map(cacheName => caches.delete(cacheName))
      )
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
  )
})