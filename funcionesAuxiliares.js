function upperCase(e,validateSpecial){    
    e.value = e.value.toString().toUpperCase();
    
    if(validateSpecial){
        replaceSpecialCharacters(e);
    }   
}

function validateNA(e){
    if(e.value == "NA" || e.value == "N/A" || e.value == "n/a" || e.value == "na"){
        e.value = "";
    }
}

function validateBlank(e){        
    if(e.value == ""){
        e.value = "N/A";
    }
}

function replaceSpecialCharacters(e){
    e.value = e.value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:´'",.<>\{\}\[\]\\\/0123456789]/gi).join(""); 
}

function replaceSpecialCharactersNumber(e){
    e.value = e.value.split(/[`~!@#$%^&*()_|+\-¿¡=?°¬;:'e",.<>\{\}\[\]\\\/]/gi).join(""); 
    e.value = e.value.split(" ").join("");
    
}

function valMinLength(e,num,noti){    
    if(e.value.length < num){        
        //alert("Por favor termine de diligenciar el campo. (Longitud mínima "+num+" caracteres)");
        e.style.borderColor = "red";
        document.getElementById(noti).style.display = "block";        
    }else{
        e.style.borderColor = "#cccccc";
        document.getElementById(noti).style.display = "none";
    }
}
function makeRequired(element){
    var e = document.getElementById(element);
    e.required = true;
    console.log(element + " Required");
}

function unMakeRequired(element){
    var e = document.getElementById(element);
    e.required = false;
    e.value = "";
    console.log(element + " Not Required");
}

function validateCero(form,...list){
    var submit = true;
    for(var l of list){
        var v = document.getElementById(l);
        if(v.value == 0){
            submit = false;
            v.style.borderColor = "red";
        }else{
            v.style.borderColor = "#cccccc";
        }
    }
    if(submit){
        document.getElementById(form).submit();
    }else{
        console.log("Valor invalido");
        window.scrollTo(0,0);
    }
}

function validateFields(form,...fields){    
    var submit = true;   
    var elem = ""; 
    for(var v of fields){
        var arr = v.split("-");
        var name = arr[0];
        var num = arr[1];
        var field = document.getElementById(name);        
        if(field.value.length < num){
            submit = false;            
            field.style.borderColor = "red";
            if(elem == ""){
                elem = field.getBoundingClientRect();
                console.log(elem);
            }
        }
    }
    if(submit){
        console.log("Enviar");
        document.getElementById(form).submit();
    }else{
        if(elem.top <0){
            window.scrollTo(0,-elem.top);
        }else{
            window.scrollTo(0,elem.top);
        }
    }
}