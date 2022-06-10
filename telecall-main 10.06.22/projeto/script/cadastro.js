/** function validarSenha() {
    var senha = document.getElementById("senha");
    if (senha == null || senha == ""){  
        alert("Senha não pode ficar em branco");  
        return false;  
      } else if (password.length<8){
        alert("Senha deve ter no minimo 8 caracteres.");  
        return false;  
      }
}

function validarTelefone() {
    var telefone = document.getElementById("telefone");
    var telpadrao = /^(?:()(?:+)[0-9]{2}(?:))\s?[0-9]{2}\s?[0-9]{4,5}\s?[0-9]{4}$/  
    if (telpadrao.test(telefone)) {
        return true;
    } else {
        alert("Telefone está errado!")
        return false;
    }
 
    PADRÃO DE TELEFONE E CELULAR =  /^(?:()(?:+)[0-9]{2}(?:))\s?[0-9]{2}\s?[0-9]{4,5}\s?[0-9]{4}$/ 

} */

function validarLogin() {
    if (document.getElementById("nome").value == null || document.getElementById("nome").value == ""){
        alert("Nome não pode ficar em branco");
        document.getElementById("nome").focus;
        return false;
    }

    if (document.getElementById("nasc").value == null || document.getElementById("nasc").value == ""){
        alert("Data de nascimento não pode ficar em branco");
        document.getElementById("nasc").focus;
        return false;
    }

    if (document.getElementById("mae").value == null || document.getElementById("mae").value == ""){
        alert("Nome da mãe não pode ficar em branco");
        document.getElementById("mae").focus;
        return false;
    }

    if (document.getElementById("cpf").value == null || document.getElementById("cpf").value == ""){
        alert("CPF não pode ficar em branco");
        document.getElementById("cpf").focus;
        return false;
    }

    if (document.getElementById("senha").value == null || document.getElementById("senha").value == ""){
        alert("Senha não pode ficar em branco");
        document.getElementById("senha").focus;
        return false;
    }
   
    /* Nesse if, fazer com que "confirmar senha" compare os dois campos de senha 
    if (document.getElementById("senhac").value != document.getElementById("senha").value){
        alert("A senha não está igual.");
        document.getElementById("senhac").focus;
        return false; 
    }*/
    return true;
}
