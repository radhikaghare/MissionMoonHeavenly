var player;
var obstacles1, obstacles2, obstacles3;
var SurvivingTime = 0;
var line1;
var gameState = "play";
var obstacleGroup;
var obstacleGroup2;
var obstacleGroup3;
var restart;


function preload(){
    playerPicture = loadImage("images/astronaut.png")
    obstacles1Picture = loadImage("images/meteor.png")
    obstacles2Picture = loadImage("images/satellite.png")
    obstacles3Picture = loadImage("images/ufo.png")
    backgroundImage = loadImage("images/space.jpg")
}

function setup(){
    createCanvas(1350,640)
    player = createSprite(650,570)
    player.scale = 0.5;
    player.addImage(playerPicture)

    restart = createSprite(1254,20,40,40)
    restart.visible = false

    obstacleGroup = new Group();
    obstacleGroup2 = new Group();

    

}

function draw(){
    background(backgroundImage)



    
    
    if(gameState === "GameOver"){

        restart.visible = true

        console.log("GameOver")
        text("GAME OVER",620, 300);
        obstacleGroup2.setVelocityYEach(0);
        obstacleGroup.setVelocityYEach(0);
        obstacleGroup.destroyEach();
        obstacleGroup2.destroyEach();

        if(mousePressedOver(restart)){
            restart.visible = false;
            console.log("restart");
            SurvivingTime = '0'
            gameState = "play"
        }

    }
    if(gameState === "play"){

        console.log("play")
    

        if(frameCount % 45 === 0){
            SurvivingTime = SurvivingTime+1
        }
    if(obstacleGroup.isTouching(player)){
        
        gameState = "GameOver"

        restart.visible = true


        
    }
    if(obstacleGroup2.isTouching(player)){
        
        gameState = "GameOver"

        restart.visible = true

        
        
    }

    if(keyDown(LEFT_ARROW)){
        player.x = player.x-10;
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+10;
    }


    spawnObstacles();
    spawnObstacles2();
}
    
    fill(255,255,254);
    textSize(15);

    

 
    
    

    
    drawSprites();

    fill(255,255,254);
    textSize(15);

    text('SurvivingTime : ' + SurvivingTime, 1100, 21);

    if(frameCount < 450){
        
        text("Hi Commander the lunar module pilot will be landing at the surface after some time so please survive the alien attack",185, 19)
    }
    if(frameCount < 225){
        text("Your surviving time increases every second GOOD LUCK", 30 , 475)

        
    }
    
    
    
    
    
    

}   

function spawnObstacles(){

    var randomx = Math.round(random(400, 1280));

    

    if(frameCount % 60 == 0){
        obstacles1 = createSprite(0, 0)
        obstacles1.x = randomx;
        obstacles1.addImage(obstacles1Picture)
        obstacles1.velocityY = 15

        obstacleGroup.add(obstacles1)
         
        var rand = Math.round(random(1,3))
        switch(rand){
            case 1: obstacles1.addImage(obstacles1Picture)
                    break;
            case 2: obstacles1.addImage(obstacles2Picture)
                    break;
            case 3: obstacles1.addImage(obstacles3Picture)
            default: break;     
        }
        obstacles1.scale = 0.5;
        obstacles1.lifetime = 300;
    }
}

function spawnObstacles2(){
    var randomx2 = Math.round(random(30, 800));
    if(frameCount % 70 == 0){
        obstacles2 = createSprite(0,0)
        obstacles2.x = randomx2;
        obstacles2.velocityY = 15

        obstacleGroup2.add(obstacles2)

        var rand2 = Math.round(random(1,3))
        switch(rand2){
            case 1: obstacles2.addImage(obstacles1Picture)
                    break;
            case 2: obstacles2.addImage(obstacles2Picture)
                    break;
            case 3: obstacles2.addImage(obstacles3Picture)
            default: break;     
        }
        obstacles2.scale = 0.5;
        obstacles2.lifetime = 300;
    
}
}

//function keyPressed(){
//
  //  if(keyCode === 32 && player.y >= 500){
    //    player.velocityY = -3 ;
      //}
      //else{player.velocityY = 3}

  
//}

