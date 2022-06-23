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

function guardarDados(){
    if (localStorage.cont) {
        localStorage.cont = Number(localStorage.cont)+1;
     } else {
        localStorage.cont = 1;
     }
     
     dados = document.getElementById('nome').value + '; ' + document.getElementById('cpf').value + '; ' + document.getElementById('nasc').value 
     + '; ' + document.getElementById('sexo').value
     + '; ' + document.getElementById('senha').value
     + '; ' + document.getElementById('end').value
     + '; ' + document.getElementById('num').value
     + '; ' + document.getElementById('compl').value
     + '; ' + document.getElementById('cidade').value
     + '; ' + document.getElementById('mae').value
     + '; ' + document.getElementById('login').value
     + '; ' + document.getElementById('celular').value
     + '; ' + document.getElementById('fixo').value;
     localStorage.setItem("dados_"+localStorage.cont,dados);
  }


function redirecionar(){
    window.location.replace("2-login.html");

}

function validarLogin() {
    validarNome();
    validarCPF();
    validarCel();
    validarTel();
    confirmarSenha();
    guardarDados();
    redirecionar();
    return true;
}
