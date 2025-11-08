const goldMsg = document.getElementById("gold-msg");
let words = "Happy Birthday, Beautiful!";
let char = 0;
function revealLetter() {
  goldMsg.innerHTML = words.slice(0, char);
  if (char < words.length) {
    char++;
    setTimeout(revealLetter, 80);
  }
}
setTimeout(revealLetter, 600);

// Sparkles
function mkSparkle() {
  for (let i = 0; i < 38; i++) {
    let d = document.createElement("div");
    d.className = "sparkle";
    let size = Math.random() * 18 + 9;
    d.style.width = d.style.height = size + "px";
    d.style.left = Math.random() * 96 + "vw";
    d.style.top = Math.random() * 39 - 12 + "vh";
    d.style.animationDelay = Math.random() * 7 + "s";
    document.body.appendChild(d);
  }
}
mkSparkle();

// Falling roses (background)
const roseColors = ["#db0b2c", "#b30824", "#ff5476"];
function addRoses() {
  const roseBg = document.querySelector(".rose-bg");
  for (let i = 0; i < 7; i++) {
    let rose = document.createElement("div");
    rose.className = "rose-item";
    rose.style.left = Math.random() * 96 + "vw";
    rose.style.animationDelay = Math.random() * 4.5 + "s";
    let cMain = roseColors[Math.floor(Math.random() * roseColors.length)];
    rose.innerHTML = `<svg viewBox="0 0 50 68">
          <ellipse cx="25" cy="27" rx="18" ry="22" fill="${cMain}"/>
          <ellipse cx="25" cy="22" rx="8" ry="10" fill="#fff2fb"/>
          <ellipse cx="25" cy="32" rx="8" ry="11" fill="#b30824"/>
          <rect x="20" y="48" width="10" height="20" rx="5" fill="#3c6e23"/>
          <ellipse cx="37" cy="61" rx="7" ry="2.8" fill="#8ede8f" transform="rotate(-12 37 61)"/>
        </svg>`;
    roseBg.appendChild(rose);
  }
}
addRoses();

// Falling hearts (background)
function addHearts() {
  const heartBg = document.querySelector(".heart-bg");
  for (let i = 0; i < 9; i++) {
    let heart = document.createElement("div");
    heart.className = "heart-item";
    heart.style.left = Math.random() * 97 + "vw";
    heart.style.animationDelay = Math.random() * 5.3 + "s";
    heart.innerHTML = `<svg viewBox="0 0 36 32">
          <path d="M18 29S3 18.5 3 9.5A7.5 7.5 0 0 1 18 6a7.5 7.5 0 0 1 15 3.5C33 18.5 18 29 18 29z"
            fill="#ff4e79" stroke="#b71c1c" stroke-width="2"/>
        </svg>`;
    heartBg.appendChild(heart);
  }
}
addHearts();

// Rising balloons (background)
const balloonColors = ["#f76f8e", "#38e4ae", "#f7d358", "#ab8eff"];
function addBalloons() {
  const balloonBg = document.querySelector(".balloon-bg");
  for (let i = 0; i < 7; i++) {
    let balloon = document.createElement("div");
    balloon.className = "balloon-item";
    balloon.style.left = Math.random() * 95 + "vw";
    balloon.style.animationDelay = Math.random() * 6.1 + "s";
    let bc = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.innerHTML = `<svg viewBox="0 0 38 60">
          <ellipse cx="19" cy="28" rx="17" ry="21" fill="${bc}" />
          <rect x="17" y="48" width="4" height="12" rx="2" fill="#887b68"/>
          <ellipse cx="19" cy="57" rx="6" ry="2.5" fill="#bdeff3"/>
        </svg>`;
    balloonBg.appendChild(balloon);
  }
}
addBalloons();

// Fireworks
function showFirework(x, y) {
  const cset = [
    "#fde18b",
    "#ffe7fa",
    "#fad4ee",
    "#fd92b1",
    "#f7b7eb",
    "#ffe4cb",
    "#d1dffa",
    "#fbdc98",
  ];
  for (let j = 0; j < 18; j++) {
    let f = document.createElement("div");
    f.className = "firework";
    let rad = Math.PI * 2 * (j / 18);
    let dist = Math.random() * 95 + 33;
    f.style.left = x + Math.cos(rad) * dist + "px";
    f.style.top = y + Math.sin(rad) * dist + "px";
    f.style.background = cset[Math.floor(Math.random() * cset.length)];
    f.style.width = f.style.height = Math.random() * 10 + 7 + "px";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1100);
  }
}
setInterval(function () {
  let x = window.innerWidth * (0.21 + 0.56 * Math.random());
  let y = window.innerHeight * (0.28 + 0.28 * Math.random());
  showFirework(x, y);
}, 1200);
