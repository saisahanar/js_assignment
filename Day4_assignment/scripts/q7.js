let input=Number(prompt("enter upper bound:"));
for(let i=2;i<=input;i++){
    let flag=true;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log(i);
    }
}
