clear storage

## Offline

con este código podemos capturar si está offline y devolver algo:


```javascript
self.addEventListener('fetch',
    e => {
        console.log("fetching");

        const offlineResponse = new Response(`
        <h1>Bienvenido a mi pagina<br/>
        para usarla necesitas internet</h1>
        `)
        const resp = fetch(e.request)
            .catch(
                err => {
                    console.log(err);
                    return offlineResponse;
                }
            )

        e.respondWith(resp);
    }
)
```

Para devolver html:

```javascript
    const offlineResponse = new Response(`
    <h1>Bienvenido a mi pagina<br/>
    para usarla necesitas internet</h1>
    `, 
    {
        headers: {
            "Content-Type": "text/html"
        }
    })
```

### cache storage

en app.js:

para abrir una cache y cachear

```javascript
if (window.caches) {
    caches.open('caches-v1.1').then(cache => {
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]);
        cache.keys().then(console.log);
        
    });
}
```

para comprobar si existe una cache:

```javascript
    // para preguntar si existe
    caches.has('caches-v1.1').then(res => console.log(res ? "existe": "no existe"));

    caches.has('caches-no-existe').then(res => console.log(res ? "existe": "no existe"));
```

borrado de cache completa:

```javascript
caches.delete('caches-v1.1');
```

borrado de un elemento de cache opened:

```javascript
cache.delete('patch-to-file');
```

reemplazado 
```javascript

cache.put(key, value);

```

todos los caches:

```javascript
cache.keys()
```




