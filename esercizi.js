// //data una variabile chiamata gridSize, 
// //creare una scaccheria di dimensioni gridsize * gridside
// let canvas;
// let ctx;
// const gridSize = 8;

// function setUp() {
//     canvas = document.getElementById('my-canvas-esercizi');
//     ctx = canvas.getContext('2d');
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

// }

// function update() {
// }

// function draw() {
//     const cellSize = Math.min(canvas.width, canvas.height) / gridSize;
//     for (let row = 0; row < gridSize; row++) {
//         for (let col = 0; col < gridSize; col++) {
//             if ((row + col) % 2 === 0) {
//                 ctx.fillStyle = 'white';
//             } else {
//                 ctx.fillStyle = 'black';
//             }
//             ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
//         }
//     }
// }

// function gameLoop(elapsedTime) {
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp(),
//         requestAnimationFrame(gameLoop);
// }

// start();

//simulare nevicata
let entities = [];
let canvas;
let ctx;
const snowflakeAmount = 1000;

function setUp() {
    canvas = document.getElementById('my-canvas-esercizi');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < snowflakeAmount; i++) {
        let currSnowflake = {};
        currSnowflake.originX = Math.random() * canvas.width;
        currSnowflake.originY = Math.random() * canvas.height;
        currSnowflake.speedX = ((Math.random() * 1)) - 0.5;
        currSnowflake.speedY = ((Math.random() * 2)) + 1;
        currSnowflake.size = Math.random() * 5 + 2;
        entities.push(currSnowflake);
    }
}

function update() {
    for (let i = 0; i < entities.length; i++) {
        const currSnowflake = entities[i];
        currSnowflake.originX += currSnowflake.speedX;
        currSnowflake.originY += currSnowflake.speedY;

        if (currSnowflake.originY > canvas.height) {
            currSnowflake.originX = Math.random() * canvas.width;
            currSnowflake.originY = 0;
        }

        if (currSnowflake.originX < 0 || currSnowflake.originX > canvas.width) {
            currSnowflake.speedX *= -1;
        }
    }
}

function drawSnowflake(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = "#ecfff8";
    ctx.lineWidth = 2;

    for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -size);
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 4, -size / 4);
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(-size / 4, -size / 4);
        ctx.stroke();
        ctx.rotate(Math.PI / 3);
    }
    ctx.restore();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = " rgba(255,255,255,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < entities.length; i++) {
        const currSnowflake = entities[i];
        drawSnowflake(currSnowflake.originX, currSnowflake.originY, currSnowflake.size);
    }
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


//rettangoli di stessa altezza ad altezze posizionali diversi
//1) che si muovano verso destra a velocità diverse
// let rectangles = [];
// const rows = 10;
// const rowHeight = window.innerHeight / rows;

// function setUp() {
//     canvas = document.getElementById('my-canvas-esercizi');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     for (let i = 0; i < rows; i++) {
//         let rect = {};
//         rect.y = i * rowHeight;
//         rect.x = 0;
//         rect.width = Math.random() * 100 + 50;
//         rect.speed = Math.random() * 2 + 1;
//         rectangles.push(rect);
//     }
// }

// function update() {
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         rect.x += rect.speed;
//         if (rect.x > canvas.width) {
//             rect.x = -rect.width;
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         ctx.fillStyle = 'black';
//         ctx.fillRect(rect.x, rect.y, rect.width, rowHeight);
//     }
// }

// function gameLoop(elapsedTime) {
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp();
//     requestAnimationFrame(gameLoop);
// }

// start();

//2) righe pari verso destra, righe dispari verso sinistra
// let rectangles = [];
// const rows = 10;
// const rowHeight = window.innerHeight / rows;

// function setUp() {
//     canvas = document.getElementById('my-canvas-esercizi');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     for (let i = 0; i < rows; i++) {
//         let rect = {};
//         rect.y = i * rowHeight;
//         rect.x = i % 2 === 0 ? 0 : canvas.width; // Righe pari iniziano da sinistra, dispari da destra
//         rect.width = Math.random() * 100 + 50;
//         rect.speed = Math.random() * 2 + 1;
//         rect.direction = i % 2 === 0 ? 1 : -1; // Direzione: 1 per destra, -1 per sinistra
//         rectangles.push(rect);
//     }
// }

// function update() {
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         rect.x += rect.speed * rect.direction;

//         if (rect.direction === 1 && rect.x > canvas.width) {
//             rect.x = -rect.width;
//         } else if (rect.direction === -1 && rect.x < -rect.width) {
//             rect.x = canvas.width;
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         ctx.fillStyle = 'black';
//         ctx.fillRect(rect.x, rect.y, rect.width, rowHeight);
//     }
// }

// function gameLoop(elapsedTime) {
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp();
//     requestAnimationFrame(gameLoop);
// }

// start();

//3) più rettangoli per riga
// let rectangles = [];
// const rows = 100;
// const rowHeight = window.innerHeight / rows;
// const rectsPerRow = 30; // Numero di rettangoli per riga
// const minHeight = 2; // Altezza minima dei rettangoli

// function setUp() {
//     canvas = document.getElementById('my-canvas-esercizi');
//     ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     for (let i = 0; i < rows; i++) {
//         const rowSpeed = Math.random() * 14 + 16; // Velocità casuale tra 16 e 30 per la riga
//         for (let j = 0; j < rectsPerRow; j++) {
//             let rect = {};
//             rect.width = Math.random() * 100 + 50;
//             rect.height = Math.random() * (rowHeight - minHeight) + minHeight; // Altezza casuale non più grande dell'altezza della riga e non più piccola di minHeight
//             rect.y = i * rowHeight + (rowHeight - rect.height) / 2; // Centra verticalmente il rettangolo nella riga
//             rect.x = i % 2 === 0 ? -j * 150 : canvas.width + j * 150;
//             rect.speed = rowSpeed;
//             rect.direction = i % 2 === 0 ? 1 : -1; // Direzione: 1 per destra, -1 per sinistra
//             rect.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//             rectangles.push(rect);
//         }
//     }
// }

// function update() {
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         rect.x += rect.speed * rect.direction;

//         if (rect.direction === 1 && rect.x > canvas.width) {
//             rect.x = -rect.width;
//         } else if (rect.direction === -1 && rect.x < -rect.width) {
//             rect.x = canvas.width;
//         }
//     }
// }

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         ctx.fillStyle = rect.color;
//         ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
//     }
// }

// function gameLoop(elapsedTime) {
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start() {
//     setUp();
//     requestAnimationFrame(gameLoop);
// }

// start();



//bubble sort algorithmjs