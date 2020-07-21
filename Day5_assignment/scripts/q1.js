console.log("question 1");
let n=Number(prompt("enter the positive number"));
let arr=[];
for(let i=1;i<=n;i++){
    arr.push(i)
}
 console.log(`the array is ${arr}`)
let oddnos=arr.filter((el)=>el%2!=0);
 console.log(`the array of odd nos are: ${oddnos}`)
let oddcubes=oddnos.map((el)=>el**3)
console.log(`the array of odd cubes are:${oddcubes}`)
