function myFunction()
{
var i=0;
var n=prompt("enter a number:")
var str="";
for(i=1;i<=10;i++)
{
document.write('<table border="1" cellspacing="0">');
for(i=1;i<=10;i++) {
    document.write("<tr><td>" + n + " x " + i + " = " + n*i + "</td></tr>");
}
 document.write("</table>");
}
}
myFunction()