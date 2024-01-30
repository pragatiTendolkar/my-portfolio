






document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".scroll-container"),
      smooth: true,
    });
  });
  

function hamburger(){

    document.querySelector(".hamburger").classList.toggle('active'); 
    document.querySelector(".ham-main").classList.toggle('active');  
   

} 




document.querySelectorAll(".projectelements").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
      });
  });

  elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
  });
});






// gsap.set(".flair", {xPercent: -50, yPercent: -50});

// let xSetter = gsap.quickSetter(".flair", "x", "px") //apply it to the #id element's x property and append a "px" unit
// let ySetter = gsap.quickSetter(".flair", "y", "px") //apply it to the #id element's x property and append a "px" unit

// window.addEventListener("mousemove", e => {  
//   xSetter(e.x)
//   ySetter(e.y)
// });






// let main = document.querySelector("#page1");
// let cursor = document.querySelector(".line11");

// main.addEventListener("mousemove", function(e){
//   console.log(e);
//     cursor.style.left = e.x/5 + "px";
//     cursor.style.top = e.y/5 + "px";
//     console.log(e.x/10);
//     console.log(e.y/10 );
// })




const myText = new SplitType('.my-text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})


gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: ".smooth-scroll",
    scrub: true,
    start: "-300%",
    end: "+=100%",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

// --- ORANGE PANEL ---
gsap.to(".line-2", {
  scrollTrigger: {
    trigger: ".line-2", 
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "-70%",
  
    end: "+=70%",
    markers:true
  },
  x: '-300%', 
  scale:0,
  boxShadow: '0 0 7px 146px #2D4F50',
  y: '-290%', 

  ease: "ease-in"
});

gsap.to("body", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    scrub: true,
    start: "-70%",
    end: "+=50%",
  },
  backgroundColor: 'white',
  ease: "ease-in"
});

// gsap.to("body", {
//   backgroundColor: 'black',
//   scrollTrigger: {
//     trigger: "#page3",
//     scroller: "#main",
//     scrub: true,
//     start: "-70%",
//     end: "+=50%",
//     markers: true,
//   },
//   ease: "ease-out",
// });







ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();