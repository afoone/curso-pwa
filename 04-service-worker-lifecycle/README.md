Antes que nada, clear storage


### Install

El install se ejecuta cuando se instala el service worker en el navegador. Puede estar esperando a activarse


```javascript
self.addEventListener('install', e => {
    console.log("Instalando Service Worker");
    // Se dispara cada vez que haya un pequeño cambio
    // pero no necesariamente 
})
```


### Activate 

Cuando se activa

```javascript
self.addEventListener('activate', e => {
    console.log("SW: activo y listo para controlar la aplicación");
    // Es un buen lugar para borrar caché vieja, ya que 
    // el viejo service worker no debería ser igual
})
```


Cómo esperar a que la instalación (por ejemplo) termine:

```javascript

self.addEventListener('install', e => {
    console.log("Instalando Service Worker");
    // Se dispara cada vez que haya un pequeño cambio
    // pero no necesariamente 

    const instalacion = new Promise (
        (resolve, reject) => {
            setTimeout(() => {
                console.log("SW: Todo correcto")
            }, 1000);
        }
    )

    // Espera a que terminen las cosas
    e.waitUntil(instalacion);
})
```

### Fetch

Aquí lo normal es aplicar las estrategias de caché

```javascript
self.addEventListener('fetch', e => {
    console.log(e.request.url)
    }
)
```

Podemos probar una petición rest en app.js:

```javascript
    fetch('https://reqres.in/api/users').then(res => res.json()).then(console.log);
```

### Sync

Se ejecuta cuando recuperamos conexión, el syncmanager no lo soportan muchos navegadores (firefox por ejemplo)

para probarlo hay que eliminar la conexión directamente (apagar wifi...)

```javascript
self.addEventListener('sync', e => {
    console.log("recuperada la conexión", e.tag);
})
```

### push

Cuando se reciben notificaciones push...

Se pueden simular en application - > service workers

de la situiente manera:

```javascript
self.addEventListener('push', 
    e=> {
        console.log(e)
    }
)
```

para mostrarlas en pantalla:






