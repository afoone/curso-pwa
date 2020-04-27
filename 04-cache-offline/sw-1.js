

self.addEventListener('fetch', event => {

    // const offlineresponse = new Response (`
    // <!DOCTYPE html>
    // <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //         <title>Mi PWA</title>
    //     </head>
    //     <body class="container p-3">
    //         <h1>OFFLine Mode</h1>
    //     </body>
    // </html>

    // `, {
    //     headers: {
    //         'Content-Type': 'text/html',
    //     }
    // });

    const offlineresponse = fetch('pages/offline.html');

    const res = fetch(event.request).catch( 
        () => offlineresponse
    );

    event.respondWith(res);

})
