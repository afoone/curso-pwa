const sumarlento = numero => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    //resolve(numero+1);
                    reject("sumar lento fallo");
                }, 1000
            )
        }
    )
}


const sumarRapido = numero => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => resolve(numero+1), 300
            )
        }
    )
}


Promise.all([ sumarlento(5), sumarRapido(10)]).then( res => {
    console.log(res);
}).catch( err => {
    console.log(err);
})
;

// sumarlento(10).then(console.log);

// sumarRapido(5).then(console.log);