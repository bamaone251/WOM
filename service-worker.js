const CACHE_NAME = "tides-app-cache-v1";
const urlsToCache = [
  "./index.html",
  "./style.css",
  "./script.js",
  "https://cdn.tidesandcurrents.noaa.gov/ports/plots/8741533_wl_24.png",
  "https://api.openweathermap.org/data/2.5/weather"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
