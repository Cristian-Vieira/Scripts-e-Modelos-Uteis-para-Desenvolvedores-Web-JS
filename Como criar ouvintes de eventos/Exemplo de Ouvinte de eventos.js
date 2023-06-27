// Exemplo de sintaxe
document.getElementById("ElementoQueQueremosOuvir").addEventListener(evento, função(), useCapture); 
/* parametro 'useCapture' é opcional e é usado para definir como sera a propagação de eventos por Capture ou Bubbling
A Capture desce pelo DOM.
A Bubbling sobe pelo DOM.
O valor deve ser um boolean por padrão é 'false', o que significa que a propagação de Bubbling é usada caso o paramtro seja omitido; 
*/


// Exemplo pratico
document.getElementById("botão1").addEventListener(click, abrirFormulario); // ATENÇÃO: Não devemos usar o prefixo "on" nos eventos, use "click" em vez de "onclick".

function abrirFormulario(){
    document.getElementById('formulario1').style.display = "block"
}
// Ao clicar no elemento com id 'botão1' sera executada a fnção abrir formulario