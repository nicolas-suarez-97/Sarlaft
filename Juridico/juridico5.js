var form = document.getElementById("form-id");
var option = document.getElementById('option');

document.getElementById("add").addEventListener("click", function () {
    console.log("add");
    option.value="add";
    console.log(option);
    form.submit();
  
});

document.getElementById("delete").addEventListener("click", function () {    
    console.log("delete");
    option.value="delete";
    form.submit();
  });