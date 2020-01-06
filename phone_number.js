/*
* Author: Philipe Siqueira
* Versão 1.0
*
* Description: Write a function that accepts an array of 10 
* integers (between 0 and 9), that returns a string of those numbers in the 
* form of a phone number.
*
* Descrição: 
* Escreva uma função que aceite uma matriz de 10 números inteiros (entre 0 e 9), 
* que retorne uma sequência desses números na forma de um número de telefone.
*/

/*
* Solução 1 - Menos elegante usando template String
* Solution 1 - Using Template String
*/

function createPhoneNumber(numbers){
  return (`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"


/*
* Solução 2 -  String Replace substitindo x pelo valor do vetor na posição atual
* Solution 2 - Using String Replace to replace x with the value of the vector at the current position
*/
  
function createPhoneNumber1(numbers){
  let myFormat = '(xxx) xxx-xxxx';
  for(i in myFormat){ myFormat = myFormat.replace('x', numbers[i])}
  return myFormat
}
console.log(createPhoneNumber1([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/*
* Solução 3 -  Usando array.join + string replace + RegExp, onde cada ponto (.)
 equivale a um caracter separando em 3 grupos por parenteses, attributes ($1) add parenteses a saida do primeiro grupo.
* Solution 3 - Using array.join + string replace + RegExp, where each dot (.) is equivalent to a character separated into 3 groups by parentheses.
*/
function createPhoneNumber2(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/*
* Solução 4 - Usando replace dentro do array.reduce
* Solution 4 -  Using replace into array.reduce
*/
function createPhoneNumber3(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))