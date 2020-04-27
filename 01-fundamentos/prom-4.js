const sumarlento = numero => {
    return new Promise(
        (resolve, reject) => {
            reject("error en promersa lento");
            setTimeout(
                () => {
                    resolve(numero+1);
                    //reject("sumar lento fallo");
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

Promise.race([sumarlento(5),sumarRapido(10)]).then(console.log).catch(console.log);