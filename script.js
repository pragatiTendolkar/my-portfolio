






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






let main = document.querySelector("#page1");
let cursor = document.querySelector("#bg-circle");

main.addEventListener("mousemove", function(e){
  console.log(e);
    cursor.style.left = e.x/5 + "px";
    cursor.style.top = e.y/5 + "px";
    console.log(e.x/10);
    console.log(e.y/10 );
})




const myText = new SplitType('.my-text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})