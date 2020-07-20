let amt=Number(prompt("enter the sales made this year:"));
console.log(`sales of this year is ${amt}`)
switch (true) {
    case (amt<=5000):console.log(`total commision earned by salesman is ${amt*0.02}`);
    break;
    case (amt>5000 && amt<=10000):console.log(`total commision earned by salesman is ${amt*0.05}`);
    break;
    case (amt>10000 && amt<=20000):console.log(`total commision earned by salesman is ${amt*0.07}`);
    break;
    case (amt>20000):console.log(`total commision earned by salesman is ${amt*0.1}`);
    break;
    default:console.log("sales not applicable")
    break;
}