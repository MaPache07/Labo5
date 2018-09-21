function Palindrome(palabra){
    inversa = palabra.split("").reverse().join("");
    if (palabra == inversa){
        console.log(`La palabra ${palabra} es palindrome`)
    }
    else {
        console.log(`La palabra ${palabra} no es palindrome`)
    }
}