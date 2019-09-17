var form = document.getElementById("search");
var option = document.getElementById("option");
var tabla = document.getElementById("tabla");
var lista = document.getElementById("lista");
var filters = document.getElementById("filters");


function submit(id){
    alert(id);
}

function buscar(action){    
    if(action == "all"){
        option.value = "all";
    }
    form.submit();
}

function tablaVisible(){
    tabla.style.display = 'block';
    lista.style.display = 'none';
    filters.style.display = 'none';
}

function listaVisible(){
    tabla.style.display = 'none';
    lista.style.display = 'block';
    filters.style.display = 'block';
}