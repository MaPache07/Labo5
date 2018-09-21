function area(){
    r = prompt("Ingrese el radio");
    if(r <= 0){
        return -1;
    }
    a = Math.PI*(r**2);
    return (a);
}