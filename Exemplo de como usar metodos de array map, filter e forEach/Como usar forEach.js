const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Metodo forEach() pode iterar todos os elementos da array, recebendo da array os parametros: valor do elemento, indice e array completo
myArray.forEach((elementValue, indice, fullArray) => { 
    console.log(`Indice [${indice}]: valor do elemento: ${elementValue} `);

     // Condicional para imprimir array completa quando chegar no ultimo elemento da array
    if (indice === myArray.length - 1) {
        console.log(`Array completa: [${fullArray}]`);
    }

})

/*

Retorno no console:
Indice [0]: valor do elemento: 0 
Indice [1]: valor do elemento: 1 
Indice [2]: valor do elemento: 2 
Indice [3]: valor do elemento: 3 
Indice [4]: valor do elemento: 4 
Indice [5]: valor do elemento: 5 
Indice [6]: valor do elemento: 6 
Indice [7]: valor do elemento: 7 
Indice [8]: valor do elemento: 8 
Indice [9]: valor do elemento: 9 
Indice [10]: valor do elemento: 10 
Array completa: [0,1,2,3,4,5,6,7,8,9,10]

*/