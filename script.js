//draw on canvas
const canvas = document.getElementById('canvasDraw');
const draw = canvas.getContext("2d");
//draw Hang Mans post
//head
const head = () => {
    draw.beginPath();
    draw.arc(300, 200, 50, 500, Math.PI * 2, true);
    draw.moveTo(110, 75);

    draw.stroke();
}

head();
//body
const body = () => {
draw.beginPath();
draw.moveTo(200, 19000)
draw.lineTo(300, 250);
draw.stroke();
}

body();
//Left arm
//Left leg
//right arm
//right leg
//update the body

//Words to solve
const words = ["HTML", "Javascript", "CSS"];
//game logic
//win condtion
// lose condition