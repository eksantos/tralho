
//JANELA MODAL

// click dispara
var btn = document.getElementById("openModal1");
var btn2 = document.getElementById("openModal2");
var modal = document.getElementById('janelaModal');
var fechar = document.getElementsByClassName("close")[0];

btn.onclick = function() {modal.style.display = "block";}
btn2.onclick = function() {modal.style.display = "block";}

fechar.onclick = function() {modal.style.display = "none";}

window.onclick = function() {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*MENU FIXO*/
window.onscroll = function() {colarMenu()};

var menu = document.getElementById("main_menu");
var colar = menu.offsetTop;

function colarMenu() {
  if (window.pageYOffset >= colar) {
    menu.classList.add("colar")
  } else {
    menu.classList.remove("colar");
  }
}


//VALIDAR FORMULARIO

function validarCampos(){
    
    if(document.forms.form.name.value == "" || document.forms.form.name.value <= 2){
        alert("Preencha corretamente o campo nome!");
        document.forms.form.name.focus();
        return false;
    }

    if(document.forms.form.email.value == "" || document.forms.form.email.value.indexOf("@") == -1 || document.forms.form.email.value.indexOf(".") == -1){
        alert("Preencha corretamente o campo email!");
        document.forms.form.email.focus();
        return false;
    }

    if(document.forms.form.description.value == "" ){
        alert("Preencha corretamente o campo Mensagem!");
        document.forms.form.description.focus();
        return false;
    }
    return true;
}

function validar(){
    alert( validarCampos() ? "Sucesso na candidatura da vaga!" : "Erro no preenchimento do formulário!");
}

