
let follower = document.querySelector(".follower")

document.addEventListener('mousemove', function(e) {
    gsap.to('.follower', {
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out',
        duration: 1
    });
});

let heading = document.querySelector(".head")
let p1 = document.querySelector("#box1 img")
let p2 = document.querySelector("#box2 img")
let p3 = document.querySelector("#box3 img")
let p4 = document.querySelector("#box4 img")
let p5 = document.querySelector("#box5 img")
let p6 = document.querySelector("#box6 img")
let p7 = document.querySelector("#box7 img")
let p8 = document.querySelector("#box8 img")
let p9 = document.querySelector("#box9 img")
let p10 = document.querySelector("#box10 img")
let p11 = document.querySelector("#box11 img")
let p12 = document.querySelector("#box12 img")
let p13 = document.querySelector("#box13 img")
let p14 = document.querySelector("#box14 img")
let p15 = document.querySelector("#box15 img")
let p16 = document.querySelector("#box16 img")




heading.addEventListener("mouseenter", () => {
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
heading.addEventListener("mouseleave", () => {
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p1.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_1"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p1.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p2.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_2"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p2.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p3.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_3"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p3.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p4.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_4"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p4.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p5.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_5"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p5.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p6.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_6"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p6.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p7.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_7"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p7.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p8.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_8"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p8.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p9.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_9"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p9.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p10.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_10"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p10.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p11.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_11"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p11.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p12.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_12"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p12.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p13.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_13"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p13.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p14.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_14"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p14.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p15.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_15"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p15.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})
p16.addEventListener("mouseenter", () => {
    follower.innerHTML = "Project_16"
    gsap.to('.follower', {
          duration: .5, 
          scale: 2.2,
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        });
})
p16.addEventListener("mouseleave", () => {
    follower.innerHTML = ""
    gsap.to('.follower', {
          duration: .5, 
          scale: 1,
          backgroundColor: "rgba(53, 53, 53, 0.5)"
        });
})







                      // Animation
let tl = gsap.timeline()

tl.from(".navbar",{
    y: -50,
    scale: -1,
    delay: .2,
    duration: 1.5 
})
tl.from(".navbar h1",{
    y: -50,
    duration: 1,
    opacity: 0
})

gsap.from(".box",{
    // x: 65,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 2,
    stagger: .4,
})


gsap.from("footer",{
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: .8,
    delay: .6,
    
})
gsap.from(".social i, footer h3",{
    // x: 65,
    scale: 0,
    opacity: 0,
    duration: 1.2,
    delay: 2
})
