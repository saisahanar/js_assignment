let n=Number(prompt("enter upper bound"));
for(let i=2;i<=n;i++){
    for(let j=2;j<i;j++){
        if(i%j==0)
            continue;
        console.log(i);
    }
       
    
}