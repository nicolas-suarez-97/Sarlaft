var authNo = document.getElementById("autNo");
var authSi = document.getElementById("autSi");
var lectNo = document.getElementById("lecturaNo");
var lectSi = document.getElementById("lecturaSi");
var button = document.getElementById("submitButton");

button.disabled = validateButton();
authNo.addEventListener("click",function(){        
    button.disabled = validateButton();
});

authSi.addEventListener("click",function(){        
    button.disabled = validateButton();    
});

lectNo.addEventListener("click",function(){        
    button.disabled = validateButton();    
});

lectSi.addEventListener("click",function(){        
    button.disabled = validateButton();    
});

function validateButton(){
    if(authSi.checked & lectSi.checked){
        return false;
    }else{
        return true;
    }
}