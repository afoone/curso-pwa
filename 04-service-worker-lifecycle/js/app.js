// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    console.log("registering");
    navigator.serviceWorker.register('/sw.js').then(

        reg => {
            Notification.requestPermission().then(
                res => {
                    console.log(res)
                    reg.showNotification("Hola Mundo!")
                }
            )
        }
    )
        ;

}

fetch('https://reqres.in/api/users').then(res => res.json()).then(console.log);


