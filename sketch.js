let sno;let can;
let sl;let inp;
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
//paint(cur);
}

function draw() {
  //background(250,250,0);
//test(cur);
//SSSpaint(cur);	
}

function tes(){
 let str=inp.value();
 for(let j=0;j<str.length;j++){textSize(30);
 stroke(0,250,0);list[j]=str.charAt(j);
 text(list[j],40,40+20*j);
 }
 paint(cur);
 }

  
