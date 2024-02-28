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
    delay: 2
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
