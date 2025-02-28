let entities = [];
let canvas;
let ctx;
let rect2 = {}

function setUp() {
    canvas = document.getElementById('my-canvas-3');
    ctx = canvas.getContext('2d');
    for (let i = 0; i < 10000; i++) {
        const rect = {};
        rect.width = Math.random()*2;
        rect.height = Math.random()*2;
        rect.originX = (canvas.width / 2) - (rect.width / 2);
        rect.originY = (canvas.height / 2)  - (rect.height / 2);
        rect.speedX = ((Math.random() * 4)) - 2;
        rect.speedY = ((Math.random() * 4)) - 2;
        rect.red = Math.random()*255;
        rect.green = Math.random()*255;
        rect.blue = Math.random()*255;
        entities.push(rect);
    }

    rect2 = {
        width : 10,
        height : 10,
        originX : (canvas.width / 2) - 5,
        originY : (canvas.height / 2)  - 5,
        speedX : (((Math.random() * 10)) - 5)*15,
        speedY : (((Math.random() * 10)) - 5)*15,
        red : Math.random()*255,
        green : Math.random()*255,
        blue : Math.random()*255,
        rollX: Math.random(),
        rollY: Math.random()
    }

}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        rect.originX += rect.speedX;
        rect.originY += rect.speedY;
        // rect.speedX = ((Math.random() * 40)) - 20;
        // rect.speedY = ((Math.random() * 40)) - 20;
        const rollX = Math.random();
        const rollY = Math.random();

        if (rollX > 0.5){
            const speedDelta = (Math.random() * 0.2) -0.1;
            rect.speedX += speedDelta;
        }
        if (rollY > 0.5){
            const speedDelta = (Math.random() * 0.2) -0.1;
            rect.speedY += speedDelta;
        }

        if (rect.originX < 0 || rect.originX > canvas.width){
            rect.speedX *= -1;
        }

        if (rect.originY < 0 || rect.originY > canvas.height){
            rect.speedY *= -1;
        }
    }

    rect2.originX += rect2.speedX;
    rect2.originY += rect2.speedY;

    if (rect2.rollX > 0.5) {
        const speedDelta = (Math.random() * 0.2) - 0.1;
        rect2.speedX += speedDelta;
    }
    if (rect2.rollY > 0.5) {
        const speedDelta = (Math.random() * 0.2) - 0.1;
        rect2.speedY += speedDelta;
    }

    if (rect2.originX < 0 || rect2.originX > canvas.width) {
        rect2.speedX *= -1;
    }

    if (rect2.originY < 0 || rect2.originY > canvas.height) {
        rect2.speedY *= -1;
    }
}


function draw() {
    ctx.fillStyle = " rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, 1000, 800);
    
    for (let i = 0; i < entities.length; i++) {
        const rect = entities[i];
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
        ctx.fillStyle = `rgba(${rect.red},${rect.green},${rect.blue},1)`;
        // if (rect.originX < 0 || rect.originX > canvas.width || rect.originY < 0 || rect.originY > canvas.height) {
        //     rect.originX = (canvas.width / 2) - (rect.width / 2);
        //     rect.originY = (canvas.height / 2)  - (rect.height / 2);
        // }
    }
    ctx.fillRect(rect2.originX, rect2.originY, rect2.width, rect2.height);
    ctx.fillStyle = `rgba(${rect2.red},${rect2.green},${rect2.blue},1)`;
}


function gameLoop(elapsedTime) {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function start() {
    setUp(),
        requestAnimationFrame(gameLoop);
}

start();