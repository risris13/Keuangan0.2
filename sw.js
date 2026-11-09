var CACHE="catatan-keuangan-v1";
var FILES=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/apple-touch-icon.png","icons/favicon-32.png","icons/logo.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES)}).then(function(){return self.skipWaiting()}))});
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
