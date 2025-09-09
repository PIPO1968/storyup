self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('storyup-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                'style.css',
                'app.js',
                'manifest.json',
                'img/storyup-icon-192.png',
                'img/storyup-icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
