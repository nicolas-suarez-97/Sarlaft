var form = document.getElementById("form-id");
var option = document.getElementById('option');

document.getElementById("add").addEventListener("click", function () {
    console.log("add");
    option.value="add";
    console.log(option);
    form.submit();
  
});
function del(id){
    document.getElementById("eliminarReg").value=id;    
    console.log("delete - "+document.getElementById("eliminarReg").value);
    option.value="delete";
    form.submit();
}
