function symbol(val){
    if (val !== '=' && val !== 'c') {
        var displayField = document.getElementById("disp");
        displayField.value += val;
    }
    if (val == '='){
        var displayField = document.getElementById("disp");
        var result = eval(displayField.value);
        if (isFinite(result)) {
            displayField.value = result;
        } else {
            displayField.value = "Error";
        }
    }
    if(val =='c'){
        document.getElementById('disp').value = '';
    }
}