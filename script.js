// =========================
// Happy Birthday Atif
// Version 2.0
// =========================

const stars = document.getElementById("stars");
const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const loading = document.getElementById("loading");

// ⭐ Stars
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 2 + "s";
    stars.appendChild(star);
}

// ❤️ Hearts
function makeHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

setInterval(makeHeart, 500);

// 🌹 Roses
function makeFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = "🌹";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (6 + Math.random() * 5) + "s";
    flowers.appendChild(flower);

    setTimeout(() => flower.remove(), 11000);
}

setInterval(makeFlower, 700);

// 🎵 Start Button
startBtn.addEventListener("click", () => {
    loading.style.display = "none";
    music.play().catch(() => {});
});
