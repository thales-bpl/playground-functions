// Desafio 10
function techList(tech, name) {
  ordemAlfabetica(tech);
  return listaObjetos(tech, name);
}

// input: array de strings
// output: o mesmo array de strings em ordem alfabética
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

// input: (Array de strings, string)
// output: Novo array de objetos compostos por {string[index], string} 
function listaObjetos (techs, teacher) {
  if (techs.length === 0) {
    return 'Vazio!';
  } else {
    let arrayObjetos = []
    for (let value of techs) {
      let objeto = {
        tech: value,
        name: teacher,
      }
      arrayObjetos.push(objeto);
    }
    return arrayObjetos;
  }
}


// Desafio 11
function generatePhoneNumber(arrayDigitos) {
  validador(arrayDigitos);
  if (validador(arrayDigitos) === 'Array com tamanho incorreto.' || validador(arrayDigitos) === 'não é possível gerar um número de telefone com esses valores') {
    return validador(arrayDigitos); 
  } else {
    return telephoneNumber(arrayDigitos);
  }
}

// Função não está funcionando adequadamente. Nunca retorna ('não é possível gerar um número de telefone com esses valores'). Não está reconhecendo condição mesmo quando função numberCounter > 2 quando colocamos um }else{ ao fim da função.

// Função que verifica se diretrizes para número de telefone foram cumpridas
function validador(arrayAlgarismos) {
  if (arrayAlgarismos.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index in arrayAlgarismos) {
      if (arrayAlgarismos[index] < 0 || arrayAlgarismos[index] > 9 || numberCounter(arrayAlgarismos, arrayAlgarismos[index]) > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
}


// Função que conta frequência de um dígito dentro de um array
function numberCounter(arrayNumbers, number) {
  let counter = 0;
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === number) {
      counter += 1;
    }
  }
  return counter;
} 

// Função geradora do número de telefone
function telephoneNumber (arrayDigitos) {
  let numeroTelefone = [];
  numeroTelefone += '(';
  for (let index = 0; index < 2; index += 1) {
    numeroTelefone += arrayDigitos[index];
  }
  numeroTelefone += ') ';
  for (let index2 = 2; index2 < 7; index2 += 1) {
    numeroTelefone += arrayDigitos[index2];
  }
  numeroTelefone += '-';
  for (let index3 = 7; index3 < 11; index3 += 1) {
    numeroTelefone += arrayDigitos[index3];
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
  } else {
      return false;
  }
}

// Checa se um lado é menor que a soma dos outros dois E maior que a diferença dos módulos dos outros dois lados
function sideCheck (line1, line2, line3) {
    if (line1 < line2 + line3 && line1 > modulo(line2 - line3)) {
        return true;
    } else {
        return false;
    }    
}

// Módulo matemático
function modulo(number) {
  if (number < 0) {
      return number * (-1)
  } else if (number >= 0) {
      return number
  }
}


// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
