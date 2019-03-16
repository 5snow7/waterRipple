

let sno;let can;
let hr1;
let ob;
function setup() {
row=500;col=600;rectMode(CENTER);
can=createCanvas(col,row);
can.position(300,30);can.class("bdd");
ob=new object(200,50,3,2);
startup();
text("10011001 or 10100101 or 10110110", 20,100);
text("01011001 or 10101001", 20,130);
startWr(curwr);startWr(prewr);
dampen=.9;
}


function draw() {
ob.move();ob.chbd();ob.display(); 
pic.position(ob.pos.x,ob.pos.y);
angle+=5;
//Wr();
}
		


function keyPressed(){
//Wr();	
}
