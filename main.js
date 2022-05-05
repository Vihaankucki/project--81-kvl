draw=document.getElementById("myCanvas");
color="blue";
var ctx=draw.getContext("2d");
draw.addEventListener("mousedown",draw_circle);
function Olympic (e) {
    mouseX=e.clientX-draw.offsetLeft;
    mouseY=e.clientY-draw.offsetTop;
    console.log(mouseX);
    console.log(mouseY);
    circle(mouseX,mouseY);

    
}

function Yay(mouseX,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=1;
    ctx.arc(mouseX,mouseY,100,0,2*Math.PI);
    ctx.stroke(); 

}