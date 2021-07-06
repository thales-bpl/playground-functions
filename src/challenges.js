// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  return stringSplitter(string);
}

function stringSplitter(string) {
  let novoArray = [];
  let stringsSeparadas = '';
  for (let index = 0; index <= string.length; index += 1) {
    if (string[index] === ' ' || index === string.length) {
      novoArray.push(stringsSeparadas);
      stringsSeparadas = '';
    } else {
      stringsSeparadas += string[index];
    }
  }
  return novoArray;
}

// Desafio 4
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayNumeros) {
  ordemCrescente(arrayNumeros);
  return counter(arrayNumeros, arrayNumeros[arrayNumeros.length - 1]);
}

/* Retorna o mesmo Array, organizado em ordem crescente usando Bubble Sort */
function ordemCrescente(numbers) {
  for (let index = 1; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
      if (numbers[index] < numbers[index2]) {
        let aux = numbers[index];
        numbers[index] = numbers[index2];
        numbers[index2] = aux;
      }
    }
  }
  return (numbers);
}

/* Retorna a quantidade de vezes que (number) foi observada no array (arrayNumbers) */
function counter(arrayNumbers, number) {
  let count = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === number) {
      count += 1;
    }
  }
  return (count);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = modulo(mouse - cat1);
  let distCat2 = modulo(mouse - cat2);
  return mouseHunt(distCat1, distCat2);
}

/* Módulo matemático */
function modulo(number) {
  if (number < 0) {
    return number * (-1);
  } if (number >= 0) {
    return number;
  }
}

/* Compara as distâncias entre os gatos e o alvo */
function mouseHunt(dist1, dist2) {
  if (dist1 < dist2) {
    return 'cat1';
  } if (dist2 < dist1) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayFizzBuzz = [];
  for (let index of arrayNumbers) {
    fizz(index, arrayFizzBuzz);
    buzz(index, arrayFizzBuzz);
    fizzbuzz(index, arrayFizzBuzz);
    bug(index, arrayFizzBuzz);
  }
  return arrayFizzBuzz;
}

function fizz(numero, array) {
  if (numero % 3 === 0 && numero % 5 !== 0) {
    array.push('fizz');
  }
}

function buzz(numero, array) {
  if ((numero % 5 === 0) && (numero % 3 !== 0)) {
    array.push('buzz');
  }
}

function fizzbuzz(numero, array) {
  if ((numero % 3 === 0) && (numero % 5 === 0)) {
    array.push('fizzBuzz');
  }
}

function bug(numero, array) {
  if ((numero % 5 !== 0) && (numero % 3 !== 0)) {
    array.push('bug!');
  }
}

// Desafio 9
function encode(string) {
  let encodedString = '';
  for (let index of string) {
    encodedString += encoded(index);
  }
  return encodedString;
}

/* For Loop que compara 1 caractere (index da string alvo) com elementos do arrayEncode. Retorna número se check for verdadeiro */
function encoded(caractere) {
  let novaString = caractere;
  let arrayEncode = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 1; index < 6; index += 1) {
    if (caractere === arrayEncode[index - 1]) {
      novaString = index;
    }
  }
  return novaString;
}

function decode(string) {  
  let decodedString = '';
  for (let index of string) {
    decodedString += decoded(index);
  }
  return decodedString;
}

/* For Loop que compara 1 caractere (index da string alvo) com elementos do arrayDecode. Retorna vogal se check for verdadeiro */
function decoded(caractere) {
  let novaString = caractere;
  let arrayDecode = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 1; index < 6; index += 1) {
    if (caractere == index) {
      novaString = arrayDecode[index - 1];
    }
  }
  return novaString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
