let entities = [];
let canvas;
let ctx;

function setUp() {
    canvas = document.getElementById("my-canvas-2");
    ctx = canvas.getContext("2d");
    
    for (let i = 0; i < 100; i++) {
        const rect={};
        rect.width = Math.random() * 200;
        rect.height = Math.random() * 200;
        rect.originX = Math.random() * (600 - rect.width);
        rect.originY = Math.random() * (600 - rect.height);
        entities.push(rect);
    }    
    // console.log("setup");
}

function update() {
    // rect.originX += 1;
    // rect.originY += 1;
    // console.log("update");
}

function draw() {
    for (let i = 0; i < entities.length; i++) {
        // ctx.clearRect(0,0,600,600);
        const rect=entities[i];
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
    }
    // console.log("draw");
}

function gameLoop(elapsedTime) {
    // console.log(elapsedTime);
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function start() {
    setUp();
    requestAnimationFrame(gameLoop);
}

start();