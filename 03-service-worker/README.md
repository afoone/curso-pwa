# Qué es el service worker

Es un archivo de Javascript que se compone de muchos listeners:

- install
- activate (se activa el service worker)
- push (notificaciones push)
- fetch (recupera algo)
- sync (cuando se recupera la conexión a Internet)
- message ( se recibe un mensaje de la aplicación)

Instrucción básica del serviceWorker:

```javascript
navigator.serviceWorker.register('/sw.js')
```

El service worker actua de proxy entre la aplicación y el navegador.

Muy importante:

> El service worker ha de funcionar con https (salvo en localhost)

Ojo: aunque cerremos la aplicaición o el navegador, el service worker sigue escuchando eventos y lo seguirá hasta al final de los tiempos.

Así podemos detectar, por ejemplo:

- Que hemos recuperado la conexión a Internet para resincronizar.
- Realizar actualizaciones en el back
- Recibir notificaciones

Todo esto sin preguntarle nada al usuario.


## Borrado de caché:

> F12 (DevTools) -> Application -> Clear storage

## Primero detectamos si podemos poner el serviceworker

Podemos verlos en caniuse

```javascript
if ( navigator.serviceWorker )
```


Para que nos coja los cambios en el `app.js` en las devtools => network seleccionar "disable cache"


### registro del service worker:

```javascript
navigator.serviceWorker.register('/sw.js')
```

naturalmente, tendremos que hacer el archivo sw.js

luego es interesante ir a Application->service workers y comprobar las herramientas de registrar, desregistrar, offline, etc.

El navegador actualizará el serviceworker en cuanto detecte un cambio :

- hacer un pequeño cambio y comprobar como está waiting for activate...


### fetch listener

```javascript
self.addEventListener('fetch', e => {
    console.log(e);
})
```

 - Comprobar los eventos del fetch y parar la espera del activado del nuevo serviceWorker.

 El *self* apunta al serviceWorker

 Vamos a ver ahora:

 ```javascript
 self.addEventListener('fetch', e => {
    console.log(e);
    e.respondWith(fetch(e.request))
})
```

parece que no ha hecho nada, pero vemos en el network que todos los elementos vienen del service worker

```javascript
self.addEventListener('fetch', e => {
    if (e.request.url.includes('style.css')) {
        e.respondWith(null)
    } else {
        e.respondWith(fetch(e.request))
    }
})
```

Con lo anterior impedimos que se sirva `style.css`


Jueguecito para devolver otro css:

```javascript
self.addEventListener('fetch', e => {
    if (e.request.url.includes('style.css')) {
        console.log("devolviendo otra respuesta")
        const respuesta = new Response(`
        body {
            background-color: red !important;
            color:pink
        }`, 
        {
            headers: {
                'Content-Type': 'text/css'
            }
        }
        )
        
        e.respondWith(respuesta)

    } else {
        e.respondWith(fetch(e.request))
    }
})
```


### tarea

devolvamos otra imagen

```javascript
self.addEventListener('fetch', e => {
    if (e.request.url.includes('main.jpg')) {
        e.respondWith(fetch('img/main-patas-arriba.jpg'))
    } else {
        e.respondWith(fetch(e.request))
    }
})
```


Otra prueba: 

tenemos por ejemplo una imagen que no existe:

```html
 <img src="img/main-2.jpg" alt="Vías del tren" class="img-fluid">
 ```

 Este arreglaría un 404 de un imagen:
```javascript
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
```


 






