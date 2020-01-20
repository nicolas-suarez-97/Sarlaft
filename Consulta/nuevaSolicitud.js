

function direccion(select, input, dir){
    var fullDir = document.getElementById(dir);
    fullDir.innerHTML = "";    
    for(var i=1; i<=5; i++){      
        fullDir.innerHTML += document.getElementById(select+i).value + " " + document.getElementById(input+i).value.toString().toUpperCase() + " ";        //.replace("-"," ")
    }
    fullDir.innerHTML = fullDir.innerHTML.split("-").join(" ");
    fullDir.innerHTML = fullDir.innerHTML.split("_").join(" ");
    fullDir.innerHTML = fullDir.innerHTML.split(".").join("");
    
}

function guardarDir( cancel, fullD, dir){    
    var fullDir = document.getElementById(fullD);
    var dirResidencia = document.getElementById(dir);
    dirResidencia.value = fullDir.innerHTML;
    document.getElementById(cancel).click();
}

function validateTipoESect(e){
    if(e.value == 'NATURAL'){
        document.getElementById('TipoEmpSector').style.display = 'none';
        document.getElementById('Nombres').style.display = 'block';
        document.getElementById('Apellidos').style.display = 'block';
        document.getElementById('PrimerNombre').required = true;
        document.getElementById('PrimerApellido').required = true;
        document.getElementById('SegundoApellido').required = true;
    }else{
        document.getElementById('TipoEmpSector').style.display = 'block';
        document.getElementById('Nombres').style.display = 'none';
        document.getElementById('Apellidos').style.display = 'none';
        document.getElementById('PrimerNombre').required = false;
        document.getElementById('PrimerApellido').required = false;
        document.getElementById('SegundoApellido').required = false;
    }
}