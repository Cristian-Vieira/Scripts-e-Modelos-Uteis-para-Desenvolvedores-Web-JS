# Base Para Criação de Web Games
 #### Este é um código HTML básico para uma estrutura de jogo simples. Ele contém um canvas centralizado na tela onde é possível desenhar elementos usando o contexto 2D.
 
## Pré-requisitos:
Antes de executar este código, certifique-se de ter um navegador compatível com a tag **<canvas> do HTML5**.

## Materiais de apoio e referencias:
- [MDN Web Docs - CANVAS](https://developer.mozilla.org/pt-BR/docs/Web/API/CanvasRenderingContext2D)
- [w3schools - HTML CANVAS](https://www.w3schools.com/js/js_graphics_canvas.asp)
- [Sololearn - Game Development with JS](https://www.sololearn.com/learning/1175) 

## Notas:
- O JavaScript contido no **scriptBase** é responsável por obter o contexto 2D do canvas, limpar a tela a cada quadro, exibir o FPS (Frames Por Segundo) e chamar a função de desenho a cada quadro usando o requestAnimationFrame.
- A função de desenho é chamada recursivamente para criar um loop contínuo, onde os elementos do jogo são desenhados a cada quadro.
- Você deve personalizar o código para adicionar lógica de jogo e desenhar elementos conforme necessário. Você pode usar os métodos de desenho fornecidos pelo contexto 2D para criar gráficos, animações e interações.
- Lembre-se de ajustar as dimensões do canvas (largura e altura) no elemento <canvas> e no método clearRect de acordo com suas necessidades.
- Este é apenas um exemplo básico de estrutura para um jogo. A complexidade e recursos adicionais dependem dos requisitos específicos do seu projeto.
- Sinta-se à vontade para usar este repositorio como quiser e contribuir com melhorias para este repositorio, abrindo issues ou pull requests.

- Este código é fornecido sob a licença MIT.