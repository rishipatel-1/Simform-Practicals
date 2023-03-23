let dropdownToggleValue: number = 1;
let logbaseChange: number[];
let ToggleValue: number = 1;
let memoryStack: any[] = [];
let input = document.querySelector<HTMLInputElement>('input')!;


function inputElement(): void
 { input.value = " "; } 

function equalElement(): void {
    if (input.value.indexOf("yroot") !== -1) {
        let logbaseChange: string[] = yroot(input.value);
        ythrroot(Number(logbaseChange[0]), Number(logbaseChange[1]));
    }
    if ((input.value.indexOf("logy") !== -1)) {
        let logbaseChange: string[] = logy(input.value);
        logxBasey(Number(logbaseChange[0]), Number(logbaseChange[1]));
    }
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Error!";
    }
}




function expressionValue(value: string):void {
    input.value += value;
}






function yroot(value: string):string[] {
    let m:string|number = value.search("yroot");
    let n:string|number = value.substring(0, m);
    let o:string|number = value.substring(m + 5, value.length);
    return [o, n]
}
function ythrroot(val1: number, val2: number) {
    input.value = Math.pow(val2, 1 / val1).toString();
}





function logy(value: string): string[] {
    let m:string|number = value.search("logy");
    let n:string|number = value.substring(0, m);
    let o:string|number = value.substring(m + 4, value.length);
    return [o, n]
}
function logxBasey(num1: number, num2: number):void {
    input.value = (Math.log(num1) / Math.log(num2)).toString();
}





function ToggleClearandRecall(): void {
    (document.getElementById('clear') as HTMLButtonElement).disabled = false;
    (document.getElementById('recall') as HTMLButtonElement).disabled = false;
}

function changeDropdown(val1: string, val2: string): void {
    if (dropdownToggleValue == 1) {
        for (let displayToggle of <any>document.getElementsByClassName(val1)) {
            displayToggle.style.display = "inline-block";
        }

        for (let displayToggle of <any>document.getElementsByClassName(val2)) {
            displayToggle.style.display = "none";
        }
        dropdownToggleValue = 0;
    } else {
        for (let displayToggle of <any>document.getElementsByClassName(val2)) {
            displayToggle.style.display = "inline-block";
        }
        for (let displayToggle of <any>document.getElementsByClassName(val1)) {
            displayToggle.style.display = "none";
        }
        dropdownToggleValue = 1;
    }
}






function ElementValue(value: string) {

    switch (value) {

        case 'x^2': {
            input.value = Math.pow(Number(input.value), 2).toString();
            break;
        }
        case 'x^3': {

            input.value = Math.pow(Number(input.value), 3).toString();
            break;
        }
        case 'squareRoot': {
            input.value = Math.sqrt(Number(input.value)).toString();
            break;
        }
        case 'cubeRoot': {

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
            let z = value.search("yroot");
            let y = value.substring(0, z);
            let x = value.substring(z + 5, value.length);
            return [x, y]
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

        case 'twoTothePowerValue': {
            input.value = Math.pow(2, Number(input.value)).toString();
            break;
        }

        case 'ePowerx': {
            input.value = Math.exp(Number(input.value)).toString();
            break;
        }

        case 'floorFunction': {
            input.value = Math.floor(Number(input.value)).toString();
            break;
        }

        case 'ceilingFunction': {
            input.value = Math.ceil(Number(input.value)).toString();
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
                input.value = number.toString();
            }
            break;
        }


        case 'openBracket': {
            input.value += "(";
            break;
        }

        case 'closeBracket': {
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
        case 'signChange': {

            input.value = ((-1) * (Number(input.value))).toString();
            break;
        }

        case 'memoryClear': {
            memoryStack = [];


            break;
        }

        case 'memoryRecall': {


            input.value = memoryStack[memoryStack.length - 1].toString();
            break;
        }



        case 'memoryAdd': {

            ToggleClearandRecall()
            if (memoryStack.length == 1) {
                memoryStack.push(parseInt(input.value));
            }

            else {

                memoryStack[memoryStack.length - 1] += parseInt(input.value);
            }
            break;
        }


        case 'memorySubtract': {

            ToggleClearandRecall()
            if (memoryStack.length == 0) {
                memoryStack.push((-1) * parseInt(input.value));
            }
            else {
                memoryStack[memoryStack.length - 1] -= parseInt(input.value);
            }
            break;
        }


        case 'memoryStore': {

            ToggleClearandRecall()
            if (memoryStack.length == 0) {
                memoryStack.push(parseFloat(input.value));
            }

            else {
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

        case 'xInverse': {
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
                document.querySelector<HTMLButtonElement>('degree')!.innerHTML = "RAD";
                ToggleValue = 0;
            }
            else {
                document.querySelector<HTMLButtonElement>('degree')!.innerHTML = "DEG";
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
            input.value += 0
        }




        case 'sin': {
            if (ToggleValue == 1) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'cos': {
            if (ToggleValue) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'tan': {
            if (ToggleValue) {
                input.value = (Math.sin((Math.PI / 180) * Number(input.value))).toString();
            }
            else {
                input.value = (Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'cosec': {
            if (ToggleValue) {
                input.value = (1 / Math.sin(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.sin(Number(input.value))).toString();
            }

            break;
        } case 'sec': {
            if (ToggleValue) {
                input.value = (1 / Math.cos(Math.PI / 180 * Number(input.value))).toString();
            }
            else {
                input.value = (1 / Math.cos(Number(input.value))).toString();
            }

            break;
        } case 'cot': {
            if (ToggleValue) {
                input.value = (1 / (Math.tan(Math.PI / 180 * Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.tan(Number(input.value))).toString();
            }

            break;
        }




        case 'sinInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.asin(Number(input.value))).toString();
            }
            else {
                input.value = Math.asin(Number(input.value)).toString();
            }

            break;
        } case 'cosInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.acos(Number(input.value))).toString();
            }
            else {
                input.value = Math.acos(Number(input.value)).toString();
            }

            break;
        } case 'tanInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * Math.atan(Number(input.value))).toString();
            }
            else {
                input.value = Math.atan(Number(input.value)).toString();
            }

            break;
        } case 'cosecInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.asin(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.asin(Number(input.value))).toString();
            }

            break;
        } case 'secInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.acos(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.acos(Number(input.value))).toString();
            }

            break;
        } case 'cotInverse': {
            if (ToggleValue) {
                input.value = (180 / Math.PI * (Math.atan(1 / Number(input.value)))).toString();
            }
            else {
                input.value = (1 / Math.atan(Number(input.value))).toString();
            }

            break;
        }





        case 'sinh': {
            let result = ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;


            break;
        } case 'cosh': {

            let result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / 2).toString();
            input.value = result;

            break;
        } case 'tanh': {
            let result = (((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))) * ((Math.exp(Number(input.value)) - Math.exp(Number(-input.value))) / 2)).toString();
            input.value = result;

            break;
        } case 'cosech': {
            let result = (2 / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;

            break;
        } case 'sech': {
            let result = (2 / (Math.exp(Number(input.value)) + Math.exp(Number(-input.value)))).toString();
            input.value = result;
            break;
        } case 'coth': {
            let result = ((Math.exp(Number(input.value)) + Math.exp(Number(-input.value))) / (Math.exp(Number(input.value)) - Math.exp(Number(-input.value)))).toString();
            input.value = result;

            break;
        }





        case 'sinhInverse': {
            let result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;

            break;
        } case 'coshInverse': {
            let result = (Math.log(Number(input.value) + Math.sqrt(Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;

            break;
        } case 'tanhInverse': {
            let result = (0.5 * Math.log((1 + Number(input.value)) / (1 - Number(input.value)))).toString();
            input.value = result;

            break;
        } case 'cosechInverse': {
            let result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) + 1))).toString();
            input.value = result;

            break;
        } case 'sechInverse': {
            let result = (Math.log(1 / Number(input.value) + Math.sqrt(1 / Math.pow(Number(input.value), 2) - 1))).toString();
            input.value = result;
            break;
        } case 'cothInverse': {
            let result = (0.5 * Math.log((Number(input.value )+ 1) / (Number(input.value) - 1))).toString();
            input.value = result;

            break;
        }
    }
}


document.addEventListener('keydown', function (event) 
{  var key: string = event.key; if (!isNaN(Number(key)) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.')
 { input.value += key; } 
 else if 
 (key === "Backspace" || key === "Delete") { let len = input.value.length; input.value = input.value.slice(0, Number(len) - 1); } 
 else if 
 (key === 'Enter') { equalElement() } });