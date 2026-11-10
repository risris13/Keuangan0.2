var CACHE="catatan-keuangan-v2";
var FILES=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png","favicon-32.png","logo.png"];
self.addEventListener("install",function(e){
 e.waitUntil(caches.open(CACHE).then(function(c){
  return Promise.all(FILES.map(function(f){return c.add(f).catch(function(){})}));
 }).then(function(){return self.skipWaiting()}));
});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==CACHE}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
 var r=e.request;if(r.method!=="GET")return;
 e.respondWith(caches.match(r).then(function(hit){
  var net=fetch(r).then(function(res){
   if(res&&(res.status===200||res.type==="opaque")){var cp=res.clone();caches.open(CACHE).then(function(c){c.put(r,cp)})}
   return res;
  }).catch(function(){return hit||(r.mode==="navigate"?caches.match("index.html"):undefined)});
  return hit||net;
 }));
});
