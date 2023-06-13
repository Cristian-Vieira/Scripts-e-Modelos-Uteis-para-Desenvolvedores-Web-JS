// Criando função geradora  
function* gerador_valores() { // O " * " depois da instrução "function" representa que estamos criando uma função geradora
    let index = 1; // Valor inicial a ser gerado
    while (index <= 5) // O valor '5' representa o limite até onde o gerador vai e reiniciara em seguida, caso alteremos esta linha para "while (true)" o gerador irá gerar numeros infinitamente
        yield index++;// A instrução 'yield' faz com que a função pare a sua execução temporariamente, retornando um valor parcial, retomando a contagem de onde parou na proxima vez que for chamada
};
const gerador = gerador_valores();

// Toda vez que a função for chamada gera o valor seguinte
console.log(gerador.next().value); // 1
console.log(gerador.next().value); // 2
console.log(gerador.next().value); // 3


// Funções geradoras também podem gerar outros tipos de dados alem de numeros, como por exemplo strings, objetos, booleanos ou até estruturas de dados mais complexas.
//Exemplo com strings:

function* gerador_strings() {
    yield "Água";
    yield "Terra";
    yield "Fogo";
    yield "Ar";
}

const geradorString = gerador_strings();

console.log(geradorString.next().value); // "Água"
console.log(geradorString.next().value); // "Terra"
console.log(geradorString.next().value); // "Fogo"
console.log(geradorString.next().value); // "Ar"

// Após o ultimo elemento a função retornará uma vez 'undefined' e irá reiniciar do primeiro elemento