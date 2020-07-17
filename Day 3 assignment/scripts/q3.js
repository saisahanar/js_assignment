mks=Number(prompt("enter the mks"));
//using conditional stmts
/*

if (mks>90 && mks <=100) {
    console.log("Outstanding");
} else if (mks>70 && mks <=90){
    console.log("Distinction");
}
else if(mks>50 && mks<=70){
    console.log("First Class");
}
else if(mks<=50){
    console.log("below avg");
}
else{
    console.log("entered mks not valid")
}


*/
//ternary operator
let res=(mks > 90 && mks<100)?"outdtanding":(mks>70 && mks <=90)?"distinction":(mks>50 && mks<=70)?"first class":(mks<=50)?"below avg":"mks not valid";
console.log(res);








