// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
}


// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
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
  return(numbers); // retorna o mesmo Array, já organizado em ordem crescente por Bubble Sort
  }

function counter(arrayNumbers, number) {
  let count = 0
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === number) {
      count += 1;
    }
  }
  return (count); // retorna a quantidade de vezes que (number) foi observada no array (arrayNumbers)
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = checkDist(mouse, cat1);
  let distCat2 = checkDist(mouse, cat2);
  return mouseHunt (distCat1, distCat2);
}

/* function abs(n1) {
  if (n1 < 0) {
    n1 = n1 * (-1)
} */

// Dá pra melhorar a lógica dessa function catAndMouse. checkDist também pode ser otimizada.
function checkDist(pos1, pos2) {
  let distAbsoluta = 0
  if ((pos1 < 0 && pos2 < 0) || (pos1 > 0 && pos2 > 0)) {
    if (pos1 > pos2) {
      distAbsoluta = pos1 - pos2;
    } else {
      distAbsoluta = pos2 - pos1;
    }
  } else if ((pos1 > 0 && pos2 < 0) || (pos1 > 0 && pos2 < 0) || (pos1 === 0 || pos2 === 0)) {
    distAbsoluta = pos1 + pos2;
  }
  return distAbsoluta
}

function mouseHunt (dist1, dist2) {
  if (dist1 < dist2) {
    return 'cat1';
  } if (dist2 < dist1) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(arrayNumeros) {
  fizzbuzz(arrayNumeros);
  return arrayNumeros; 
}

function fizzbuzz(array2) {
  for (let index in array2) {
      if ((array2[index] % 3 === 0) && (array2[index] % 5 !== 0)) {
          array2[index] = 'fizz';
      } else if ((array2[index] % 5 === 0) && (array2[index] % 3 !== 0)) {
          array2[index] = 'buzz';
      } else if ((array2[index] % 3 === 0) && (array2[index] % 5 === 0)) {
          array2[index] = 'fizzBuzz';
      } else {  
          array2[index] = 'bug!';
      }
  }
  return array2;
}
// Not optimal. Ideia inicial era criar 1 função pra cada valor a ser substituído mas function bug(arrayNumeros) não estava transformando valores numericos em 'bug!'. if (array2[index] === Number) como critério não adiantou então resolvi passar um else = bug!. Pra fazer isso, tive que jogar tudo na mesma function (ou o 'else' iria considerar strings como válidos e transformar tudo em 'bug!')


// Desafio 9
function encode(string) {  
  let encoded = '';
  for(let index of string) {
  encoded += encode2(index);
}
return encoded;
}

function encode2(caractere) { 
  let novaString = ''  
  if (caractere == 'a') {
      novaString += 1;
  } else if (caractere == 'e') {
      novaString += 2;
  } else if (caractere == 'i') {
      novaString += 3;
  } else if (caractere == 'o') {
      novaString += 4;
  } else if (caractere == 'u') {
      novaString += 5;
  } else {
      novaString += caractere
  }
return novaString; // Retorna String encodada
}


function decode(string) {  
  let decoded = '';
  for(let index of string) {
      decoded += decode2(index);
}
return decoded;
}

function decode2(caractere) {              
  let novaString = '';
  if (caractere == 1) {
      novaString += 'a';
  } else if (caractere == 2) {
      novaString += 'e';
  } else if (caractere == 3) {
      novaString += 'i';
  } else if (caractere == 4) {
      novaString += 'o';
  } else if (caractere == 5) {
      novaString += 'u';
  } else {
      novaString += caractere
  }
return novaString; // Retorna String decodada
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
