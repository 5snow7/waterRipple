
let curwr=[];
let prewr=[];
let dampen;
function startWr(ar){
for(let i=0;i<col;i++){
	 ar[i]=[];
	for(let j=0;j<row;j++){
    ar[i][j]=0;		
	}}		
ar[100][100]=250;
	}

function Wr(){
for(let j=1;j<row-1;j++){
	for(let i=1;i<col-1;i++){
curwr[i][j]=(prewr[i-1][j]+prewr[i+1][j]+
prewr[i][j-1]+prewr[i][j+1])/2-curwr[i][j];
	curwr[i][j]=curwr[i][j]*dampen;
	fill(floor(curwr[i][j]),0,0);rect(i,j,1,1);
	}}	
	//tempwr=prewr;
	//prewr=curwr;
	curwr=prewr;
	}

function paintWr(ar){
	
	for(let j=0;j<row;j++){
for(let i=0;i<col;i++){
	if(ar[i][j]==0){fill(250,0,0);rect(i,j,1,1);}
else if(ar[i][j]==1){fill(0,250,0);rect(i,j,1,1);}
}}
}



