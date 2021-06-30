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
  let maiorNumero = Math.max.apply(null, arrayNumeros);
  let contMaiorNumero = 0;
  for (index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] === maiorNumero) {
      contMaiorNumero += 1;
    }
  }
  return contMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat2 < distCat1) {
    return 'cat2';
  } if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(stringNumeros) {
  let novoArray = [];
  for (let number of stringNumeros)
    if (number % 3 === 0 && number % 5 !== 0) {
      novoArray.push('fizz');
    } else if (number % 5 === 0 && number % 3 !== 0) {
      novoArray.push('buzz');
    } else if (number % 3 === 0 && number % 5 === 0) {
      novoArray.push('fizzBuzz');
    } else if (number % 3 !== 0 && number % 5 !== 0) {
      novoArray.push('bug!');
    }
  return(novoArray);
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
