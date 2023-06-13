//Neste exemplo usamos o spread operator para espalhar todos os parâmetros recebidos, com isso a função poderá receber infinitos de parâmetros

function soma(...n) {
    let soma = 0;
    for (let i of n) {
        soma += i
    }
    return `O resultado da soma de todos os paramentros é: ${soma}`

};

//Podemos passar parâmetros infinitos que a função funcionará corretamente
console.log( soma(10, 15, 25, 50) ); 

