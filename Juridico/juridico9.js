
var _validFileExtensions = [".pdf"];    
function ValidateSingleInput(oInput) {
    
    if (oInput.type == "file") {
        var sFileName = oInput.value;
         if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {
                alert("Formato incorrecto, las extensiones permitidas son: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    var fileSize = oInput.files[0].size/1000;
    if(fileSize > 2000){
        alert("El archivo excede el peso máximo");
        oInput.value = "";
        return false;
    }

    return true;
}