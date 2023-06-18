// Usando promise para manipular arquivos
const fs = require('fs'); // Modulo de leitura de arquivos
const path = require('path')

const filePath = path.resolve(__dirname, 'exemploListaTarefas.csv')
const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath);

promessaDaLeituraDoArquivo.then((arquivo) => {

    return arquivo.toString("utf-8").replace(/true/g, "Feita").replace(/false/g, "Não feita");

}).then((arquivo) => {

    return arquivo.split(";");

}).then((array) => {
    const newArr = [];
    let index = 0
    for (let i = 0; i < array.length - 1; i += 2) {
        let element = array[i];
        let element2 = array[i + 1];
        newArr[index] = element + " >" + element2

        index++

    }
    return newArr
}).then((array) => {
    console.log("Lista de tarefas: \n")
    for (const item of array) {
         console.log(item)
    }

});

/*
Retorno no console:

Lista de tarefas: 

Ir ao mercado > Feita
Ir a farmacia > Não feita
Ir ao açougue > Feita
Lavar louça > Feita
Limpar o chão > Não feita
Praticar JS > Feita

*/