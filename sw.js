// Keeps Tiny Keys working offline after the first visit.
const CACHE = 'tiny-keys-v5';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];  // voice clips are cached as they play

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes('fonts.g'))) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
