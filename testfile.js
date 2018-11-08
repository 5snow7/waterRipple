//let pos,vel,acc;
let pic,par,inp,sl;let angle=0;
function startup(){

pic=createImg('testpic.jpg');pic.class('picbdd');
inp=createInput("test of array");inp.position(20,200);
inp.class('inpbdd');inp.changed(tes);

par=createP("hor speed");par.class('parbdd');
par.position(25,300);

sl=createSlider(0.0,6.0,3.0,0.5);
sl.parent(par);//sl.mousePressed((ob)=>{ob.pos.y=sl.value();});//xsp);
par.style('rotate','60');
sl.mousePressed(xsp);
sno=select('#snow');sno.position(40,50);
sno.class('inpbdd');
hr1=select('#hr');hr1.position(50,120);
hr1.class('inpbdd');

}



function xsp(){
ob.vel.x=sl.value();
}