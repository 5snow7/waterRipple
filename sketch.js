let sno;let can;let xpos,ypos;
let sl;let inp,pic;
let pos1;
let vel1;
let acc1;

function setup() {
row=500;col=600;rectMode(CENTER);
can=createCanvas(600,500);
can.position(200,30);
can.class("bdd");
sno=select('#snow');
sno.position(30,50);
sl=createSlider(0,100,50,2);
sl.position(50,400);
inp=createInput("test of array");inp.position(20,200);
inp.changed(tes);
text(list[1],40,50);
text("10011001 or 10100101", 20,100);
pic=createImg("pic1.jpg");pic.position(10,10);
pic.class("pic1");xpos=100;ypos=100;
//paint(cur);
startup();
pos1=createVector(100,100);
 vel1=createVector(3,4);
 acc1=createVector(0,.5);

}

let xspd=3;let yspd=4;

function draw() {
  //background(250,250,0);
//test(cur);
//SSSpaint(cur);

 //xpos=xpos+xspd;ypos=ypos+yspd;
//if(xpos>800||xpos<10){xspd=-1*xspd;}
//if(ypos>600||ypos<10){yspd=-1*yspd;}
move();
vel1.add(acc1);
	pos1.add(vel1);	text(pos1.x,50,200);
pic.position(pos.x,pos.y);
}

function tes(){
 let str=inp.value();
 for(let j=0;j<str.length;j++){textSize(30);
 stroke(0,250,0);list[j]=str.charAt(j);
 text(list[j],40,40+20*j);
 }
 paint(cur);
 }

 function move(x,y){
let xspd=3;let yspd=4;
 x=x+xspd;y=y+yspd;
if(x>800||x<10){xspd=-1*xspd;}
if(y>600||y<10){yspd=-1*yspd;}
return xpos;
} 
