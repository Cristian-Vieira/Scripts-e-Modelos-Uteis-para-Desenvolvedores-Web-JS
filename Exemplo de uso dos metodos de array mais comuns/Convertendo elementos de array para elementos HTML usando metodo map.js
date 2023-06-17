const myArray = [
    {
        nome: "Água",
        number: "1"
    },
    {
        nome: "Terra",
        number: "2"
    },
    {
        nome: "Fogo",
        number: "3"
    },
    {
        nome: "Ar",
        number: "4"
    }
]

const ArrayConvertidoHTML = myArray.map( x => `<p> ${x.number} - ${x.nome.toUpperCase()} </p>`).join(" ")

console.log(ArrayConvertidoHTML)

/* 

Retorno no console:
<p> 1 - ÁGUA </p> <p> 2 - TERRA </p> <p> 3 - FOGO </p> <p> 4 - AR </p>

*/