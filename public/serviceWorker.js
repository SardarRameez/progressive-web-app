const cache_name="expense-tracker-app v1";
const urlsToCache=['/', 'index.html' , '/static/js/bundle.js', '/static/js/0.chunk.js', '/static/js/main.chunk.js'];

self.addEventListener("install",(e)=>{
    e.waitUntil(
        caches.open(cache_name)
        .then((cache)=>{
            console.log("Installed successfully")
            return cache.addAll(urlsToCache);
        })
    )
})



self.addEventListener("fetch",(e)=>{
    if(!navigator.onLine){
        e.respondWith(
            caches.match(e.request)
            .then(()=>{
                console.log("Fetch Data")
                return fetch(e.request)
            })
        )
    }
})


self.addEventListener("activate",(e)=>{
    const cacheWhiteList=[];
    cacheWhiteList.push(cache_name)
    e.waitUntil(
        caches.keys().then((cache_name)=>
        Promise.all(
            cache_name.map((cacheName)=>{
                console.log("activate Data")
                if(!cacheWhiteList.includes(cacheName)){
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})