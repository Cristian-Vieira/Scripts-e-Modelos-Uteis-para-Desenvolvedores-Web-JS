// Criamos a class que no exemplo pode ser usada para criar objetos "Animais"
class Animal {

    constructor(nome, tipo, peso, idade) { // A função construtora cria as propriedades dos objetos com base nos parametros passados
        this.nome = nome
        this.tipo = tipo
        this.peso = peso + "kg"
        this.idade = idade + " anos"
         //...
    }
     // A class possui um metodo que apresenta o animal criado
    apresentar_se() {
        console.log(`Ola eu me chamo ${this.nome}, sou um ${this.tipo} e tenho ${this.idade}`)
    }
     //...
}

// Utilizamos as class para criar um objeto "Gato" 
const gato = new Animal("felix", "felino", 5, 15)

console.log(gato); // Animal { nome: 'felix', tipo: 'felino', peso: '5kg', idade: '15 anos' }
gato.apresentar_se(); // Retorna no console: "Ola eu me chamo felix, sou um felino e tenho 15 anos"
