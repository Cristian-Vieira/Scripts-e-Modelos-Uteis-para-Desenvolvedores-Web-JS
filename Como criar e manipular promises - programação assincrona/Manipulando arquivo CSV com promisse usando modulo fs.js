// Usando promise para manipular arquivos
const fs = require('fs') // Modulo de leitura de arquivos
const path = require('path') // Modulo para manipular arquivos e diretórios

const filePath = path.resolve(__dirname, 'exemploListaTarefas.csv')  // Caminho para o arquivo

async function buscarArquivo() {

    try { // Caso de sucesso da promise

        const arquivo = await fs.promises.readFile(filePath)  // Criando promise para ler o arquivo
        const array = arquivo.toString("utf-8").replace(/true/g, "Feita").replace(/false/g, "Não feita").split(",") // 'toString' Converte o arquivo para o formato utf-8, 'replace' substituir booleans para instruções descritivas e 'split' para converter arquivo para uma array serando elementos por ','
        const newArr = createNewArr() // função para criar uma nova array

        function createNewArr() {
            //cada elemento da 'array', unimos em um elemento da 'newArr'
            let index = 0
            const newArr = []
            for (let i = 0; i < array.length - 1; i += 2) {
                let element = array[i]
                let element2 = array[i + 1]
                newArr[index] = element + " >" + element2
                index++
            }
            return newArr
        }
        // Exibimos os elementos no console um em cada linha
        for (const elementos of newArr) {
            console.log(elementos)
        }


    } catch (error) { // caso a promise retorne um erro
        console.log("Ocorreu um erro", error);

    } finally {
        // Independente do sucesso ou erro da promise
        //...
    }

}
buscarArquivo()
console.log("\nLista de tarefas:\n")


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