function upperCase(element){    
    element.value = element.value.toString().toUpperCase();
}


function validateNA(e){    
    e.value = e.value.toString().toUpperCase();
    if(e.value == ""){
        e.value = "N/A";
    }
}

function replaceInvalidaCharacters(e){
    e.value = e.value.replace(".","");
}