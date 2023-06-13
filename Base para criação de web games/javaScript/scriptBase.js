window.onload = () => {
    const AREA_CANVAS = document.getElementById("canvas"); // obtem o elementoHTML id 'canvas' para a variavel 'AREA_CANVAS'
    const METODOS_DESENHO = AREA_CANVAS.getContext('2d'); // obtem os metodos de desenho de contexto em 2d para a a variavel 'METODOS_DESENHO'

    let t = Date.now() // Variavel para manipular o tempo

    window.requestAnimationFrame(função_de_desenho) // Start no desenho 

    function função_de_desenho() {
         // Manipuladores de tempo
        let timePassed = (Date.now() - t) / 1000; // variavel manipuladora do tempo passado durante uma volta do loop
        t = Date.now(); // redefine a variavel 't' para o proximo loop
        let fps = Math.round(1 / timePassed); // Variavel que recebe o calculo do fps

        METODOS_DESENHO.clearRect(0, 0, 600, 400); // limpa a tela/canvas inteira coforme os valores definidos no HTML width="600" height="400"

         // Bloco que exibe o FPS na tela
        METODOS_DESENHO.font = '15px Arial'; 
        METODOS_DESENHO.fillStyle = 'white';
        METODOS_DESENHO.fillText("FPS: " + fps, 10, 30); // Imprime o texto nas cordenadas definidas eixo x: 10, eixo y: 30

        METODOS_DESENHO.beginPath(); // indica inicio do desenho de outro elemento

            /* Metodos de desenho */

        METODOS_DESENHO.beginPath();// indica inicio do desenho de outro elemento

            /* Metodos de desenho */

        window.requestAnimationFrame(função_de_desenho); //chama a função para reiniciar o loop
    }
}

/* 

Você tera metodos de desenho e variaveis para conduzir as alterações nos valores das posições de onde serão desenhados as formas, imagens e etc.
Para criar um jogo funcional, pode consultar meu repositório do "jogo do coletor de moedas" que está disponível em https://github.com/Cristian-Vieira/Coin-Collecting-Game

Também pode consultar referencias em:
    https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D
    https://www.w3schools.com/js/js_graphics_canvas.asp
    https://www.sololearn.com/learning/1175

  */