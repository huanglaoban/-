function drow(){
	var canvas=document.getelementById("canvas");
	if(canvas.getContext()){
		var ctx=canvas.getContext("2d");
		ctx.fillStyle=red;
		ctx.fillRect(50,50,300,300)
	}
}
