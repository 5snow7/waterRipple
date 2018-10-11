let pos,vel,acc;
let pic,par;
function startup(){
	pos=createVector(100,100);
	vel=createVector(3,4);
	acc=createVector(0,.1);
	pic=createImg('testpic.jpg');pic.class('picbdd');
inp=createInput("test of array");inp.position(20,200);
inp.class('inpbdd');inp.changed(tes);
par=createP("hor speed");par.class('parbdd');
par.position(25,300);
sl=createSlider(0,5,2.5,.2);
sl.class('inpbdd');//sl.position(50,300);
sl.parent(par);
sl.mousePressed(xsp);
}

function move(){
vel.add(acc);pos.add(vel);	
	if(pos.x<0||pos.x>windowWidth){vel.x=-1*vel.x;}
	if(pos.y<0||pos.y>500){vel.y=-1*vel.y;}
}

function xsp(){
let sp=sl.value();
vel.x=sp;
}