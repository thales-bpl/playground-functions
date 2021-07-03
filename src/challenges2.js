// Desafio 10
function techList(tech, name) {
  ordemAlfabetica(tech);
  return listaObjetos(tech, name);
}

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
// input: array de strings 
// output: o mesmo array de strings em ordem alfabética

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
// input: (Array de strings, string)
// output: Novo array de objetos compostos por {string[index], string} 



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
