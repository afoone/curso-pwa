if (navigator.serviceWorker) {
    console.log("podemos usarlo");
    navigator.serviceWorker.register('/sw.js');
}