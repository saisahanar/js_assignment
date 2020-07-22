let doc = document.getElementById("background");
let color = ["black", "blue", "brown", "green"];
let i = 0;
function change() {
  doc.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
}
setInterval(change, 5000);