// Criando nova porimise
const promiseNumeroAleatorio = new Promise((resolve, reject) => {

    setTimeout(() => { // setTimeout() usado para simular o delay de uma requisição a uma API por exemplo
        const numeroAleatorio = parseInt(Math.random() * 100)
        resolve(numeroAleatorio)
    }, 3000);

})

 // Criando função assincrona para tratar o retorno da promisse, ela aguardará até a promisse ser resolvida 
async function gerarNumeroAleatorio() { 
    try { // Caso a promisse retone sucesso
        
        let numeroAleatorio = await promiseNumeroAleatorio
        console.log(numeroAleatorio);
        numeroAleatorio += 10
        console.log('Numero gerado + 10:')
        console.log(numeroAleatorio);

    } catch (error) { // Caso a promisse retorne erro 
        //...
        console.log(`Ocorreu o seguinte erro ${error}`) // Se der errado

    } finally { // Independente do sucesso ou erro da promise
         //...
        console.log("\nFim")
    }

}
console.log("Compilador vai passar por aqui antes de exibir o retorno da promise \n")
console.log('O numero aleatorio gerado foi:');
gerarNumeroAleatorio()