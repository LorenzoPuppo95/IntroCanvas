const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 100, 50);

// ctx.fillStyle = "green"
// ctx.fillRect(250, 200, 100, 200);

// ctx.strokeStyle = "crimson"
// ctx.lineWidth = 4
// ctx.strokeRect(450,50,150,300);

// for (let i = 0; i < 100; i++) {
//     const originX= Math.random()*600;
//     const originY= Math.random()*600;
//     const width= Math.random()*200;
//     const height= Math.random()*200;

//     ctx.fillRect(originX, originY, width, height);

//     const colorR = Math.random()*255;
//     const colorG = Math.random()*255;
//     const colorB = Math.random()*255;
//     const colorA = Math.random();

//     ctx.fillStyle = `rgba( ${colorR} ,${colorG},${colorB},${colorA})`;
// }

// setInterval(() => {

//     const width = Math.random() * 200;
//     const height = Math.random() * 200;

//     const originX = Math.random() * (600 - width);
//     const originY = Math.random() * (600 - height);

//     const colorR = Math.random() * 255;
//     const colorG = Math.random() * 255;
//     const colorB = Math.random() * 255;
//     const colorA = Math.random();

//     ctx.fillStyle = `rgba( ${colorR} ,${colorG},${colorB},${colorA})`;
//     ctx.fillRect(originX, originY, width, height);
// }, 150);

// // triangolo

// // ctx.beginPath();
// // ctx.moveTo(75, 50);
// // ctx.lineTo(100, 75);
// // ctx.lineTo(100, 25);
// // ctx.fill();

// // triangoli random multicolor

// setInterval(() => {
//     const width1 = Math.random() * 200;
//     const height1 = Math.random() * 200;
//     const width2 = Math.random() * 200;
//     const height2 = Math.random() * 200;

//     const originX = Math.random() * 600;
//     const originY = Math.random() * 600;

//     const colorR = Math.random() * 255;
//     const colorG = Math.random() * 255;
//     const colorB = Math.random() * 255;
//     const colorA = Math.random();

//     ctx.beginPath();
//     ctx.moveTo(originX, originY);
//     ctx.lineTo(originX + width1, originY + height1);
//     ctx.lineTo(originX + width2, originY + height2);
//     ctx.closePath();
//     ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//     ctx.fill();
// }, 50);


// setInterval(() => {
//     index = Math.random()* 10;
//     for (let i = 0; i < index; i++) {

//     const width1 = Math.random() * 200;
//     const height1 = Math.random() * 200;
//     const width2 = Math.random() * 200;
//     const height2 = Math.random() * 200;

//     const originX = Math.random() * 600;
//     const originY = Math.random() * 600;

//     const colorR = Math.random() * 255;
//     const colorG = Math.random() * 255;
//     const colorB = Math.random() * 255;
//     const colorA = Math.random();

//     ctx.beginPath();
//     ctx.moveTo(originX, originY);
//     ctx.lineTo(originX/2 + width1, originY/2 + height1);
//     ctx.lineTo(originX/2 + width2, originY/2 + height2);
//     ctx.closePath();
//     ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//     ctx.fill();
//     }

// }, 1550);

// setInterval(() => {
//     index = Math.random()* 4;
//     for (let i = 0; i < index; i++) {

//     const width1 = Math.random() * 200;
//     const height1 = Math.random() * 200;
//     const width2 = Math.random() * 200;
//     const height2 = Math.random() * 200;

//     const originX = Math.random() * 600;
//     const originY = Math.random() * 600;

//     const colorR = Math.random() * 255;
//     const colorG = Math.random() * 255;
//     const colorB = Math.random() * 255;
//     const colorA = Math.random();

//     ctx.beginPath();
//     ctx.moveTo(originX, originY);
//     ctx.lineTo(originX + width1, originY + height1);
//     ctx.lineTo(originX + width2, originY + height2);
//     ctx.lineTo(height1, width1)
//     ctx.lineTo(height2, width2)
//     ctx.closePath();
//     ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//     ctx.fill();
//     }

// }, 1750);

// setInterval(() => {
//     let index = Math.random() * 5;
//     for (let i = 0; i < index; i++) {

//         const width1 = Math.random() * 200;
//         const height1 = Math.random() * 200;
//         const width2 = Math.random() * 200;
//         const height2 = Math.random() * 200;

//         const originX = Math.random() * 600;
//         const originY = Math.random() * 600;

//         const colorR = Math.random() * 255;
//         const colorG = Math.random() * 255;
//         const colorB = Math.random() * 255;
//         const colorA = Math.random();

//         ctx.beginPath();
//         ctx.moveTo(originX, originY);
//         ctx.arcTo(originX + width1, originY + height1, originX + width2, originY + height2, Math.random() * 100);
//         ctx.arcTo(originX + width2, originY + height2, originX - height1, originY - width1, Math.random() * 100);
//         ctx.arcTo(originX - height1, originY - width1, originX - height2, originY - width2, Math.random() * 100);
//         ctx.arcTo(originX - height2, originY - width2, originX, originY, Math.random() * 100);
//         ctx.closePath();
//         ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//         ctx.fill();
//     }
// }, 1200);

// setInterval(() => {
//     const colorR = Math.random() * 255;
//     const colorG = Math.random() * 255;
//     const colorB = Math.random() * 255;
//     const colorA = Math.random();
//     ctx.fillStyle = `rgba(colorR,colorG,colorB,0.05)`;
//     ctx.fillRect(0,0,600,600);
// }, 2500);

// test forme sferiche

// setInterval(() => {
//     let index = Math.random() * 600;

//     setInterval(() => {
    

//         const colorR = Math.random() * 255;
//         const colorG = Math.random() * 255;
//         const colorB = Math.random() * 255;
//         const colorA = Math.random();

//         ctx.beginPath();
//         ctx.moveTo(300,300);
//         ctx.arcTo(500+index, 550+index, 450+index, 450+index, 550+index);
//         ctx.closePath();
//         ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//         ctx.fill();
//     }, 300);

//     setInterval(() => {
    

//         const colorR = Math.random() * 255;
//         const colorG = Math.random() * 255;
//         const colorB = Math.random() * 255;
//         const colorA = Math.random();

//         ctx.beginPath();
//         ctx.moveTo(300,300);
//         ctx.arcTo(100+index, 150+index, 150+index, 50+index, 50+index);
//         ctx.closePath();
//         ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//         ctx.fill();
//     }, 400);

//     setInterval(() => {
    
//         const colorR = Math.random() * 255;
//         const colorG = Math.random() * 255;
//         const colorB = Math.random() * 255;
//         const colorA = Math.random();

//         ctx.beginPath();
//         ctx.moveTo(300,300);
//         ctx.arcTo(300+index, 550+index, 250+index, 550+index, 50+index);
//         ctx.closePath();
//         ctx.fillStyle = `rgba(${colorR},${colorG},${colorB},${colorA})`;
//         ctx.fill();
//     }, 500);

// }, 1000);

function drawPokeball(x, y, radius) {
    // metà superiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    // metà inferiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // linea orizzontale
    ctx.beginPath();
    ctx.moveTo(x - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordo esterno
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordino interno
    ctx.beginPath();
    ctx.arc(x, y, radius / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // pulsante bianco
    ctx.beginPath();
    ctx.arc(x, y, radius / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function drawGreatBall(x, y, radius) {
    // metà superiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // metà inferiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // linea orizzontale
    ctx.beginPath();
    ctx.moveTo(x - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordo esterno
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordino interno
    ctx.beginPath();
    ctx.arc(x, y, radius / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // pulsante bianco
    ctx.beginPath();
    ctx.arc(x, y, radius / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // strisce rosse
    // boh un bordello
}

function drawUltraBall(x, y, radius) {
    // metà superiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // metà inferiore
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // linea orizzontale
    ctx.beginPath();
    ctx.moveTo(x - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordo esterno
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    // bordino interno
    ctx.beginPath();
    ctx.arc(x, y, radius / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // pulsante bianco
    ctx.beginPath();
    ctx.arc(x, y, radius / 6, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    // strisce gialle
    // bordello pure questo
}

// pulisci canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// disegna la poke ball
drawPokeball(canvas.width / 6, canvas.height / 2, 100);

// disegna la mega ball
drawGreatBall((canvas.width / 6) * 3, canvas.height / 2, 100);

// disegna la ultra ball
drawUltraBall((canvas.width / 6) * 5, canvas.height / 2, 100);