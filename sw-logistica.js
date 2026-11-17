const C='logistica-v1',A=['./LOGISTICA.html','./manifest-logistica.webmanifest','./logistica-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(C).then(h=>h.put(r,c))}return x}).catch(()=>caches.match(r).then(m=>m||caches.match('./LOGISTICA.html'))))});
