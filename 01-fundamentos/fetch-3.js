console.log("hola tres");

let usuario = {
    name: "Morfeo",
    job: "leader"
}

let request = new XMLHttpRequest();

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type': 'application/json',
    }
}).then( res => res.json()).then(console.log).catch(console.error);

