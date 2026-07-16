// ============================
// MUSKAN BIRTHDAY WEBSITE
// VERSION 1.0
// ============================

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

scenes[index].classList.add("active");

}

function nextScene(){

currentScene++;

if(currentScene>=scenes.length){

currentScene=scenes.length-1;

return;

}

showScene(currentScene);

}

const startBtn=document.getElementById("startBtn");

const music=document.getElementById("bgMusic");

startBtn.addEventListener("click",()=>{

document.getElementById("loading-screen").style.display="none";

music.play();

showScene(1);

setInterval(nextScene,6000);

});// ============================
// STARS
// ============================

const starsContainer=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.animationDuration=(2+Math.random()*3)+"s";

starsContainer.appendChild(star);

}

// ============================
// HEARTS
// ============================

const heartsContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>heart.remove(),10000);

}

setInterval(createHeart,400);

// ============================
// FLOWERS
// ============================

const flowersContainer=document.getElementById("flowers");

function createFlower(){

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌹";

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(25+Math.random()*25)+"px";

flower.style.animationDuration=(6+Math.random()*6)+"s";

flowersContainer.appendChild(flower);

setTimeout(()=>flower.remove(),12000);

}

setInterval(createFlower,700);// ===== Floating Hearts =====
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animation = "floatUp 6s linear forwards";
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);

// ===== Falling Flowers =====
function createFlower() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌹";
    flower.style.position = "fixed";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-40px";
    flower.style.fontSize = (20 + Math.random() * 15) + "px";
    flower.style.animation = "fallDown 8s linear forwards";
    flower.style.pointerEvents = "none";
    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 700);
