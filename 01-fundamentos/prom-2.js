function sumarUno(numero){

    let promesa = new Promise((resolve, reject) => {
        if (numero >= 7) {
            reject("Demasiado alto");
        }
        setTimeout(
            () => {
                console.log(numero+1);
                resolve(numero+1);
            }, 1000
        )

    })

    return promesa;
}

sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .catch(console.log);
