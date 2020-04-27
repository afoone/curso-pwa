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