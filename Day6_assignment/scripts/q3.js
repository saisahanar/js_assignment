let name=prompt("enter your name:");
const title=document.getElementById("title");
title.innerText+=name;


const dmode=document.getElementById("btn")

dmode.onclick=function myFunction() {
    if(dmode.innerText=="DARK MODE"){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        dmode.innerText="LIGHT MODE";
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        dmode.innerText="DARK MODE";
    }
    
  }

const time=document.getElementById("clock");
function clock(){
    let date=new Date();
    let ctime=date.toLocaleTimeString();
    time.innerText=ctime;

}
clock();
setInterval(clock,1000);