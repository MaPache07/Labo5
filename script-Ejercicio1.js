function Palindrome(palabra){
    inversa = palabra.split("").reverse().join("");
    if (palabra == inversa){
        return `La palabra ${palabra} es palindrome`;
    }
    return (`La palabra ${palabra} no es palindrome`);
}