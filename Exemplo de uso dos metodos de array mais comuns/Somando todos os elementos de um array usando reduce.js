const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const SOMA = myArray.reduce((anterior, atual) => {

    console.log(`${anterior} + ${atual} = ${anterior + atual}`);
    
    return anterior + atual;
});

console.log(`Soma de todos os elementos da myArray: ${SOMA}`);

/*

Retorno no console:
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15 + 6 = 21
21 + 7 = 28
28 + 8 = 36
36 + 9 = 45
45 + 10 = 55
Soma de todos os elementos da myArray: 55

*/