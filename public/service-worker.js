/* service-worker.js */
const CACHE_NAME = 'training-log-v1';
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-256.png',
    '/icons/icon-512.png'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS))
    );
});

self.addEventListener('activate', event => {
    clients.claim();
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        ))
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method === 'POST') return;

    // Navigation fallback
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => caches.match('/index.html'))
        );
        return;
    }

    // Cache First Strategy for static assets
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(resp => {
                // Cache successful GET responses
                if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
                const copy = resp.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                return resp;
            }).catch(() => {
                // Just return undefined or fallback if available
            });
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
