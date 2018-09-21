function Ordenar(arreglo){
    var aux = new Array(arreglo.length);
    n = arreglo.length;
    for(let i = 0; i < n; i++){
        var aux2;
        var pos;
        for (let j = 0; j < arreglo.length; j++){
            if (j == 0){
                aux2 = arreglo[j];
                pos = j;
            }
            if(aux2 > arreglo[j]){
                aux2 = arreglo[j];
                pos = j;
            }
        }
        aux.push(aux2);
        arreglo.splice(pos, 1);
    }
    return aux;
}