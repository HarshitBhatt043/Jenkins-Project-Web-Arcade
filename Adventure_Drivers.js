CACHE_NAME="Adventure_Drivers",self.addEventListener("install",(e=>{e.waitUntil(caches.open(CACHE_NAME).then((e=>fetch("./assets.js").then((e=>{if(e.ok)return e.json();throw new Error("Unable to fetch assets.js")})).then((t=>e.addAll(t))).catch((e=>{})))))})),self.addEventListener("fetch",(e=>{e.respondWith(caches.match(new URL(e.request.url).pathname).then((t=>t||fetch(e.request).then((t=>{if(t.ok){const n=t.clone();caches.open(CACHE_NAME).then((t=>{t.put(new URL(e.request.url).pathname,n)}))}return t})))).catch((()=>new Response("Not Found",{status:404,statusText:"Not Found"}))))}));