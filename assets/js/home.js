
// 돌 이미지 회전 애니메이션
const stone = document.getElementById("rotating-stone");

const frames = [
  "back-and-belly_01.png",
  "back-and-belly_02.png",
  "back-and-belly_03.png",
  "back-and-belly_04.png",
  "back-and-belly_05.png",
  "back-and-belly_06.png",
  "back-and-belly_07.png"
];

const folder = "./assets/images/back-and-belly/";

// 이미지 미리 불러오기
frames.forEach((filename) => {
  const image = new Image();
  image.src = folder + filename;
});

// 0.5초마다 이미지 변경
let currentFrame = 0;

setInterval(() => {
  currentFrame = (currentFrame + 1) % frames.length;
  stone.src = folder + frames[currentFrame];
}, 500);


// ART / VIDEO 모드 전환
const videoLink = document.querySelector(
  '.home-nav a[href="./video/index.html"]'
);

const artLink = document.querySelector(
  '.home-nav a[href="./art/index.html"]'
);

// VIDEO에 마우스를 올리면 검은색
videoLink.addEventListener("mouseenter", () => {
  document.body.classList.add("video-mode");
});

// ART에 마우스를 올리면 흰색
artLink.addEventListener("mouseenter", () => {
  document.body.classList.remove("video-mode");
});
