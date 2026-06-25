// Auto-update the footer copyright year.
document.getElementById("year").textContent = new Date().getFullYear();

// --- Mobile nav: toggle the dropdown, and close it after a tap ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// --- On scroll: add the navbar border, and highlight the nav
//     link for whichever section is currently in view ---
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".section");
const links = document.querySelectorAll("#navLinks a");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  // Last section whose top has passed the navbar = the active one.
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  links.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
});

// --- Typewriter: types each phrase out, pauses, deletes, and
//     advances to the next. Speeds differ for type vs. delete. ---
(function () {
  const words = [
    "with Unreal Engine",
    "with Unity",
    "VR worlds",
    "with React",
    "with AI API's",
    "with Wonderland Engine",
      "with coffee and dreams"
  ];
  const el = document.getElementById("twWord");
  let w = 0, // current word index
    c = 0, // how many chars are currently shown
    deleting = false; // typing vs. erasing
  function tick() {
    const word = words[w];
    el.textContent = word.substring(0, c);
    if (!deleting && c < word.length) {
      c++; // still typing
      setTimeout(tick, 90);
    } else if (!deleting && c === word.length) {
      deleting = true; // word complete → hold, then erase
      setTimeout(tick, 1500);
    } else if (deleting && c > 0) {
      c--; // erasing
      setTimeout(tick, 45);
    } else {
      deleting = false; // erased → move to next word (wraps)
      w = (w + 1) % words.length;
      setTimeout(tick, 350);
    }
  }
  tick();
})();

// --- Scroll reveal: reveal each .reveal element once, the first
//     time it scrolls into view, then stop observing it. ---
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// --- Constellation background: drifting dots that draw a line
//     between any two that are close, creating a network look. ---
(function () {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, dots;
  const COUNT = 70; // number of dots
  // (Re)size the canvas to the window and seed dots with random
  // positions and slow random velocities.
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    dots = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }
  // Animation loop: move dots, bounce off edges, draw dots + links.
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += d.vx;
      d.y += d.vy;
      // Bounce off the canvas edges.
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(102, 252, 241, 0.6)";
      ctx.fill();
      // Link nearby dots; line fades out with distance.
      for (let j = i + 1; j < dots.length; j++) {
        const o = dots[j];
        const dist = Math.hypot(d.x - o.x, d.y - o.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(o.x, o.y);
          ctx.strokeStyle =
            "rgba(102, 252, 241, " + (0.12 * (1 - dist / 130)) + ")";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  resize();
  draw();
})();
