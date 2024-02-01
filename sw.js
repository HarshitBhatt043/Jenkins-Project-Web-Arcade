const CACHE_NAME = "portal",
  urlsToCache = [
    "./android-chrome-192x192.png",
    "./android-chrome-512x512.png",
    "./apple-touch-icon.png",
    "./favicon-16x16.png",
    "./favicon-32x32.png",
    "./favicon.ico",
    "./index.html",
    "./site.webmanifest",
  ];
self.addEventListener("install", (s) => {
  s.waitUntil(
    caches.open("portal").then((s) => {
      const e = urlsToCache.map((e) => s.add(e).catch((s) => {}));
      return Promise.all(e);
    })
  );
}),
  self.addEventListener("fetch", (s) => {
    s.respondWith(
      caches.match(s.request).then((e) => {
        if (e) return e;
        const a = s.request.clone();
        return fetch(a)
          .then((e) => {
            if (!e || 200 !== e.status || "basic" !== e.type) return e;
            const a = e.clone();
            return (
              caches.open("portal").then((e) => {
                e.put(s.request, a);
              }),
              e
            );
          })
          .catch((e) => caches.match(s.request));
      })
    );
  }),
  self.addEventListener("activate", (s) => {
    s.waitUntil(
      caches.keys().then((s) =>
        Promise.all(
          s.map((s) => {
            if ("portal" !== s) return caches.delete(s);
          })
        )
      )
    );
  });
