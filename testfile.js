//let pos,vel,acc;
let pic,par,inp,sl;
function startup(){

pic=createImg('testpic.jpg');pic.class('picbdd');
inp=createInput("test of array");inp.position(20,200);
inp.class('inpbdd');inp.changed(tes);

par=createP("hor speed");par.class('parbdd');
par.position(25,300);

sl=createSlider(0.0,6.0,3.0,0.5);
sl.parent(par);//sl.mousePressed((ob)=>{ob.pos.y=sl.value();});//xsp);
sl.mousePressed(xsp);
}



function xsp(){
ob.vel.x=sl.value();
}