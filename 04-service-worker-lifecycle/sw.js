console.log("install");

self.addEventListener('install', e => {
    console.log("Instalando Service Worker");
    // Se dispara cada vez que haya un pequeño cambio
    // pero no necesariamente 

    const instalacion = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                console.log("SW: Todo correcto")
                resolve()
            }, 1000);
        }
    )

    // Espera a que terminen las cosas
    e.waitUntil(instalacion);
})

self.addEventListener('activate', e => {
    console.log("SW: activo y listo para controlar la aplicación");
    // Es un buen lugar para borrar caché vieja, ya que 
    // el viejo service worker no debería ser igual
})

self.addEventListener('fetch', e => {
    console.log(e.request.url);
}
)

self.addEventListener('sync', e => {
    console.log("recuperada la conexión", e.tag);
})

self.addEventListener('push', 
    e=> {
        console.log(e)
    }
)