

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {

    // caches.open('caches-v1.1').then(cache => {
    //     cache.addAll([
    //         '/index.html',
    //         '/css/style.css',
    //         '/img/main.jpg'
    //     ]);
    //     cache.keys().then(console.log);
        
    // });



}