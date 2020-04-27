// Tarea sobre promesas y fetch
// Realice resolución de cada ejercicio,

// compruebe el resultado en la consola y posteriormente
// siga con el siguiente.

// Comente TODO el código del ejercicio anterior
// antes de continuar con el siguiente.

// ==============================================
// Ejercicio #1
// ==============================================
/*
 Realizar un llamado FETCH a la siguiente API
 https://swapi.co/api/people/1/
 Imprima en consola el nombre y género de la persona.
*/

// Resolución de la tarea #1

//fetch('https://swapi.co/api/people/1/').then(res => res.json()).then(p => console.log(p.name, p.gender));


// ==============================================
// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.co/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

const postData = persona => {
    return fetch('https://reqres.in/api/users', {
        method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            name: persona.name,
            gender: persona.gender
        })
    })
}

fetch('https://swapi.co/api/people/1/').then(res  => res.json()).then(postData).then(console.log)





