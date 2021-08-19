// Desafio 10
function techList(tech, name) {
  ordemAlfabetica(tech);
  return listaObjetos(tech, name);
}

/* input: array de strings
output: o mesmo array de strings em ordem alfabética (Bubble Sort) */
function ordemAlfabetica(arrayPalavras) {
  for (let index = 1; index < arrayPalavras.length; index += 1) {
    for (let index2 = 0; index2 < arrayPalavras.length; index2 += 1) {
      if (arrayPalavras[index].toLowerCase() < arrayPalavras[index2].toLowerCase()) {
        let ordenador = arrayPalavras[index];
        arrayPalavras[index] = arrayPalavras[index2];
        arrayPalavras[index2] = ordenador;
      }
    }
  }
  return arrayPalavras;
}

/* input: (Array de strings, string)
output: Novo array de objetos compostos por {string[index], string} */
function listaObjetos(techs, teacher) {
  if (techs.length === 0) {
    return 'Vazio!';
  }
  let arrayObjetos = [];
  for (let value of techs) {
    let objeto = {
      tech: value,
      name: teacher,
    };
    arrayObjetos.push(objeto);
  }
  return arrayObjetos;

}

// Desafio 11
function generatePhoneNumber(arrayDigitos) {
  let status = validador(arrayDigitos);
  if (arrayDigitos.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (status === 'não é possível gerar um número de telefone com esses valores') {
    return status;
  } 
  return telephoneNumber(arrayDigitos);
}

/* Função que verifica se diretrizes para número de telefone foram cumpridas */
function validador(arrayAlgarismos) {
  for (let value of arrayAlgarismos) {
    if (value < 0 || value > 9 || numberCounter(arrayAlgarismos, arrayAlgarismos[value]) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

/* Função que conta frequência de um dígito dentro de um array */
function numberCounter(arrayNumbers, number) {
  let counter = 0;
  for (let value of arrayNumbers) {
    if (value === number) {
      counter += 1;
    }
  }
  return counter;
}  

/* Função geradora do número de telefone */
/* Bug 'aleatório': se usarmos for/in na L76, (apenas) um dos casos não passa porque ele não adiciona ') ' nem '-'. O index só é reconhecido como 2 e 7 se usarmos o operador '==' ao inves de '==='. Nos outros 4 casos, porém, ele adiciona as strings corretamente. Desse modo, preferimos usar for loop clássico */
function telephoneNumber(arrayDigitos) {
  let numeroTelefone = '(';
  for (let index = 0; index < 11; index += 1) {
    if (index === 2) {
      numeroTelefone += ') ';
    } if (index === 7) {
      numeroTelefone += '-';
    }
    numeroTelefone += arrayDigitos[index];
  }
  return numeroTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let checkA = sideCheck(lineA, lineB, lineC);
  let checkB = sideCheck(lineB, lineC, lineA);
  let checkC = sideCheck(lineC, lineA, lineB);
  if (checkA === true && checkB === true && checkC === true) {
    return true;
  }
  return false;

}

/* Checa se um lado é menor que a soma dos outros dois E maior que a diferença dos módulos dos outros dois lados */
function sideCheck (line1, line2, line3) {
  if (line1 < line2 + line3 && line1 > modulo(line2 - line3)) {
    return true;
  }
}

/* Módulo matemático */
function modulo(number) {
  if (number < 0) {
    return number * (-1);
  } if (number >= 0) {
    return number;
  }
}

// Desafio 13
function hydrate(stringBar) {
  let drinkCount = /\d+/g;
  let cupCount = stringBar.match(drinkCount);
  for (let index = 0; index < cupCount.length; index += 1) {
    cupCount[index] = cupCount[index] * 1;
  }
  let totalDrinks = 0;
  for (let index = 0; index < cupCount.length; index += 1) {
    totalDrinks += cupCount[index];
  }
  if (totalDrinks === 1) {
    return totalDrinks + ' copo de água';
  } if (totalDrinks > 1) {
    return totalDrinks + ' copos de água';
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
