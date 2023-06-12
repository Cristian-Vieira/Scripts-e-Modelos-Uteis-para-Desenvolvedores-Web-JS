// Funções exportadas para escopo global usando sintaxe de desestruturação 
const { gets, print } = require('./Exemplo de como exportar funções.js');

print(gets());
print(''); //Pular linha


//--------------//


const objetoQualquer = {
    frase1: `Teste, `,
    frase2: `deu certo?`
};

//Como atribuir as funções importadas como metodos para um objeto
objetoQualquer.print = print

objetoQualquer.print(objetoQualquer.frase1 + objetoQualquer.frase2)

print('')//Pular linha

objetoQualquer.print(`10 + 10 = ${10 + 10}`) // Imprime number 2 no console

/*

O que sera exibido no console:

[Running] node "c:\Exemplo de como importar funções.js"
Da pra fazer praticamente tudo com JS?, SIM !! <3

Teste, deu certo?

10 + 10 = 20

*/ 