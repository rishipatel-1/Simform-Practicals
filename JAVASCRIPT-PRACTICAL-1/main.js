let a = b = c = d = e = x = y = z = w = i = m=n=o= 1;

memory_stack = [];


function input_element() {
    input.value = " ";
}

function equal() {
    if (input.value.includes("yroot")) {
        let y = yroot(input.value);
        ythrroot(y[0], y[1]);

    }
    if (input.value.includes("logy")) {
        let y = logy(input.value);
        logx_base_y(y[0], y[1]);

    }
    try {
        input.value = eval(input.value);
       
      }
      catch(e) {
     input.value = "Error!";
        
      }

    
}




function expression(value) {
    input.value += value;
}






function yroot(value) {
    let m = value.search("yroot");
    let n = value.substring(0, m);
    let o = value.substring(m + 5, value.length);
    return [o, n]
}
function ythrroot(val1, val2) {
    input.value = Math.pow(val2, 1 / val1).toString();
}





function logy(value) {
    let m = value.search("logy");
    let n = value.substring(0, m);
    let o = value.substring(m + 4, value.length);
    return [o, n]
}
function logx_base_y(num1, num2) {
    input.value = (Math.log(num1) / Math.log(num2)).toString();
}



function cr() {
    document.getElementById('clear').disabled = false;
    document.getElementById('recall').disabled = false;
}



function change_dropdown(val1, val2) {
    if (d == 1) {
 
        for (let x of document.getElementsByClassName(val1)) {
            x.style.display = " inline-block";
        }

        for (let x of document.getElementsByClassName(val2)) {
            x.style.display = "none";
        }
        d = 0;

    }
    else {
  
        for (let x of document.getElementsByClassName(val2)) {
            x.style.display = " inline-block";
        }
        for (let x of document.getElementsByClassName(val1)) {
            x.style.display = "none";
        }
        d = 1;

    }
}


document.addEventListener('keydown', function (event) 
{  var key = event.key;
     if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.')
 { input.value += key; } 

 else if 
 (key === "Backspace" || key === "Delete") { let len = input.value.length; input.value = input.value.slice(0, Number(len) - 1); } 

 else if 
 (key === 'Enter') { equal(input.value); 
} 
});



function expression_value(value) {

    switch (value) {
        case 'C': {
            input.value = "";
            break;
        }

        case 'x^2': {
            input.value = Math.pow(input.value, 2);
            break;
        }
        case 'x^3': {

            input.value = Math.pow(input.value, 3);
            break;
        }
        case 'square_root': {
            input.value = Math.sqrt(Number(input.value));
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
            input.value = Math.log10(input.value);
            break;
        }

        case 'ylog': {
            let z = value.search("yroot");
            let y = value.substring(0, z);
            let x = value.substring(z + 5, value.length);
            return [x, y]
            break;
        }

        case 'lnx': {
            input.value = Math.log(input.value);

            break;
        }

        case 'power': {
            input.value = Math.pow(10, input.value);
            break;
        }

        case 'power_2': {
            input.value = Math.pow(2, input.value);
            break;
        }

        case 'e_x': {
            input.value = Math.exp(input.value);
            break;
        }

        case 'floor_fun': {
            input.value = Math.floor(input.value);
            break;
        }

        case 'ceiling_fun': {
            input.value = Math.ceil(input.value);
            break;
        }

        case 'factorial': {
            let number = Number(input.value);
            if (number == 0 || number == 1) {
                input.value = "1";
            }
            else if (number > 1) {
                for (let i = number - 1; i > 1; i--) {
                    number = number * i;
                }
                input.value = number;
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

            input.value = Math.pow((Math.exp(1)), Number(input.value))
            break;
        }

        case '**': {

            input.value += value;
            break;
        }

        case 'random': {

            input.value = Math.random();
            break;
        }

        case 'sign_change': {

            input.value = (-1) * (input.value);
            break;
        }

        case 'sign_change   ': {

            input.value = (-1) * (input.value);
            break;
        }

        case 'memory_clear': {
            memory_stack = [];
          

            break;
        }

        case 'memory_recall': {


            input.value = memory_stack[memory_stack.length - 1].toString();
            break;
        }



        case 'memory_add': {

            cr()
            if (memory_stack.length == 1) {
                memory_stack.push(parseInt(input.value));
            }

            else {
              
                memory_stack[memory_stack.length - 1] += parseInt(input.value);
            }
            break;
        }


        case 'memory_sub': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push((-1) * parseInt(input.value));
            }
            else {
                memory_stack[memory_stack.length - 1] -= parseInt(input.value);
            }
            break;
        }


        case 'memory_store': {

            cr()
            if (memory_stack.length == 0) {
                memory_stack.push(parseFloat(input.value));
            }

            else {
                console.log("add")
                memory_stack.push(parseFloat(input.value));
            }
            break;
        }

        case 'sign': {
            change_sign();
            break;
        }

        case 'pi': {

            if (Number(input.value.substring(-1))) {
                input.value = Math.PI;
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

            input.value = Math.abs(input.value);

            break;
        }

        case 'x_inverse': {
            input.value = 1 / (input.value);

            break;
        }


        case 'e': {
            if (Number(input.value.substring(-1))) {
                input.value = Math.exp(1);
            }
            else {
                input.value += Math.exp(1);
            }
            break;
        }

        case 'deg': {
            if (i == 1) {
                document.getElementById('degree').innerHTML = "RAD";
                i = 0;
            }
            else {
                document.getElementById('degree').innerHTML = "DEG";
                i = 1;
            }
            break;
        }


        case 'fe': {
            if (w == 1) {
                input.value = Number(input.value).toString();
                w = 0;
            }
            else {
                input.value = Number(input.value).toExponential().toString();
                w = 1;
            }
            break;
        }
        default: {
            input.value += 0
        }




        case 'sin': {
            if (i == 1) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value)));
            }
            else {
                input.value = (Math.sin(input.value));
            }

            break;
        } case 'cos': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value)));
            }
            else {
                input.value = (Math.sin(input.value));
            }

            break;
        } case 'tan': {
            if (i) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value)));
            }
            else {
                input.value = (Math.sin(input.value));
            }

            break;
        } case 'cosec': {
            if (i) {
                input.value = (1 / Math.sin(Math.PI / 180 * input.value));
            }
            else {
                input.value = 1 / Math.sin(input.value);
            }

            break;
        } case 'sec': {
            if (i) {
                input.value = (1 / Math.cos(Math.PI / 180 * input.value));
            }
            else {
                input.value = 1 / Math.cos(input.value);
            }

            break;
        } case 'cot': {
            if (i) {
                input.value = 1 / (Math.tan(Math.PI / 180 * input.value));
            }
            else {
                input.value = 1 / Math.tan(input.value);
            }

            break;
        }




        case 'sin_inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.asin(input.value));
            }
            else {
                input.value = Math.asin(input.value);
            }

            break;
        } case 'cos _inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.acos(input.value));
            }
            else {
                input.value = Math.acos(input.value);
            }

            break;
        } case 'tan_inverse': {
            if (i) {
                input.value = (180 / Math.PI * Math.atan(input.value));
            }
            else {
                input.value = Math.atan(input.value);
            }

            break;
        } case 'cosec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.asin(1 / input.value)));
            }
            else {
                input.value = 1 / Math.asin(input.value);
            }

            break;
        } case 'sec_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.acos(1 / input.value)));
            }
            else {
                input.value = 1 / Math.acos(input.value);
            }

            break;
        } case 'cot_inverse': {
            if (i) {
                input.value = (180 / Math.PI * (Math.atan(1 / input.value)));
            }
            else {
                input.value = 1 / Math.atan(input.value);
            }

            break;
        }





        case 'sinh': {
            input.value = (Math.sinh(input.value));

            break;
        } case 'cosh': {
            input.value = (Math.cosh(input.value));

            break;
        } case 'tanh': {
            input.value = (Math.tanh(input.value));

            break;
        } case 'cosech': {
            input.value = (1 / Math.sinh(input.value));

            break;
        } case 'sech': {
            input.value = (1 / Math.cosh(input.value));;

            break;
        } case 'coth': {
            input.value = (1 / Math.tanh(input.value));;

            break;
        }





        case 'sinh_inverse': {
            input.value = (Math.asinh(input.value));

            break;
        } case 'cosh_inverse': {
            input.value = (Math.acosh(input.value));

            break;
        } case 'tanh_inverse': {
            input.value = (Math.atanh(input.value));

            break;
        } case 'cosech_inverse': {
            input.value = (1 / Math.asinh(input.value));

            break;
        } case 'sech_inverse': {
            input.value = (1 / Math.acosh(input.value));

            break;
        } case 'coth_inverse': {
            input.value = (1 / Math.atanh(input.value));

            break;
        }
    }
}


document.addEventListener('keydown', function (event) 
{  var key = event.key; if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.')
 { input.value += key; } 
 else if 
 (key === "Backspace" || key === "Delete") { let len = input.value.length; input.value = input.value.slice(0, Number(len) - 1); } 
 else if 
 (key === 'Enter') { equal(input.value); } });