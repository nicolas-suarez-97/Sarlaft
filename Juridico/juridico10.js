var form = document.getElementById("form-id");
var option = document.getElementById('option');

document.getElementById("add").addEventListener("click", function () {
    var anyo = document.getElementById("anyo").value;
    var ramo =  document.getElementById("ramo").value;
    var compañia = document.getElementById("compañia").value;
    var valor = document.getElementById("valor").value;
    var result = document.getElementById("resultado").value;
    
    
    if(anyo!="" && ramo!="" &&  compañia!="" && valor!="" && result!=""){
        console.log("add");
        option.value="add";
        console.log(option);
        form.submit();
    }else{
        alert("Parece que hay campos sin llenar!!");
    }
  
});
function del(id){
    document.getElementById("eliminarReg").value=id;    
    console.log("delete - "+document.getElementById("eliminarReg").value);
    option.value="delete";
    form.submit();
}