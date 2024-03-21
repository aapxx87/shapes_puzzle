self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        'index.html',
        'styles/main.css',
        'styles/figures.css',
        'styles/mobile-controls.css',
        'styles/playground-area.css',
        'styles/settings-panel.css',
        'scripts/script_figures_parameters.js',
        'scripts/script_shapes.js',
        'scripts/script.js',
        // перечислите все другие CSS и JS файлы
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
