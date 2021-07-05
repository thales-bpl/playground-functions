// Desafio 3
let string = 'Vamo que vamo'
/* for(let index in string) {
    console.log(string[index]);
} */

function splitSentence(string) {
    return stringSplitter(string);
}

function stringSplitter(string){
    let novoArray = []
    let stringsSeparadas = ''
    for (let index in string) {
        if (string[index] !== ' ') {
            stringsSeparadas += string[index];
        } else if (string[index] === ' '){
            novoArray.push(stringsSeparadas);
            stringsSeparadas = '';
        }
    }
    return novoArray;
}


/* function stringSplitter(string){
    let novoArray = []
    let stringsSeparadas = ''
    for (let index in string) {
        if (string[index] === ' '){
            novoArray.push(stringsSeparadas);
            stringsSeparadas = '';
        } else if (string[index] !== ' ') {
            stringsSeparadas += string[index];
        }
    }
    return novoArray;
} */


function splitSentence(input) {
    let wordsArray = [];
    let newWord = '';
  
    for (let i = 0; i <= input.length; i += 1) {
      if (input[i] === ' ' || i === input.length) {
        wordsArray.push(newWord);
        newWord = '';
      } else {
        newWord += input[i];
      }
    }
  
    return wordsArray;
  }