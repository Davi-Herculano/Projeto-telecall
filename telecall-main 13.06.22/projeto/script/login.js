function validarDados() {
  if (document.getElementById("fname").value == "" || document.getElementById("fname").value == null){
    alert("Login e/ou senha inválidos.");
    document.getElementById("txtNome").focus();
    return false;
  }

  if (document.getElementById("fsenha").value == "" || document.getElementById("fsenha").value == null){
    alert("Login e/ou senha inválidos.");
    document.getElementById("fsenha").focus();
    return false;
  }
  return true;
}
