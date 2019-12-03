var ciudad = document.getElementById('inputCiudad');
var sucursal = document.getElementById('inputSucursal');

function sucursalChange(){
    sucursal.value = ciudad.value;
}

function validateManejo(){
    var aceptar = document.getElementById('aceptar');
    if(aceptar.checked){
        document.getElementById('manejoDatos').style.display = 'none';
        document.getElementById('aceptarEnvio').checked = true;
    }else{
        document.getElementById('informacion').style.display = 'none';
        document.getElementById('mensajeRechazo').style.display = 'flex';
    }
}