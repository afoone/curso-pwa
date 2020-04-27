// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js').then( reg => 
        {
            Notification.requestPermission().then( result => {
                console.log(result);
                reg.showNotification("hola pepe")  ;
            })
        })
    ;
    
}

// fetch('https://reqres.in/api/users').then(res => res.json()).then(console.log);

if (window.SyncManager){
    console.log("syncmanager activo");
}


