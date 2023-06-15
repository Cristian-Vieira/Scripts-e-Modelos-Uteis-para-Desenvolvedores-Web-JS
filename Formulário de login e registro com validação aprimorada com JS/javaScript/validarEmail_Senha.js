
function validarFormRegistro() {
      
    // Pegando elemmentos do DOM
   const EMAIL = document.querySelector('#inputEmail').value;
   const SENHA = document.querySelector('#inputSenha1').value;
   const REPETIR_SENHA = document.querySelector('#repetirSenha').value;

    // Expressão regular para validar email
   const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Condicional que verifica se o email é válido
   if (!REGEX_EMAIL.test(EMAIL)) {
     alert('E-mail inválido. Digite um e-mail válido, como exemplo: myEmail@mail.com');
     return false;
   }

    // Condicional que verifica se as senhas são iguais
   if (SENHA !== REPETIR_SENHA) {
     alert('As senhas não coincidem.');
     return false;
   }

    // Condicional que verifica se as senhas têm pelo menos 8 caracteres
   if (SENHA.length < 8) {
     alert('A senha deve ter pelo menos 8 caracteres.');
     return false;
   }

    // Tudo ok?, se sim envia o formulario
   alert("Cadastro efetuado com sucesso")
   return true;

 }