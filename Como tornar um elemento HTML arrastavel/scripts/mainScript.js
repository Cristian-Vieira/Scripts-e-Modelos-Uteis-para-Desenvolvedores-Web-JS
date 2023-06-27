 // Chamando função main com elemento que queremos tornar arrastavel como parametro
 mainFunction(document.getElementById("conteudo"))

 // Função que vai tornar o elemento arrastavel
function mainFunction(elemento){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

     // Pegamos o header do elemento que queremos tornara arrastavel e usamos ele como base para movermos o elemento
    document.getElementById('header').onmousedown = clicar_e_arrastar

     // Função que sera chamada quando o usuario clicar e segurar o header
    function clicar_e_arrastar(elemt){
         // Pega o evento de clique ou o evento janela
        elemt = elemt || window.event
         // Previne o comportamento padrão do clique
        elemt.preventDefault()
         // Pega a posição inicial do cursor do mouse
        pos3 = elemt.clientX
        pos4 = elemt.clientY
         // Call Função para parrar de arrastar o elemento quando o mouse for solto
        document.onmouseup = parar_de_arrastar
         // Call Função que muda a posição do elemento conforme o usuario move o mouse
        document.onmousemove = arrastarElemento
    }

     // Função que muda a posição do elemento conforme o usuario move o mouse
    function arrastarElemento(elemt){
         // Pega o evento de movimento
        elemt = elemt || window.elemt
         // Previne o comportamento padrão
        elemt.preventDefault()
         // Calcula a nova posição do cursor do mouse
        pos1 = pos3 - elemt.clientX;
        pos2 = pos4 - elemt.clientY;
        pos3 = elemt.clientX;
        pos4 = elemt.clientY;
         // Define a nova posição do elemento
        elemento.style.top = (elemento.offsetTop - pos2) + "px";
        elemento.style.left = (elemento.offsetLeft - pos1) + "px";
    }
     // Função para parrar de arrastar o elemento quando o mouse for solto
    function parar_de_arrastar(){
     // Interrompe o arrastar do DIV quando o botão do mouse é solto
    document.onmouseup = null;
    document.onmousemove = null;
    }
}