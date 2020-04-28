

self.addEventListener('fetch',
e => {
    console.log("fetching");

    const offlineResponse = new Response(`
    <h1>Bienvenido a mi pagina<br/>
    para usarla necesitas internet</h1>
    `, 
    {
        headers: {
            "Content-Type": "text/html"
        }
    })
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