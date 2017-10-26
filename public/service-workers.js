let version = 10

let files = [
"/",
"/css/main.css",
"/css/bootstrap.min.css",
"/js/auth.js",
"/js/main.js",
"/imgs/logo16x16.png"
]

self.addEventListener("install", function(){
    console.log("Instalou")
})

self.addEventListener("activate", function(){
    caches.open("task-imgs-" + version).then(cache => {
        cache.addAll(files)
            .then(function(){
                caches.delete("task-imgs-" + (version - 1 ))
                caches.delete("task-imgs")
            })
    })
})


self.addEventListener("fetch", function(event){
    console.log(event.request)
    let request = event.request
    let promiseResponse = caches.match(request).then(cachedResponse => {
        let response = cachedResponse ? cachedResponse : fetch(request)
        return response
    })

    event.respondWith(promiseResponse)

})
