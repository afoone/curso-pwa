 //const CACHE_NAME = 'cache-1';
 const CACHE_STATIC_NAME = "static-1.1";
 const CACHE_DYNAMIC_NAME = "dynamic-1.3";
 const CACHE_INMUTABLE_NAME = "inmutable-1.1";
 const MAX_DYMANIC_ITEMS = 3;
 
 
 // Para limpiar la cache
const limpiarCache = (cacheName, noItems) => {
    caches.open(cacheName).then( cache => {
        return cache.keys().then( keys => 
            {
                console.log(keys);
                if (keys.length>= noItems) {
                    cache.delete(keys[0]).then(limpiarCache(cacheName, noItems));
                }
            }
        )
    });
}


 self.addEventListener ('install', e => {

    console.log("SW installing");

    const cachePromise = caches.open(CACHE_STATIC_NAME).then( cache => {

        return cache.addAll([
            '/',
            '/favicon.ico',
            '/index.html', 
            '/css/style.css', 
            '/img/no-image.jpg',
            '/js/app.js'
        ])

    })

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then( cache => cache.addAll(
        ['https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',]));
    
    e.waitUntil(Promise.all([cachePromise, cacheInmutable]));

 })   

 self.addEventListener('fetch', event => {  

    // 5. Cache and network race

    const respuesta = new Promise((resolve, reject) => {
        const rechazada = false;

        fetch( event.request ),then( res => {
            if (res.ok) {
                resolve(res);  
            } else {
                // nada
                if (rechazada) {
                    if (/\.(png|jpg)$/i.test(e.request.url)) {
                        resolve(caches.match('/img/no-img.jpg'));
                    }
                    reject("No existe el element");
                } else {
                    rechazada = true;
                }
            }
        })

        caches.match(event.request).then( res => {
            if (res) {
                resolve (res)
            } else {
                if (rechazada) {
                    if (/\.(png|jpg)$/i.test(e.request.url)) {
                        resolve(caches.match('/img/no-img.jpg'));
                    }
                    reject("no existe");
                } else {
                    rechazada = true;
                }
            }
        })
    });

    event.respondWith(respuesta);


    // 4. Cache with network update - rendimiento crítico para sentir aplicación nativa
    // siempre estarán las actualizaciones un paso atrás.

    //const respuesta = fet

    // const respuesta = caches.open(CACHE_DYNAMIC_NAME).then( cache => {
    //     fetch(event.request).then (myres => cache.put(event.request, myres))
    //     return caches.match(event.request);
    // })


    // event.respondWith ( respuesta)




    // 3. Network with cache fallback (network first)

    // const respuesta = fetch(event.request).then( res => {
    //     console.log('fetch '+res);
    //     caches.open(CACHE_DYNAMIC_NAME).then( cache => {
    //         cache.put(event.request, res);
    //         limpiarCache(CACHE_DYNAMIC_NAME, MAX_DYMANIC_ITEMS);
    //     }).catch(err => {
    //         return caches.match(event.request);
    //     })
    //     return res.clone();
    // });

    // 1. Cache Only
    // event.respondWith(caches.match(event.request));

    // 2. Cache with network fallback then cache
    // const respuesta = caches.match(event.request).then(res => {
    //     if (res) {
    //         console.log('desde cache');
    //         return res;
    //     }
    //     return fetch(event.request).then(res2 => {
    //         console.log("externamente "+event.request.url)
    //         caches.open(CACHE_DYNAMIC_NAME).then( cache => {
    //             cache.put(event.request.url, res2);
    //             limpiarCache(CACHE_DYNAMIC_NAME, 3);
    //         }
    //         )
    //         return res2.clone();
    //     });
    // })
    
    // event.respondWith(respuesta);


    

    







 })