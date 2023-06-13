//Objetos a serem mesclados
const obj1 = {
    prop1: `String`,
    x: 42
};
const obj2 = {
    prop2: `Outra string`,
    y: 5
};

const objetos_mesclados = {};

Object.assign(objetos_mesclados, obj1, obj2) // O primeiro parametro é o objeto para onde irão as propriedades do seguintes
// OBS: Caso as propriedes tenham o mesmo nome serão mescladas na seguinte ordem as propriedades do primeiro parametro sempre serão substituido pelos seguintes e as que não tiverem mesmo nome serão concatenadas

console.log(objetos_mesclados); // Retorna: { prop1: 'String', x: 42, prop2: 'Outra string', y: 5 }

// É possivel fazer a mesma coisa usando o spread operator
let mesclados_spread = { ...obj1, ...obj2 }

console.log(mesclados_spread); // Retorna: { prop1: 'String', x: 42, prop2: 'Outra string', y: 5 }

// OBS: EM ARRAYS NÃO É POSSIVEL MESCLAR SOMENTE CONCATENAR
// Arrays a serem concatenadas
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const ArraysCombinadas = [...arr1, ...arr2];
console.log(ArraysCombinadas); // Retorna: [1, 2, 3, 4, 5, 6]

// Usar o operador spread desta forma para concatenar arrays cria uma copia superficial dos elementos das arrays originais, o que funciona bem para tipos primitivos de dados, porem caso os sejam objetos ou arrays aninhadas, seria melhor usar metodos mais avançados como o 'Array.map()' 