function direccion(select, input, dir){
    var fullDir = document.getElementById(dir);
    fullDir.innerHTML = "";    
    for(var i=1; i<=5; i++){
        document.getElementById(input+i).value = document.getElementById(input+i).value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:'",.<>\{\}\[\]\\\/]/gi).join(""); 
        fullDir.innerHTML += document.getElementById(select+i).value + " " + document.getElementById(input+i).value.toString().toUpperCase() + " ";        //.replace("-"," ")
    }
    //fullDir.innerHTML = fullDir.innerHTML.split("-").join(" ");//.replaceAll("-"," ");
    
}

function guardarDir( cancel, fullD, dir){
    var fullDir = document.getElementById(fullD);
    var dirResidencia = document.getElementById(dir);
    dirResidencia.value = fullDir.innerHTML;
    document.getElementById(cancel).click();
}

function validateFields(form,...fields){    
    var submit = true;
    var pending = [];
    for(var v of fields){
        var arr = v.split("-");
        var name = arr[0];
        var num = arr[1];
        var field = document.getElementById(name);        
        if(field.value.length < num){
            submit = false;
            pending.push(name);
        }
    }
    if(submit){
        console.log("Enviar");
        document.getElementById(form).submit();
    }
}