"use strict";
const canvas = document.getElementById('CanvasContiner');
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 800;
const keys = {};
const player = {
    x: 0,
    y: 0,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 10,
    moving: false
};
const PlayerSprite = new Image();
PlayerSprite.src = "/assets/UserSprite.png";
const Background = new Image();
Background.src = "/assets/Background.jfif";
function drawSprite(img, sourceX, sourceY, sourceW, sourceH, destinationX, destinationY, destinationWidth, destinationHeight) {
    ctx.drawImage(img, sourceX, sourceY, sourceW, sourceH, destinationX, destinationY, destinationWidth, destinationHeight);
}
function Animate() {
    console.log('next frame');
    //Clear Canvas and Draw Background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(Background, 0, 0, canvas.width, canvas.height);
    //Draw Player
    drawSprite(PlayerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width * (1.5 / (window.innerWidth / window.innerHeight)), player.height * 1.5);
    //Next Frame
    requestAnimationFrame(Animate);
}
Animate();
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    console.log(keys);
});
window.addEventListener("keyup", (e) => {
    delete keys[e.key];
});
//# sourceMappingURL=index.js.map