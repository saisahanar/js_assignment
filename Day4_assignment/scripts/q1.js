for (let i = 0; i < 100; i++) {
    if(i%3==0 && i%5==0){
        console.log(`fizzbuzz at i=${i}`)
    }
    else if (i%3==0) {
        console.log(`fizz at i=${i}`);
    } else{
    
     if (i%5==0) {
        console.log(`buzz at i=${i}`);
    } 
}  
}