
const projects = [
  {
    category: "Art Film",
    works: [
      {
        id: "rem",
        title: "REM (Rapid Eye Movement)_꿈을 빌려 온 것들 (2026)",
        images: []
      }
    ]
  },
  {
    category: "Brand Film Project",
    works: [
      {
        id: "granhand",
        title: "GRANHAND_그랑핸드 (2026)",
        images: []
      }
    ]
  },
  {
    category: "K-Culture Promotion",
    works: [
      {
        id: "ink",
        title: "Traces of Korea_Ink (2026)",
        images: []
      }
    ]
  },
  {
    category: "Experimental Art",
    works: [
      {
        id: "stardust",
        title: "Stardust Cycle_별의 탄생과 죽음의 순환 (2025)",
        images: []
      }
    ]
  }
];

const statementHTML = `
  <div class="text-section">
    <h2>art description</h2>
    <h3>Video Works</h3>
  </div>
`;

const aboutHTML = `
  <div class="text-section">
    <h2>CV</h2>

    <div class="cv-block">
      <p>한승윤 (b.2003)</p>
      <p>학력</p>
      <p>홍익대학교 미술대학 동양화과 - 2027</p>
    </div>

    <div class="cv-block">
      <p>Han Seungyoon (b.2003)</p>
      <p>education</p>
      <p>Oriental Painting, Hongik University, Seoul, Korea - 2027</p>
    </div>

    <h2 class="contact-heading">Contact</h2>
    <p>Instagram | @han.s.yoon_archive</p>
    <p>Email | sungyun.ham@gmail.com</p>
  </div>
`;

const layout = document.getElementById("layout");
const menuButtons = [...document.querySelectorAll(".menu button")];
const workList = document.getElementById("work-list");
const workContent = document.getElementById("work-content");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function alignColumns() {
  const button = document.querySelector(
    '.menu button[data-section="works"]'
  );

  if (!button) return;

  const layoutTop = layout.getBoundingClientRect().top;
  const buttonTop = button.getBoundingClientRect().top - layoutTop;
  const style = getComputedStyle(button);
  const textTop = buttonTop + parseFloat(style.paddingTop || 0);

  layout.style.setProperty(
    "--menu-baseline-top",
    `${Math.max(0, textTop)}px`
  );

  layout.style.setProperty(
    "--content-top",
    `${Math.max(0, textTop - 3)}px`
  );
}

function showSection(section) {
  menuButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.section === section
    );
  });

  layout.classList.toggle("works-mode", section === "works");
  layout.classList.toggle("info-mode", section !== "works");

  workList.innerHTML = "";
  workContent.innerHTML = "";
  workContent.scrollTop = 0;

  if (section === "works") {
    const inner = document.createElement("div");
    inner.className = "work-list-inner";

    projects.forEach(group => {
      const container = document.createElement("div");
      container.className = "work-group";

      const heading = document.createElement("h2");
      heading.textContent = group.category;
      container.appendChild(heading);

      group.works.forEach(work => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "work-item";
        button.dataset.work = work.id;
        button.textContent = work.title;
        container.appendChild(button);
      });

      inner.appendChild(container);
    });

    workList.appendChild(inner);
  }

  if (section === "statement") {
    workContent.innerHTML = statementHTML;
  }

  if (section === "about") {
    workContent.innerHTML = aboutHTML;
  }

  requestAnimationFrame(alignColumns);
}

function selectWork(id) {
  const work = projects
    .flatMap(group => group.works)
    .find(item => item.id === id);

  if (!work) return;

  workList.querySelectorAll(".work-item").forEach(button => {
    button.classList.toggle("active", button.dataset.work === id);
  });

  const images = work.images || [];

  if (images.length) {
    workContent.innerHTML = images.map(image => `
      <figure class="artwork-figure">
        <img
          class="artwork-image"
          src="${escapeHTML(image.src)}"
          alt="${escapeHTML(work.title)}"
        >
        <figcaption class="artwork-caption">
          ${escapeHTML(image.caption || "")}
        </figcaption>
      </figure>
    `).join("");
  } else {
    workContent.innerHTML = `
      <div class="image-placeholder">
        ${escapeHTML(work.title)}
        <p>작품 이미지와 영상을 추가할 예정입니다.</p>
      </div>
    `;
  }

  workContent.scrollTop = 0;
}

menuButtons.forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
  });
});

workList.addEventListener("click", event => {
  const button = event.target.closest("[data-work]");
  if (button) selectWork(button.dataset.work);
});

window.addEventListener("resize", alignColumns);
window.addEventListener("load", alignColumns);

if (document.fonts) {
  document.fonts.ready.then(alignColumns);
}

// 초기 화면: 모든 목차와 콘텐츠 닫기
function resetPage() {
  menuButtons.forEach(button => {
    button.classList.remove("active");
  });

  layout.classList.remove("works-mode", "info-mode");

  workList.innerHTML = "";
  workContent.innerHTML = "";

  workList.scrollTop = 0;
  workContent.scrollTop = 0;

  requestAnimationFrame(alignColumns);
}

document.getElementById("reset-page").addEventListener("click", resetPage);

resetPage();

// 왼쪽 아래 돌 회전 애니메이션
const sidebarStone = document.querySelector(".sidebar-stone");

const stoneFrames = [
  "back-and-belly_01.png",
  "back-and-belly_02.png",
  "back-and-belly_03.png",
  "back-and-belly_04.png",
  "back-and-belly_05.png",
  "back-and-belly_06.png",
  "back-and-belly_07.png"
];

const stoneFolder = "../assets/images/back-and-belly/";

// 이미지 미리 불러오기
stoneFrames.forEach(filename => {
  const image = new Image();
  image.src = stoneFolder + filename;
});

let stoneFrameIndex = 0;

setInterval(() => {
  stoneFrameIndex = (stoneFrameIndex + 1) % stoneFrames.length;
  sidebarStone.src = stoneFolder + stoneFrames[stoneFrameIndex];
}, 500);

