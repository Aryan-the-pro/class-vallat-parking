//Create a reference for canvas 
canvas=document.getElementById("myCanvas") ; 
ctx=canvas.getContext("2d") ;

Car_img="car2.png" ; 

greencar_x=10 ; 
greencar_y=250 ; 

greencar_width=80 ;
greencar_height=110;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
  background_imgTag=new Image();
  background_imgTag.onload=uploadBackgroundImg;
  background_imgTag.src=background_image ;
  

  greencar_imageTag=new Image(); 
  greencar_imageTag.onload=uploadgreencar; 
  greencar_imageTag.src=Car_img;
}

 function uploadBackgroundImg() 
{ 
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
 } 
 
 

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,greencar_x,greencar_y,greencar_width,greencar_height); 

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>0) 
    {
        greencar_y=greencar_y-10; 
        console.log("When Up Arrow Is Pressed:X="+greencar_x+"|y="+greencar_y) ; 
        uploadBackgroundImg();
		uploadgreencar() ;
        
    }
}

function down()
{ 
	if(greencar_y<290) 
    {
        greencar_y=greencar_y+10; 
        console.log("When Up Arrow Is Pressed:X="+greencar_x+"|y="+greencar_y) ; 
        uploadBackgroundImg();
		uploadgreencar() ;
        
    }
}

function left()
{
	if(greencar_x>0) 
    {
        greencar_x=greencar_x-10; 
        console.log("When Up Arrow Is Pressed:X="+greencar_x+"|y="+greencar_y) ; 
        uploadBackgroundImg();
		uploadgreencar() ;
        
    }	
}

function right()
{
	if(greencar_x<700) 
    {
        greencar_x=greencar_x+10; 
        console.log("When Up Arrow Is Pressed:X="+greencar_x+"|y="+greencar_y) ; 
        uploadBackgroundImg();
		uploadgreencar() ;
        
    }	
}
