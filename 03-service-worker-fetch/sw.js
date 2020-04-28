//console.log("hola mundo serviceworker 2")


// Ciclo de vida del SW



// self.addEventListener('install', event => {


//     // Descargamos los assets


//     // Creamos un cache


//     console.log("Instalando Service Worker v3...");

//     const instalacion = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Instalaciones terminadas");
//             self.skipWaiting();
//             resolve();
//         }, 10);
//     })
//     event.waitUntil(instalacion);


//     //self.skipWaiting();
// })

// // Cuando el service worker toma el control de la aplicacion
// self.addEventListener('activate', event => {

//     // Borrar cache viejo


//     console.log("SW activo y listo para controlar la app");

// })

// Fetch: intercepto peticiones http

// self.addEventListener('fetch', e => {
//     if (e.request.url.includes('style.css')) {
//         e.respondWith(null)
//     } else {
//         e.respondWith(fetch(e.request))
//     }
// })

self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(
            res => {
                if (res.ok) {
                    return res
                } else {
                    return fetch('img/main.jpg')
                }
            }
        )
    )


})



// self.addEventListener('fetch', event => {

//     // // Aplicar estrategias del cache
//     // console.log("SW "+event.request.url);
//     // if (event.request.url.includes('users')){
//     //     const resp = new  Response('{ "ok": false, "mensaje": "jajajaja" }', {
//     //         "Content-Type": 'application/json',
//     //     });
//     //     event.respondWith(resp);
//     // }

// })


// // SYNC: Cuando recuperamos la conexión a Internet

// self.addEventListener('sync', event => {
//     console.log("recuperamos conexión ");
//     console.log(event);
//     console.log(event.tag);
// });


// // PUCH : MANEJAR LAS PUSH NOTIFICATIONS
// self.addEventListener('push', event => {
//     console.log("notificacion recibida");
//     console.log(event);
// })
