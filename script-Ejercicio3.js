function fibonacci (n){
    var aux;
    var aux1 = 0;
    var aux2 = 0;
    for(let i = 0; i < n; i++){
        if(i == 1){
            aux1 = 1;
        }
        aux = aux1+aux2;
        aux1 = aux2;
        aux2 = aux;
        console.log(aux);
    }
}