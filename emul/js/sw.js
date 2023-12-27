const cacheName = "ti";
const files = [
    "./js/ti30xplussmartview-min.js",
    "./js/ti30xprosmartview-min.js",
    "./js/ti30xpriosmartview-min.js",
    "./js/debugger.js",
    "./js/sw.js",
    "./css/ti30xprosmartview-min.css",
    "./css/ti30xplussmartview-min.css",
    "./css/ti30xpriosmartview-min.css",
    "./pages/ti30xplussmartview.htm",
    "./pages/ti30xprosmartview.htm",
    "./pages/ti30xpriosmartview.htm",
    "./index.htm"
];

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            console.log("[Service Worker] Caching all: app content");
            await cache.addAll(files);
        })(),
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            const r = await caches.match(e.request);
            console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
            if (r) {
                return r;
            }
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
            cache.put(e.request, response.clone());
            return response;
        })(),
    );
});
