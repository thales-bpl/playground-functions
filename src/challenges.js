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

/* // Desafio 7
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
} */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = checkDist(mouse, cat1);
  let distCat2 = checkDist(mouse, cat2);
  return mouseHunt (distCat1, distCat2);
}

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
/* function fizzBuzz(arrayNumeros) {
  let novoArray = [];
  for (let number of arrayNumeros)
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
} */

function fizzBuzz(arrayN) {
  fizz(arrayN);
  buzz(arrayN);
  fizzbuzz(arrayN);
  bug(arrayN);
  return(arrayN); 
}

function fizz(array2) {
  for (let index in array2) {
    if ((array2[index] % 3 === 0) && (array2[index] % 5 !== 0)) {
      return array2[index] = 'fizz';
    }
  }  
}
function buzz(array2) {
  for (let index in array2) {
    if ((array2[index] % 5 === 0) && (array2[index] % 3 !== 0)) {
      return array2[index] = 'buzz';
    }
  }
}
function fizzbuzz(array2) {
  for (let index in array2) {
    if ((array2[index] % 3 === 0) && (array2[index] % 5 === 0)) {
      return array2[index] = 'fizzBuzz';
    }
  }
}
function bug(array2) {
  for (let index in array2) {
    if ((array2[index] % 5 !== 0) && (array2[index] % 3 !== 0)) {
      return array2[index] = 'bug!';
    }
  }
}




// Desafio 9
function encode(string) {
  for(let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      string[index] = 1;
    } else if (string[index] === 'e') {
      string[index] = 2;
    } else if (string[index] === 'i') {
      string[index] = 3;
    } else if (string[index] === 'o') {
      string[index] = 4;
    } else if (string[index] === 'u') {
      string[index] = 5;
    }
  }
  return string;
}


function decode(string) {
  for(let numero of string) {
    if (numero === 1) {
      numero = 'a';
    } else if (numero === 2) {
      numero = 'e';
    } else if (numero === 3) {
      numero = 'i';
    } else if (numero === 4) {
      numero = 'o';
    } else if (numero === 5) {
      numero = 'u';
    }
  }
  return string;
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
