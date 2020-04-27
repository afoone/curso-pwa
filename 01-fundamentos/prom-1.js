function sumarUno(numero, callback){
    if (numero== 7) {
        callback("Numero muy alto");
        return;
    }
    setTimeout(
        function() {
            callback(null, numero+1);
        }, 1000
    )
}

sumarUno(5, function(error, numerico) {
    if(error) {
        console.log("error "+error);
        return;
    }
    console.log(numerico);
    sumarUno(numerico, function(error, numerico2) {
        if(error) {
            console.log("error "+error);
            return;
        }
        console.log(numerico2);
        sumarUno(numerico2, function(error, numerico3){
            if(error) {
                console.log("error "+error);
                return;
            }
            console.log(numerico3);
        })
    })
});