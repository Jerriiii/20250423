let daisies = [];
let bees = [];
let beeSpeed = 2;
let menu;
let iframeContainer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1'); // 將畫布層級設為最低

  // 初始化雛菊，平均分布
  let cols = 10; // 列數
  let rows = 5;  // 行數
  let gridWidth = width / cols;
  let gridHeight = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridWidth + random(gridWidth * 0.2, gridWidth * 0.8);
      let y = j * gridHeight + random(gridHeight * 0.2, gridHeight * 0.8);
      let size = random(20, 50);
      daisies.push({ x, y, size });
    }
  }

  // 初始化蜜蜂
  for (let i = 0; i < 5; i++) {
    bees.push({
      x: random(width),
      y: random(height),
      vx: random(-beeSpeed, beeSpeed),
      vy: random(-beeSpeed, beeSpeed),
      boosted: false,
      boostTimer: 0
    });
  }

  // 創建選單容器
  menu = createDiv();
  menu.style('position', 'absolute');
  menu.style('top', '10px');
  menu.style('right', '10px');
  menu.style('background-color', 'rgba(52, 78, 65, 0.8)'); // 透明的 #344e41
  menu.style('padding', '20px'); // 增加內邊距
  menu.style('border', '2px solid #8B4513'); // 深咖啡色邊框
  menu.style('border-radius', '10px'); // 圓角
  menu.style('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.3)'); // 更大的陰影
  menu.style('font-size', '18px'); // 增大字體
  menu.style('color', '#ffffff'); // 白色文字
  menu.style('opacity', '1'); // 固定透明度為 1，確保選單一直可見

  // 創建 iframe 容器
  iframeContainer = createDiv();
  iframeContainer.style('position', 'fixed');
  iframeContainer.style('top', '50%');
  iframeContainer.style('left', '50%');
  iframeContainer.style('transform', 'translate(-50%, -50%)');
  iframeContainer.style('width', '80%');
  iframeContainer.style('height', '80%');
  iframeContainer.style('background-color', '#ffffff');
  iframeContainer.style('border', '2px solid #8B4513');
  iframeContainer.style('box-shadow', '0 4px 10px rgba(0, 0, 0, 0.3)');
  iframeContainer.style('display', 'none'); // 初始隱藏
  iframeContainer.style('z-index', '10');

  // 創建 iframe
  let iframe = createElement('iframe');
  iframe.parent(iframeContainer);
  iframe.style('width', '100%');
  iframe.style('height', '90%');
  iframe.style('border', 'none');

  // 創建回首頁按鈕
  let closeButton = createButton('回首頁');
  closeButton.parent(iframeContainer);
  closeButton.style('position', 'absolute');
  closeButton.style('top', '10px');
  closeButton.style('right', '10px');
  closeButton.style('background-color', '#8B4513');
  closeButton.style('color', '#ffffff');
  closeButton.style('border', 'none');
  closeButton.style('padding', '10px');
  closeButton.style('border-radius', '5px');
  closeButton.mousePressed(() => {
    iframeContainer.style('display', 'none'); // 隱藏 iframe 容器
  });

  // 創建選單按鈕
  let introButton = createButton('自我介紹');
  introButton.parent(menu);
  introButton.style('margin', '10px 0');
  introButton.style('width', '100%');
  introButton.style('background-color', '#8B4513');
  introButton.style('color', '#ffffff');
  introButton.style('border', 'none');
  introButton.style('padding', '10px');
  introButton.style('border-radius', '5px');
  introButton.mousePressed(() => {
    iframe.attribute('src', 'https://jerriiii.github.io/introduction/'); // 替換為新的自我介紹網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  let portfolioButton = createButton('作品集');
  portfolioButton.parent(menu);
  portfolioButton.style('margin', '10px 0');
  portfolioButton.style('width', '100%');
  portfolioButton.style('background-color', '#8B4513');
  portfolioButton.style('color', '#ffffff');
  portfolioButton.style('border', 'none');
  portfolioButton.style('padding', '10px');
  portfolioButton.style('border-radius', '5px');

  // 創建作品集子選單
  let portfolioSubMenu = createDiv();
  portfolioSubMenu.parent(menu);
  portfolioSubMenu.style('display', 'none'); // 初始隱藏
  portfolioSubMenu.style('margin-top', '10px');

  let week1Button = createButton('第一周');
  week1Button.parent(portfolioSubMenu);
  week1Button.style('margin', '5px 0');
  week1Button.style('width', '100%');
  week1Button.style('background-color', '#bb9457'); // 修改顏色為 #bb9457
  week1Button.style('color', '#ffffff');
  week1Button.style('border', 'none');
  week1Button.style('padding', '10px');
  week1Button.style('border-radius', '5px');
  week1Button.mousePressed(() => {
    iframe.attribute('src', 'https://jerriiii.github.io/20250221/'); // 替換為第一周的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  let week2Button = createButton('第二周');
  week2Button.parent(portfolioSubMenu);
  week2Button.style('margin', '5px 0');
  week2Button.style('width', '100%');
  week2Button.style('background-color', '#bb9457'); // 修改顏色為 #bb9457
  week2Button.style('color', '#ffffff');
  week2Button.style('border', 'none');
  week2Button.style('padding', '10px');
  week2Button.style('border-radius', '5px');
  week2Button.mousePressed(() => {
    iframe.attribute('src', 'https://jerriiii.github.io/20250307/'); // 替換為第二周的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  let week3Button = createButton('第三周');
  week3Button.parent(portfolioSubMenu);
  week3Button.style('margin', '5px 0');
  week3Button.style('width', '100%');
  week3Button.style('background-color', '#bb9457'); // 修改顏色為 #bb9457
  week3Button.style('color', '#ffffff');
  week3Button.style('border', 'none');
  week3Button.style('padding', '10px');
  week3Button.style('border-radius', '5px');
  week3Button.mousePressed(() => {
    iframe.attribute('src', 'https://jerriiii.github.io/20250328/'); // 替換為第三周的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  let midtermButton = createButton('期中報告');
  midtermButton.parent(portfolioSubMenu);
  midtermButton.style('margin', '5px 0');
  midtermButton.style('width', '100%');
  midtermButton.style('background-color', '#bb9457'); // 修改顏色為 #bb9457
  midtermButton.style('color', '#ffffff');
  midtermButton.style('border', 'none');
  midtermButton.style('padding', '10px');
  midtermButton.style('border-radius', '5px');
  midtermButton.mousePressed(() => {
    iframe.attribute('src', 'https://hackmd.io/@WAC4ZES_RUuHDOA0n1Uy6A/Bk8zFAEklg'); // 替換為期中報告的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  // 點擊作品集按鈕顯示/隱藏子選單
  portfolioButton.mousePressed(() => {
    if (portfolioSubMenu.style('display') === 'none') {
      portfolioSubMenu.style('display', 'block');
    } else {
      portfolioSubMenu.style('display', 'none');
    }
  });

  let quizButton = createButton('測驗卷');
  quizButton.parent(menu);
  quizButton.style('margin', '10px 0');
  quizButton.style('width', '100%');
  quizButton.style('background-color', '#8B4513');
  quizButton.style('color', '#ffffff');
  quizButton.style('border', 'none');
  quizButton.style('padding', '10px');
  quizButton.style('border-radius', '5px');
  quizButton.mousePressed(() => {
    iframe.attribute('src', 'https://jerriiii.github.io/test/'); // 替換為測驗卷的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });

  let tutorialButton = createButton('教學影片');
  tutorialButton.parent(menu);
  tutorialButton.style('margin', '10px 0');
  tutorialButton.style('width', '100%');
  tutorialButton.style('background-color', '#8B4513');
  tutorialButton.style('color', '#ffffff');
  tutorialButton.style('border', 'none');
  tutorialButton.style('padding', '10px');
  tutorialButton.style('border-radius', '5px');
  tutorialButton.mousePressed(() => {
    iframe.attribute('src', 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E4%B8%8A/%E9%80%B1%E4%B8%89A%E7%8F%AD%E9%8C%84%E5%BD%B1%E6%AA%94%E6%A1%88/week8/20221026_112622.mp4'); // 替換為教學影片的網址
    iframeContainer.style('display', 'block'); // 顯示 iframe 容器
  });
}

function draw() {
  background("#a3b18a"); // 背景顏色
  console.log("背景正在繪製");

  // 繪製雛菊
  for (let daisy of daisies) {
    let distance = dist(mouseX, mouseY, daisy.x, daisy.y);
    let scale = map(distance, 0, width / 2, 2, 0.5);
    scale = constrain(scale, 0.5, 2);
    drawDaisy(daisy.x, daisy.y, daisy.size * scale);
  }

  // 繪製蜜蜂
  for (let bee of bees) {
    bee.x += bee.vx;
    bee.y += bee.vy;

    // 邊界檢查
    if (bee.x < 0 || bee.x > width) bee.vx *= -1;
    if (bee.y < 0 || bee.y > height) bee.vy *= -1;

    // 如果蜜蜂加速超過 60 幀，恢復正常速度
    if (bee.boosted && frameCount - bee.boostTimer > 60) {
      bee.vx = random(-beeSpeed, beeSpeed);
      bee.vy = random(-beeSpeed, beeSpeed);
      bee.boosted = false;
    }

    drawBee(bee.x, bee.y);
  }
}

function mousePressed() {
  // 如果滑鼠點擊蜜蜂，加速蜜蜂
  for (let bee of bees) {
    if (dist(mouseX, mouseY, bee.x, bee.y) < 20 && !bee.boosted) {
      bee.vx *= 3;
      bee.vy *= 3;
      bee.boosted = true;
      bee.boostTimer = frameCount;
    }
  }
}

function drawDaisy(x, y, size) {
  push();
  translate(x, y);
  fill(255);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, size / 4, size / 2, size);
    rotate(PI / 5);
  }
  fill(255, 204, 0);
  ellipse(0, 0, size / 2);
  pop();
}

function drawBee(x, y) {
  push();
  translate(x, y);
  noStroke();

  // 身體
  fill(255, 204, 0);
  ellipse(0, 0, 30, 20);

  // 黑條紋
  fill(0);
  ellipse(-10, 0, 5, 20);
  ellipse(0, 0, 5, 20);
  ellipse(10, 0, 5, 20);

  // 翅膀
  fill(255, 255, 255, 150); // 更加簡化的翅膀
  ellipse(-15, -10, 20, 15);
  ellipse(15, -10, 20, 15);

  pop();
}
