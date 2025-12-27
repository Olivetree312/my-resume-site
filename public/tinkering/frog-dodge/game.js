const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");

const W = canvas.width;
const H = canvas.height;

const keys = new Set();

window.addEventListener("keydown", (e) => {
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d","r","R"].includes(e.key)) {
    e.preventDefault();
  }
  keys.add(e.key);
  if (e.key === "r" || e.key === "R") reset();
});

window.addEventListener("keyup", (e) => keys.delete(e.key));

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

let player, frogs, score, alive, lastTime, spawnTimer;

function reset() {
  player = { x: W * 0.15, y: H * 0.5, r: 12, speed: 240 };
  frogs = [];
  score = 0;
  alive = true;
  lastTime = performance.now();
  spawnTimer = 0;
  statusEl.textContent = "";
  scoreEl.textContent = `Score: ${score}`;
}

function spawnFrog() {
  const r = rand(10, 18);
  frogs.push({
    x: W + r + 4,
    y: rand(r, H - r),
    r,
    vx: rand(140, 260),
  });
}

function circleHit(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const rr = a.r + b.r;
  return dx * dx + dy * dy <= rr * rr;
}

function update(dt) {
  if (!alive) return;

  // movement
  let vx = 0, vy = 0;
  if (keys.has("ArrowLeft") || keys.has("a")) vx -= 1;
  if (keys.has("ArrowRight") || keys.has("d")) vx += 1;
  if (keys.has("ArrowUp") || keys.has("w")) vy -= 1;
  if (keys.has("ArrowDown") || keys.has("s")) vy += 1;

  // normalize diagonal
  if (vx !== 0 && vy !== 0) {
    const inv = 1 / Math.sqrt(2);
    vx *= inv; vy *= inv;
  }

  player.x += vx * player.speed * dt;
  player.y += vy * player.speed * dt;

  // clamp
  player.x = Math.max(player.r, Math.min(W - player.r, player.x));
  player.y = Math.max(player.r, Math.min(H - player.r, player.y));

  // spawn frogs faster over time
  spawnTimer -= dt;
  const spawnEvery = Math.max(0.25, 0.9 - score * 0.01);
  if (spawnTimer <= 0) {
    spawnFrog();
    spawnTimer = spawnEvery;
  }

  // move frogs
  for (const f of frogs) f.x -= f.vx * dt;

  // remove offscreen + score
  const before = frogs.length;
  frogs = frogs.filter((f) => f.x > -f.r - 10);
  score += (before - frogs.length);
  scoreEl.textContent = `Score: ${score}`;

  // collisions
  for (const f of frogs) {
    if (circleHit(player, f)) {
      alive = false;
      statusEl.textContent = "💥 You got frogged. Press R to restart.";
      break;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);

  // player
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, Math.PI * 2);
  ctx.fillStyle = "#ffd36a";
  ctx.fill();

  // frogs
  for (const f of frogs) {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fillStyle = "#66ff7a";
    ctx.fill();

    // tiny eyes
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.beginPath();
    ctx.arc(f.x - f.r * 0.25, f.y - f.r * 0.2, f.r * 0.12, 0, Math.PI * 2);
    ctx.arc(f.x + f.r * 0.25, f.y - f.r * 0.2, f.r * 0.12, 0, Math.PI * 2);
    ctx.fill();
  }

  // game over overlay
  if (!alive) {
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(0, 0, W, H);
  }
}

function loop(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

reset();
requestAnimationFrame(loop);
