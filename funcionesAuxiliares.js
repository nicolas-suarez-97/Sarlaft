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

function valMinLength(e,num){    
    if(e.value.length < num){        
        alert("Por favor termine de diligenciar el campo. (Longitud mínima "+num+" caracteres)");
        e.style.borderColor = "red";
    }else{
        e.style.borderColor = "#cccccc";
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
