var dropdownToggleValue = 1;
var logbaseChange;
var ToggleValue = 1;
var memoryStack = [];
var input = document.querySelector('input');
function inputElement() { input.value = " "; }
function equalElement() {
    if (input.value.indexOf("yroot") !== -1) {
        var logbaseChange_1 = yroot(input.value);
        ythrroot(Number(logbaseChange_1[0]), Number(logbaseChange_1[1]));
    }
    if ((input.value.indexOf("logy") !== -1)) {
        var logbaseChange_2 = logy(input.value);
        logx_base_y(Number(logbaseChange_2[0]), Number(logbaseChange_2[1]));
    }
    try {
        input.value = eval(input.value);
    }
    catch (e) {
        input.value = "Error!";
    }
}
function expressionValue(value) {
    input.value += value;
}
function yroot(value) {
    var m = value.search("yroot");
    var n = value.substring(0, m);
    var o = value.substring(m + 5, value.length);
    return [o, n];
}
function ythrroot(val1, val2) {
    input.value = Math.pow(val2, 1 / val1).toString();
}
function logy(value) {
    var m = value.search("logy");
    var n = value.substring(0, m);
    var o = value.substring(m + 4, value.length);
    return [o, n];
}
function logx_base_y(num1, num2) {
    input.value = (Math.log(num1) / Math.log(num2)).toString();
}
function cr() {
    document.getElementById('clear').disabled = false;
    document.getElementById('recall').disabled = false;
}
function changeDropdown(val1, val2) {
    if (dropdownToggleValue == 1) {
        for (var _i = 0, _a = document.getElementsByClassName(val1); _i < _a.length; _i++) {
            var displayToggle = _a[_i];
            displayToggle.style.display = "inline-block";
        }
        for (var _b = 0, _c = document.getElementsByClassName(val2); _b < _c.length; _b++) {
            var displayToggle = _c[_b];
            displayToggle.style.display = "none";
        }
        dropdownToggleValue = 0;
    }
    else {
        for (var _d = 0, _e = document.getElementsByClassName(val2); _d < _e.length; _d++) {
            var displayToggle = _e[_d];
            displayToggle.style.display = "inline-block";
        }
        for (var _f = 0, _g = document.getElementsByClassName(val1); _f < _g.length; _f++) {
            var displayToggle = _g[_f];
            displayToggle.style.display = "none";
        }
        dropdownToggleValue = 1;
    }
}
function ElementValue(value) {
    switch (value) {
        case 'C': {
            input.value = "";
            break;
        }
        case 'x^2': {
            input.value = Math.pow(Number(input.value), 2).toString();
            break;
        }
        case 'x^3': {
            input.value = Math.pow(Number(input.value), 3).toString();
            break;
        }
        case 'square_root': {
            input.value = Math.sqrt(Number(input.value)).toString();
            break;
        }
        case 'cube_root': {
            input.value = Math.pow(Number(input.value), 0.3334).toFixed(1);
            break;
        }
        case 'backspace': {
            input.value = input.value.slice(0, -1);
            break;
        }
        case 'log': {
            input.value = Math.log(Number(input.value)).toString();
            break;
        }
        case 'ylog': {
            var z = value.search("yroot");
            var y = value.substring(0, z);
            var x = value.substring(z + 5, value.length);
            return [x, y];
            break;
        }
        case 'lnx': {
            input.value = Math.log(Number(input.value)).toString();
            break;
        }
        case 'power': {
            input.value = Math.pow(10, Number(input.value)).toString();
            break;
        }
        case 'power_2': {
            input.value = Math.pow(2, Number(input.value)).toString();
            break;
        }
        case 'e_x': {
            input.value = Math.exp(Number(input.value)).toString();
            break;
        }
        case 'floor_fun': {
            input.value = Math.floor(Number(input.value)).toString();
            break;
        }
        case 'ceiling_fun': {
            input.value = Math.ceil(Number(input.value)).toString();
            break;
        }
        case 'factorial': {
            var number = Number(input.value);
            if (number == 0 || number == 1) {
                input.value = "1";
            }
            else if (number > 1) {
                for (var i = number - 1; i > 1; i--) {
                    number = number * i;
                }
                input.value = number.toString();
            }
            break;
        }
        case 'open_bracket': {
            input.value += "(";
            break;
        }
        case 'close_bracket': {
            input.value += ")";
            break;
        }
        case 'exp': {
            input.value = Math.pow((Math.exp(1)), Number(input.value)).toString();
            break;
        }
        case '**': {
            input.value += value;
            break;
        }
        case 'random': {
            input.value = Math.random().toString();
            break;
        }
        case 'sign_change': {
            input.value = ((-1) * (Number(input.value))).toString();
            break;
        }
        case 'memory_clear': {
            memoryStack = [];
            break;
        }
        case 'memory_recall': {
            input.value = memoryStack[memoryStack.length - 1].toString();
            break;
        }
        case 'memory_add': {
            cr();
            if (memoryStack.length == 1) {
                memoryStack.push(parseInt(input.value));
            }
            else {
                memoryStack[memoryStack.length - 1] += parseInt(input.value);
            }
            break;
        }
        case 'memory_sub': {
            cr();
            if (memoryStack.length == 0) {
                memoryStack.push((-1) * parseInt(input.value));
            }
            else {
                memoryStack[memoryStack.length - 1] -= parseInt(input.value);
            }
            break;
        }
        case 'memory_store': {
            cr();
            if (memoryStack.length == 0) {
                memoryStack.push(parseFloat(input.value));
            }
            else {
                console.log("add");
                memoryStack.push(parseFloat(input.value));
            }
            break;
        }
        case 'pi': {
            if (Number(input.value.substring(-1))) {
                input.value = (Math.PI).toString();
            }
            else {
                input.value += Math.PI;
            }
            break;
        }
        case '%': {
            input.value += value;
            break;
        }
        case 'modulus': {
            input.value = Math.abs(Number(input.value)).toString();
            break;
        }
        case 'x_inverse': {
            input.value = (1 / (Number(input.value))).toString();
            break;
        }
        case 'e': {
            if (Number(input.value.substring(-1))) {
                input.value = (Math.exp(Number(1)).toString());
            }
            else {
                input.value += Math.exp(1);
            }
            break;
        }
        case 'deg': {
            if (ToggleValue == 1) {
                document.querySelector('degree').innerHTML = "RAD";
                ToggleValue = 0;
            }
            else {
                document.querySelector('degree').innerHTML = "DEG";
                ToggleValue = 1;
            }
            break;
        }
        case 'fe': {
            if (ToggleValue == 1) {
                input.value = Number(input.value).toString();
                ToggleValue = 0;
            }
            else {
                input.value = Number(input.value).toExponential().toString();
                ToggleValue = 1;
            }
            break;
        }
        default: {
            input.value += 0;
        }
        case 'sin': {
            if (ToggleValue == 1) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'cos': {
            if (ToggleValue) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'tan': {
            if (ToggleValue) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'cosec': {
            if (ToggleValue) {
                input.value = (1 / Math.sin(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.sin(Number(input.value))).toString();
            }
            break;
        }
        case 'sec': {
            if (ToggleValue) {
                input.value = (1 / Math.cos(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.cos(Number(input.value))).toString();
            }
            break;
        }
        case 'cot': {
            if (ToggleValue) {
                input.value = (1 / (Math.tan(Math.PI / 180 * Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.tan(Number(input.value))).toString();
            }
            break;
        }
        case 'sin_inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.asin(Number(input.value))).toString();
            }
            else {
                input.value = Math.asin(Number(input.value)).toString();
            }
            break;
        }
        case 'cos _inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.acos(Number(input.value))).toString();
            }
            else {
                input.value = Math.acos(Number(input.value)).toString();
            }
            break;
        }
        case 'tan_inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.atan(Number(input.value))).toString();
            }
            else {
                input.value = Math.atan(Number(input.value)).toString();
            }
            break;
        }
        case 'cosec_inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.asin(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.asin(Number(input.value))).toString();
            }
            break;
        }
        case 'sec_inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.acos(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.acos(Number(input.value))).toString();
            }
            break;
        }
        case 'cot_inverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.atan(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.atan(Number(input.value))).toString();
            }
            break;
        }
        case 'sinh': {
            var result = ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;
            break;
        }
        case 'cosh': {
            var result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;
            break;
        }
        case 'tanh': {
            var result = (((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))) * ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2)).toString();
            input.value = result;
            break;
        }
        case 'cosech': {
            var result = (2 / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'sech': {
            var result = (2 / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'coth': {
            var result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        }
        case 'sinh_inverse': {
            var result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;
            break;
        }
        case 'cosh_inverse': {
            var result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        }
        case 'tanh_inverse': {
            var result = (0.5 * Math.log((1 + Number(input.value)) / (1 - Number(input.value)))).toString();
            input.value = result;
            break;
        }
        case 'cosech_inverse': {
            var result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;
            break;
        }
        case 'sech_inverse': {
            var result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        }
        case 'coth_inverse': {
            var result = (0.5 * Math.log((Number(input.value) + 1) / (Number(input.value) - 1))).toString();
            input.value = result;
            break;
        }
    }
}
document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (!isNaN(Number(key)) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        input.value += key;
    }
    else if (key === "Backspace" || key === "Delete") {
        var len = input.value.length;
        input.value = input.value.slice(0, Number(len) - 1);
    }
    else if (key === 'Enter') {
        equalElement();
    }
});
