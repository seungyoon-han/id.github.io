
const projects = [
  {
    category: "Hanji",
    works: [
      "천천히 무너지는 중 (2026)",
      "금붕어 X마리가 연못에 생긴 날 (2025)",
      "네잎클로버 찾기 (2025)",
      "독버섯이 지면 초록 기둥만 남는다 (2025)",
      "태양에 닿을 때까지 (2025)",
      "사가니손인몬젠초진초 (2025)",
      "다자이후시사이후 (2025)",
      "사가토리이모토코자카초 (2025)",
      "이륜차 커튼 뒤엔 풀이 사라진 흙더미 (2025)",
      "드로잉 (2025)",
      "슬픈 눈을 보기까지 걸리는 시간 (2026)",
      "새소리 (2026)",
      "딱지 (2023)",
      "죽은나무_시리즈 (2023)",
      "먹과 투명먹의 무늬 (2023)",
      "물자국 (2023)",
      "얼음자국 (2023)",
      "[ ], 화선지에 얼음과 투명먹 먹 (2023)",
      "{ }, 옥당지에 얼음과 투명먹 먹 (2023)",
      "[ ], 옥당지에 얼음과 먹 (2023)",
      "< >, 화선지에 투명먹과 먹 (2023)",
      "( ),화선지에 얼음 먹, 두 겹 (2023)",
      "우주먼지와 아기별_시리즈 (2023)"
    ]
  },
  {
    category: "Suseok",
    works: [
      "5월 17일– 분수 (2025)",
      "1월 22일– 예류 (2025)",
      "11월 5일– 손등 (2025)",
      "11월 15일– 낙엽 (2025)",
      "사라진 뒤에 남은 것 (2025)",
      "등과 배 (2025)"
    ]
  }
].map((group, groupIndex) => ({
  category: group.category,
  works: group.works.map((title, index) => ({
    id: `${groupIndex}-${index}`,
    title,
    images: []
  }))
}));

const statementHTML = `
  <div class="text-section artist-statement">
    <h2>artist statement</h2>
    <h3>머물지 않는 것들의 기록</h3>

    <div class="statement-body">
      <p>일상의 견고한 질서 위로 예기치 않게 마주치는 이질적인 존재에 시선이 머문다.<br>규칙적인 풍경을 비집고 나타난 '어긋난 대상'은 생경한 감각으로 다가온다. 설명되지 않는 방식으로 자리 잡은 사물은 의지와 관계없이 일상의 일부가 되었다가, 예고 없이 사라진다. 이 불안정한 대상은 그 순간의 공기와 온도, 소리와 같은 감각들을 한데 머금고 있다. 시선은 대상과 그 주변의 감각이 분리되지 않은 상태에서 오래 머문다.</p>

      <p>이러한 존재가 언젠가 자취를 감출지도 모른다는 위태로움에서 작업은 시작된다. 다시 찾아간 자리에 사라져 있을지도 모른다는 불안은 기록을 낳는다. 주변 풍경을 비워내고 대상만을 남기는 방식은 그 순간 마주한 감각을 흩뜨리지 않기 위함이다. 여백 속 화면의 중심에 놓인 대상은 발견되었던 당시의 인상을 유지한 채 화면에 남는다. 주변으로부터 분리된 대상은 실제 크기와 관계없이 확대되어 그것이 시선에 남겼던 생경함을 드러낸다.</p>

      <p>세필로 그어 내리는 얇은 먹선은 이러한 감각을 드러내는 방식이다. 일기에 가볍게 올라가는 연필의 인상을 빌려오되, 쉽게 지워지고 흐려지는 흑연과 달리 먹은 한지 조직 사이로 스며든다. 이는 다른 이들의 시선에는 포착되지 못한 채 유실될 법한 이름 모를 존재를 붙들어 두기 위함이다. 흐릿하면서도 선명한 중묵 선들은 화면 위에서 겹치고 스쳐 지나가며 미세한 움직임을 남긴다. 촘촘히 반복되어 하나의 형상이 점차 화면 위에 드러나지만, 그 안에는 여전히 움직임을 품은 수 많은 선들의 흔적이 남아 있다. 짧고 유연한 선들은 대상이 지닌 갑작스러운 출현과 사라질 듯한 움직임을 따라 형성되며, 화면 위의 형상은 그 움직임이 잠시 붙들린 결과에 가깝다.</p>

      <p>얇고 투명한 순지는 대상이 지닌 위태로움을 드러낸다. 한지에 스며든 먹선과 미세한 변화에도 쉽게 반응하는 순지 사이에서, 붙들고자 하는 의지와 연약한 상태가 동시에 드러난다. 화면 위에 남겨진 대상은 일상의 일부로 확정되지 않고, 처음 마주했던 순간의 생경함을 유지한다.</p>

      <p>선의 층위 안에서 무심코 지나쳤던 무언가는 화면 위에 지워지지 않는 흔적으로 남는다. 그것은 특정한 이름이나 의미로 고정되지 않은 채, 시선이 멈추었던 순간의 어긋남으로 머문다. 집요한 손질은 그 기척을 가늠하며 감각의 흔적을 짚어간다. 무심히 지나쳤던 대상은 어느 순간 다시 떠오르고, 사라진 뒤에도 쉽게 지워지지 않는다. 작업은 그 기척을 따라가며, 언젠가 자취를 감출지도 모르는 존재를 기록으로 남겨 두기 위한 시도이다.</p>
    </div>

    <p class="statement-date">2026년 04월 29일 작성</p>
  </div>
`;

const aboutHTML = `
  <div class="text-section">
    <h2>CV</h2>

    <div class="cv-block">
      <p>한승윤 (b.2003)</p>
      <p>학력</p>
      <p>현 홍익대학교 미술대학 동양화과 재학</p>
    </div>

    <div class="cv-block">
      <p>Han Seungyoon (b.2003)</p>
      <p>education</p>
      <p>Present, Oriental Painting, Hongik University, Seoul, Korea</p>
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

    const first = workList.querySelector("[data-work]");
    if (first) selectWork(first.dataset.work);
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
        <p>작품 이미지를 추가할 예정입니다.</p>
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

