function validarCel(){
    let telvalue = document.getElementById("celular").value;
    let re = /^(?:\()(?:\+)[0-9]{2}(?:\))\s?[0-9]{2}(\s?|\-)[0-9]{5}(\s?|\-)[0-9]{4}$/;
    if (! re.test(telvalue)){
        alert('Número de celular invalido.')
        return false;
    }
    return true;
}

function validarNome(){
    if (document.getElementById("nome").value.length < 15 || document.getElementById("nome").value.length > 60){
        alert("Nome foi digitado incorretamente.");
        document.getElementById("nome").focus;
        myFunction();
        return false;
        
    }
    return true;
}

function validarTel(){
    let telvalue = document.getElementById("fixo").value;
    let re = /^(?:\()(?:\+)[0-9]{2}(?:\))\s?[0-9]{2}(\s?|\-)[0-9]{4}(\s?|\-)[0-9]{4}$/;
    if (! re.test(telvalue)){
        alert('Número de telefone invalido.')
        return false;
    }
    return true;
}


function validarCPF(){
    let cpfvalue = document.getElementById("cpf").value;
    let re = /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
    if (! re.test(cpfvalue)) {
        alert('CPF inválido.')
        return false;
    } 
    return true;
}

function confirmarSenha(){
    var senha = document.getElementById("senha").value, 
    senhac = document.getElementById("senha1").value;
    if (senha != senhac) {
        alert('Senha não está igual.')
        return false;
    }
    return true;
    
}

function validarLogin() {
    validarNome();
    validarCPF();
    validarCel();
    validarTel();
    confirmarSenha();
    return true;
}
