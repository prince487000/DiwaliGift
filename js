const canvas = document.getElementById("fireworks");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = [
    "#ff0000",
    "#ff00ff",
    "#00ccff",
    "#ffff00",
    "#00ff00",
    "#ff8800"
];

/* CREATE DIWALI LIGHTS */

for (let i = 0; i < 35; i++) {

    const led = document.createElement("div");

    led.className = "led";

    led.style.setProperty(
        "--color",
        colors[i % colors.length]
    );

}

/* WISHES */

const wishes = [

    {
        title: "🪔 Special Wishes",
        text: "May your life shine as bright as these beautiful lights!"
    },

    {
        title: "✨ Festival of Lights",
        text: "Let every diya remove darkness and bring new hopes, new dreams and new beginnings into your life."
    },

    {
        title: "❤️ Happiness & Love",
        text: "May this Diwali fill your home with happiness, peace and prosperity."
    },

    {
        title: "🎆 Special Wishes",
        text: "May your troubles disappear like darkness and your happiness shine brighter than a thousand stars."
    }

];

let wishIndex = -1;

function showWish() {

    wishIndex = (wishIndex + 1) % wishes.length;

    document.getElementById("wishTitle").innerText =
        wishes[wishIndex].title;

    document.getElementById("wishText").innerText =
        wishes[wishIndex].text;

    document.getElementById("wishBox").classList.add("show");

}

/* PARTICLES */

let particles = [];

function burst(x, y) {

    const colors = [
        "#ff3333",
        "#ffcc00",
        "#00ffcc",
        "#00ffff",
        "#ff00ff",
        "#ffffff",
        "#ff8800"
    ];

    const color = colors[
        Math.floor(Math.random() * colors.length)
    ];

    for (let i = 0; i < 90; i++) {

        const angle = Math.random() * Math.PI * 2;

        const speed = Math.random() * 5 + 1;

        particles.push({

            x: x,
            y: y,

            vx: Math.cos(angle) * speed,

            vy: Math.sin(angle) * speed,

            color: color,

            life: 80

        });

    }

}

/* ANIMATE FIREWORKS */

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {

        p.x += p.vx;

        p.y += p.vy;

        p.vy += 0.05;

        p.life--;

        ctx.beginPath();

        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);

        ctx.fillStyle = p.color;

        ctx.globalAlpha = Math.max(0, p.life / 80);

        ctx.fill();

        ctx.globalAlpha = 1;

        if (p.life <= 0) {

            particles.splice(i, 1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

/* CELEBRATE BUTTON */

function celebrate() {

    const centerX = canvas.width / 2;

    const centerY = canvas.height / 2;

    for (let i = 0; i < 5; i++) {

        setTimeout(() => {

            burst(
                centerX + (Math.random() - 0.5) * 300,
                centerY + (Math.random() - 0.5) * 200
            );

        }, i * 300);

    }

    showWish();

}

/* LIGHT UP THE SKY BUTTON */

function skyFireworks() {

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            burst(

                30 + Math.random() * (canvas.width - 60),

                40 + Math.random() * (canvas.height * 0.55)

            );

        }, i * 180);

    }

}

/* AUTOMATIC SMALL FIREWORKS */

setInterval(() => {

    if (Math.random() > 0.5) {

        burst(

            Math.random() * canvas.width,

            Math.random() * canvas.height * 0.5

        );

    }

}, 2500);

/* RESIZE CANVAS */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});
