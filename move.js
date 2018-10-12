let pos;
let vel;
let acc;

function startup(){
pos=createVector(100,100);
vel=createVector(3,4);
acc=createVector(0,.5);
	}

function move(){
	vel.add(acc);
	pos.add(vel);
	}