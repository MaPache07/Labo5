function decabin(n){
    aux = n;
    arreglo = [];
    while(aux!=1){
        arreglo.push(aux%2);
        aux = Math.floor(aux/2);
    }
    arreglo.push(aux);
    arreglo = arreglo.reverse();
    arreglo = arreglo.join("");
    return arreglo;
}