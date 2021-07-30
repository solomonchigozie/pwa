const staticDevCoffee = "Pwa";
const assets = [
    "/",
    "index.html",
    "src/master.css",
    "images/logo192.png",
    "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_960_720.png",
    "https://cdn.pixabay.com/photo/2014/10/22/17/22/car-498244_960_720.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets);
    })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
    })
    );
});