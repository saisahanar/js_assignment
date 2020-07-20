let input=prompt("Enter numbers: ",0);
//console.log(input,typeof input)
let arr=input.split(" ");
let op=prompt("enter what u want to do:+,-,*,/,%(percentage)")
switch (op) {
    case "+":console.log(+arr[0]+ +arr[1]);
            break;
    case "-":console.log(arr[0]-arr[1]);
            break;
    case "*":console.log(arr[0]*arr[1]); 
            break;
    case "/":console.log(arr[0]/arr[1]); 
            break;
    case "sqrt":console.log(Math.pow(arr[0],arr[1]));         
            break;
    case "%":console.log((arr[0]/100)*arr[1]);
            break; 
    default:
        break;
}

