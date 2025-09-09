const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

let particles = [];
const PARTICLE_COUNT = 60;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

function createParticle() {
    // Farbpalette: cyan, light-blue, violet, pink, coral (RGB)
    const palette = [
        '6,182,212',   // cyan
        '33,150,243',  // light blue
        '124,58,237',  // violet
        '236,72,153',  // pink
        '255,111,111'  // coral
    ];

    const rgb = palette[Math.floor(Math.random() * palette.length)];

    return {
        x: randomBetween(0, canvas.width),
        y: canvas.height + randomBetween(0, canvas.height / 4),
        radius: randomBetween(1, 3.5),
        speed: randomBetween(0.4, 2.2),
        alpha: randomBetween(0.15, 0.8),
        drift: randomBetween(-0.4, 0.4),
        color: `rgb(${rgb})`
    };
}

function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle());
    }
}
initParticles();

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function updateParticles() {
    for (let p of particles) {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10) {
            // Reset particle to bottom
            Object.assign(p, createParticle());
            p.y = canvas.height + 10;
        }
    }
}

function animate() {
    drawParticles();
    updateParticles();
    requestAnimationFrame(animate);
}
animate();
