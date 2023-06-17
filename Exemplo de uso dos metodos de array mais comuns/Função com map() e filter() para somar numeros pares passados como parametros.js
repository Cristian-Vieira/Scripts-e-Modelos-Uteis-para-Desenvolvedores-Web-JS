//Função criada para somar e retornar somente os numeros pares passados como parâmetros 
function somarPares(...nums) {
    let sum = 0; //Variavel para armazenar o valor da soma
  
    let pares = nums.filter(x => x % 2 == 0); // Metodo filter testa os elementos usando a condição (x % 2 == 0), atribuido a nova array somente os que passam no teste
    pares.map(numsFiltrados => sum += numsFiltrados); // Metodo map() pega todos os elementos da array "pares" e soma com a variavel "sum"
  
    /*
    As 2 linhas a cima poderiam ser simplificadas para:
    nums.filter(x => x % 2 == 0).map(numsFiltrados => sum += numsFiltrados)
    */
  
    return `A soma dos numeros pares ${pares} é ${sum}`; // Retornamos a array pares e a soma dos elementos dela
  };
  
  console.log(somarPares(1, 2, 3, 4, 5, 6)); // A soma dos numeros pares 2,4,6 é 12