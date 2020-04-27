console.log("hola tres");

let request = new XMLHttpRequest();

fetch('https://reqres.in/api/users').then( res => res.json()).then(res => console.log(res.data));

