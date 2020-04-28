

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw1.js');
}

if (window.caches) {

    caches.open('caches-v1.1').then(cache => {
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]);
        cache.keys().then(console.log);

        

    });

    // para preguntar si existe
    caches.has('caches-v1.1').then(res => console.log(res ? "existe": "no existe"));

    caches.has('caches-no-existe').then(res => console.log(res ? "existe": "no existe"));


    // borra caches
    // caches.delete('caches-v1.1');



}
