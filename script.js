/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.querySelector(".background-hearts");

const heartSymbols = ["♥", "♡", "❤", "❥"];

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    const duration =
        8 + Math.random() * 8;

    heart.style.animationDuration =
        duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* Create hearts continuously */

setInterval(createHeart, 900);


/* =========================================
   SPARKLES
========================================= */

const sparkleContainer =
    document.querySelector(".sparkles");

for (let i = 0; i < 35; i++) {

    const sparkle =
        document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.animationDelay =
        Math.random() * 3 + "s";

    sparkleContainer.appendChild(sparkle);
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   SECRET MESSAGE
========================================= */

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");


secretButton.addEventListener(
    "click",
    () => {

        secretMessage.classList.add("show");

        secretButton.innerHTML =
            "♡ You found it ♡";

        secretButton.style.background =
            "#321f26";

        secretMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* =========================================
   LITTLE HEART BURST
   When secret is opened
========================================= */

function heartBurst() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left = "50%";

        heart.style.top = "50%";

        heart.style.zIndex = "100";

        heart.style.pointerEvents = "none";

        heart.style.color = "#d95778";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 250;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1300);
    }
}


secretButton.addEventListener(
    "click",
    heartBurst
);


/* =========================================
   IMAGE PLACEHOLDER HANDLING
========================================= */

const images =
    document.querySelectorAll(
        ".photo-frame img, .gallery-photo img"
    );

images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.display = "none";

        }
    );

    image.addEventListener(
        "load",
        () => {

            const placeholder =
                image.parentElement.querySelector(
                    ".photo-placeholder"
                );

            if (placeholder) {

                placeholder.style.display =
                    "none";

            }

        }
    );
});