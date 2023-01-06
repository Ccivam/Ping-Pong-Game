let can=document.getElementById("table");
let draw_=can.getContext("2d");
draw_.fillStyle="black";
draw_.fillRect(0,0,can.width,can.height);
draw_.fillStyle="red";
draw_.fillRect(100,100,30,30);
draw_.fillStyle="orange";
draw_.beginPath();
draw_.arc(200,200,10,0,Math.PI*2,false);
draw_.closePath();
draw_.fill();
//Ball object
const ball={
    x:can.width/2,
    y:can.height/2,
    radius:10,
    vel_in_x_dir:5,
    vel_in_y_dir:5,
    speed:7,
    color:"red"
}
//Separator->at the middle
const sep={
    x:(can.width-2)/2,
    y:0,
    height:10,
    width:2,
    color:"green" 
}
//User tab or bar
const user={
    x:0,
    y:(can.height-100)/2,
    width:10,
    height:100,
    score:0,
    color:"orange"
}
const cpu={
    x:can.width-10,
    y:(can.height-100)/2,
    width:10,
    height:100,
    score:0,
    color:"orange"
}
function drawRectangle(x,y,w,h,color){
    draw_.fillStyle=color;
    draw_.fillRect(x,y,w,h);
}
function drawCircle(x,y,r,color){
    draw_.fillStyle=color;
    draw_.beginPath();
    draw_.arc(x,y,r,0,Math.PI*2,true);
    draw_.closePath();
    draw_.fill();
}
function drawScore(text,x,y){
    draw_.fillStyle="white";
    draw_.font="60px Arial";
    draw_.fillText(text,x,y);

}
function drawSeparator(){
        for(let i=0;i<=can.height;i++){
            drawRectangle(sep.x,sep.y+i,sep.width,sep.height,sep.color);
        } 
}

function helper(){
    drawRectangle(0,0,can.width,can.height,"black");
    drawScore(0,can.width/4,can.height/5);
    drawScore(0,3*can.width/4,can.height/5);
    drawSeparator();
    drawRectangle(user.x,user.y,user.width,user.height,user.color);
    drawRectangle(cpu.x,cpu.y,cpu.width,cpu.height,cpu.color);
    drawCircle(ball.x,ball.y,ball.radius,ball.color);

}   
function call_back(){
    helper();
}
let fps=50;
let looper=setInterval(call_back,1000/fps);
function restart(){
    ball.x=can.width/2;
    ball.y=can.height/2;
    ball.vel_in_x_dir=-vel_in_x_dir;
    ball.speed=5;

}
canvas.addEventListener("mousemove",getMousePos);
function getMousePos(evt){
    let rect=can.getBoundingClientRect();
    user.y=evt.clientY-rect.top-user.height/2;
}

