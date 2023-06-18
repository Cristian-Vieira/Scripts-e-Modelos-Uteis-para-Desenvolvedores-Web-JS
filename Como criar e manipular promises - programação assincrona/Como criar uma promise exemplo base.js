// Como criar uma nova porimise
const fazerAlgoAssincrono = new Promise((resolve, reject) => {

    setTimeout(() => { // setTimeout() usado para simular o delay de uma requisição a uma API por exemplo
        const numeroAleatorio = parseInt(Math.random() * 100)
        resolve(numeroAleatorio)
    }, 3000);

})

fazerAlgoAssincrono.then((value) => { // Se der certo
     //...
    console.log(value) 
    return value + 10

}).then((value) => { // Podemos aninhar quantos then's forem necessarios
     //...
    console.log('Numero gerado + 10:')
    console.log(value);
  
}).catch((error) => {
     //...
    console.log(`Ocorreu o seguinte erro ${error}`) // Se der errado

}).finally(() => { // Idependente de sucesso ou erro
     //...
    console.log("Fim") 

})

console.log("Compilador vai passar por aqui antes de exibir o retorno da promise \n")  
console.log('O numero aleatorio gerado foi:');