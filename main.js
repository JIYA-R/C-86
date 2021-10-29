var canvas=new fabric.Canvas("myCanvas");
player_X=30;
player_Y=0;

block_width=20;
block_height=20;

player_img="";
block_img="";

document.getElementById("Height").innerHTML=block_height;
document.getElementById("Width").innerHTML=block_width;

function uploadBoy(){

    fabric.Image.fromURL("player.png",function(Img){

        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(150);
        player_img.set({
            top:player_Y,left:player_X

        });
        canvas.add(player_img);

    });

}



function uploadblock(Blocks){

    fabric.Image.fromURL(Blocks,function(Img){

        block_img=Img;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_Y,left:player_X

        });
        canvas.add(block_img);

    });

}

window.addEventListener("keydown", keypress);

function keypress(e){
    var my_key_code=e.keyCode;
    console.log(my_key_code);

    if(my_key_code=="38"){
        up();
    }

    if(my_key_code=="37"){
        left();
    }

    if(my_key_code=="40"){
        down();
    }

    if(my_key_code=="39"){
        right();
    }

    if(my_key_code=="65"){
        uploadblock("cloud.jpg");
    }

    if(my_key_code=="66"){
        uploadblock("dark_green.png");
    }

    if(my_key_code=="67"){
        uploadblock("ground.png");
    }

    if(my_key_code=="68"){
        uploadblock("light_green.png");
    }

    if(my_key_code=="69"){
        uploadblock("roof.jpg");
    }

    if(my_key_code=="70"){
        uploadblock("trunk.jpg");
    }

    if(my_key_code=="71"){
        uploadblock("unique.png");
    }

    if(my_key_code=="72"){
        uploadblock("wall.jpg");
    }

    if(my_key_code=="73"){
        uploadblock("yellow_wall.png");
    }

    if(e.shiftKey==true && my_key_code=="187"){
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("Height").innerHTML=block_height;
        document.getElementById("Width").innerHTML=block_width;
    }

    if(e.shiftKey==true && my_key_code=="189"){
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("Height").innerHTML=block_height;
        document.getElementById("Width").innerHTML=block_width;
    }
}




function up(){
    player_Y=player_Y-block_height;
    canvas.remove(player_img);
    uploadBoy();
}

function down(){
    player_Y=player_Y+block_height;
    canvas.remove(player_img);
    uploadBoy();
}

function left(){
    player_X=player_X-block_width;
    canvas.remove(player_img);
    uploadBoy();
}

function right(){
    player_X=player_X+block_width;
    canvas.remove(player_img);
    uploadBoy();
}
