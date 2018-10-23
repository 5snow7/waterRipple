

let sno;let can;
let hr1;
let ob;
function setup() {
row=500;col=600;rectMode(CENTER);
can=createCanvas(col,row);
can.position(300,30);can.class("bdd");
sno=select('#snow');sno.position(40,50);
sno.class('inpbdd');
ob=new object(200,50,3,2);
startup();
hr1=select('#hr');hr1.position(50,120);
hr1.class('inpbdd');
text("10011001 or 10100101 or 10110110", 20,100);

}


function draw() {
ob.move();ob.chbd();ob.display(); 
pic.position(ob.pos.x,ob.pos.y);
}
		
let str;
function tes(){
 let str=inp.value();
 for(let j=0;j<str.length;j++){textSize(30);
 stroke(0,250,0);list[j]=str.charAt(j);
 text(list[j],40,40+20*j);
 }
 paint(cur);
 }

