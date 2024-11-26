let follower = document.querySelector(".follower");

document.addEventListener('mousemove', function(e) {
    gsap.to('.follower', {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
        duration: 1
    });
});

let heading = document.querySelector(".head");
let projectImages = [];
for (let i = 1; i <= 21; i++) {
    projectImages.push(document.querySelector(`#box${i} img`));
}

let comingSoon = [];
for (let i = 22; i <= 30; i++) {
    comingSoon.push(document.querySelector(`#box${i}`));
}

heading.addEventListener("mouseenter", () => {
    gsap.to('.follower', {
        duration: .5, 
        scale: 2.2,
        backgroundColor: "rgba(255, 255, 255, 0.5)"
    });
});

heading.addEventListener("mouseleave", () => {
    gsap.to('.follower', {
        duration: .5, 
        scale: 1,
        backgroundColor: "rgba(53, 53, 53, 0.5)"
    });
});

projectImages.forEach((img, index) => {
    img.addEventListener("mouseenter", () => {
        follower.innerHTML = `Project_${index + 1}`;
        gsap.to('.follower', {
            duration: .5, 
            scale: 2.2,
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
    });

    img.addEventListener("mouseleave", () => {
        follower.innerHTML = "";
        gsap.to('.follower', {
            duration: .5, 
            scale: 1,
            backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
    });
});

comingSoon.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        follower.innerHTML = "Coming...";
        gsap.to('.follower', {
            duration: .5, 
            scale: 2.2,
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
    });

    box.addEventListener("mouseleave", () => {
        follower.innerHTML = "";
        gsap.to('.follower', {
            duration: .5, 
            scale: 1,
            backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
    });
});

// Animation
let tl = gsap.timeline();

tl.from(".navbar", {
    y: -50,
    scale: -1,
    delay: .2,
    duration: 1.5 
})
.from(".navbar h1", {
    y: -50,
    duration: 1,
    opacity: 0
});

gsap.from(".box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: .4,
});

gsap.from("footer", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: .8,
    delay: .6,
});

gsap.from(".social i, footer h3", {
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 2
});
