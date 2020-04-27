console.log("Installing Service Worker v10");

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(fetch(event.request).
    then( res => {
        console.log(res);
        if (!res.ok) {
            if (event.request.url.includes('main'))
            {
                return fetch('/img/main.jpg');
            } else {
                throw new Error("caca");
            }
            
        } else {
            return res;
        }
    })
    .catch(err => {
        return new Response(err);
    })
        
    )
})  