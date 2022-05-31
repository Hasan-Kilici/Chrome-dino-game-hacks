var sonuc = 9999999 / 39.9992;
Runner.config.ACCELERATION = 9999;
Runner.config.MAX_SPEED = 99999;
Runner.config.SPEED = 9999;
Runner.config.SPEED_DROP_COEFFICIENT = 9999;
Runner.config.INITIAL_JUMP_VELOCITY = 9999;
setInterval(()=>{
console.log(sonuc," Puan eklendi");
Runner.instance_.distanceRan = 9999999;
},1000);
Obstacle.types[0] = {
collisionBoxes: [CollisionBox, CollisionBox, CollisionBox],
height: 0,
minGap: 0,
minSpeed: 0,
multipleSpeed: 4,
type: "CACTUS_SMALL",
width: 0,
yPos: 0
}
Obstacle.types[1] = {
collisionBoxes: [CollisionBox, CollisionBox, CollisionBox],
height: 0,
minGap: 0,
minSpeed: 0,
multipleSpeed: 7,
type: "CACTUS_LARGE",
width: 0,
yPos: 0
}
Obstacle.types[2] = {
collisionBoxes:[CollisionBox, CollisionBox, CollisionBox, CollisionBox, CollisionBox],
frameRate: 166.66666666666666,
height: 0,
minGap: 0,
minSpeed: 8.5,
multipleSpeed: 999,
numFrames: 2,
speedOffset: 0.8,
type: "PTERODACTYL",
width: 0
}
