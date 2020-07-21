function fetchTodo(){
    fetch("https://jsonplaceholder.typicode.com/todos").then(data=>{console.log(data)
     return data.json()})
     .then(d2=>{
         console.log(d2);
         for(let i=0;i<d2.length;i++){
             if(d2[i].completed==true){
                 console.log(d2[i]);
             }
         }
        })
     .catch(error=>console.log(error))

}
fetchTodo();