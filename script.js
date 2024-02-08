

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
      gsap.to(elem.querySelector(".img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
      });
  });


  elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector(".img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });     
  });
});


let cursor = document.querySelector(".view-project");


main.addEventListener("mousemove", function(dets){
    // cursor.style.left = (dets.x) + "px";
    // cursor.style.top = (dets.y) + "px";
    console.log(movementX);
    console.log(movementY);
    

})





// gsap.set(".view-project", {xPercent: -100, yPercent: -100});

// let xSetter = gsap.quickSetter(".view-project", "x", "px") //apply it to the #id element's x property and append a "px" unit
// let ySetter = gsap.quickSetter(".view-project", "y", "px") //apply it to the #id element's x property and append a "px" unit

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
    start: "-370%",
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
    start: "-36%",
    end: "+=70%",
    markers:true
  },
  x: '-300%', 
  scale:0,
  boxShadow: '0 0 7px 146px #2D4F50',
  y: '-290%', 

  ease: "ease-in"
});

// gsap.to("body", {
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "#main",
//     scrub: true,
//     start: "-70%",
//     end: "+=50%",
//   },
//   backgroundColor: 'white',
//   ease: "ease-in"
// });




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




function initPhysicsSimulation() {
       
  var Engine = Matter.Engine,
          Render = Matter.Render,
          Events = Matter.Events,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies;
  
      var engine = Engine.create(),
          world = engine.world;
  
      var render = Render.create({
          element: document.getElementById('matter-container'),
          engine: engine,
          options: {
              width: 1200,
              height: 400,
              pixelRatio: 2,
              background: '#080808',
              wireframes: false,
          }
      });
  
     var ground = Bodies.rectangle(
    (900 / 2) + 160, 300 + 180, 1200, 160, {
        isStatic: true,
        chamfer: { radius: 10 },
        render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
    }
);

var wallLeft = Bodies.rectangle(-80, 300 / 2, 160, 300, {
    isStatic: true,
    chamfer: { radius: 10 },
    render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
});

var wallRight = Bodies.rectangle(900 + 380, 300 / 2, 160, 1200, {
    isStatic: true,
    chamfer: { radius: 10 },
    render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
});

      var roof = Bodies.rectangle(
          (900 / 2) + 160, -80, 900 + 320, 160, { isStatic: true, render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' } });
  
      var radius = 20;
  
      var html = Bodies.rectangle(400, 150, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'html.png', xScale:1, yScale: 1 } }
      });
  
      var css = Bodies.rectangle(590, 170, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'css.png', xScale: 0.9, yScale: 0.9 } }
      });
  
  
  
      var js   = Bodies.rectangle(700,100, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'JS.png', xScale: 0.9, yScale: 0.9 } }
      });
  
      var react = Bodies.rectangle(470, 90, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'react.png', xScale: 0.9, yScale: 0.9} }
      });
  
      var tail = Bodies.rectangle(630, 10, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'tailwind.png', xScale: 0.9, yScale: 0.9 } }
      });
  
      
      var boot = Bodies.rectangle(500, 90, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'boot.png', xScale: 0.9, yScale: 0.9 } }
      });
  
      var creative = Bodies.rectangle(580, 90, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'creative.png', xScale: 0.9, yScale: 0.9} }
      });
  
      var wordpress = Bodies.rectangle(770, 90, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'wordpress.png', xScale: 0.8, yScale: 0.8 } }
      });
  
      var shopify = Bodies.rectangle(490, 0, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'shopify.png', xScale: 0.9, yScale: 0.8 } }
      });
  
      World.add(engine.world, [ground, wallLeft, wallRight, roof, html, css,js,react,tail,boot, creative,wordpress,shopify]);
  
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: false
                  }
              }
          });
  
      World.add(world, mouseConstraint);
  
      render.mouse = mouse;
  
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
  
      let click = false;
  
      document.addEventListener('mousedown', () => click = true);
      document.addEventListener('mousemove', () => click = false);
      document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));
  
      Engine.run(engine);
      Render.run(render);
  }


// ScrollTrigger.create({
//     trigger: "#matter-container",
//     start: " 100%",
//     scroller: "#main",
//     markers: true,
//     onEnter: function () {
//       initPhysicsSimulation();
//   },
// });




gsap.to("#matter-container", {
  scrollTrigger: {
    trigger: "#matter-container",
    scroller: "#main",
    start: "-150%",
    end: "+=50%",
  
  },

  onComplete: function () {

    initPhysicsSimulation(); // Call your physics simulation initialization here
},
  
});



gsap.from(".contact-div", {
    scrollTrigger: {
      trigger: ".contact-container",
      scroller: "#main",
      start: "-30%",
      end: "+=50%",
      opacity:1,
      markers:true,
    
    },
  
   scale:2,
   opacity:0,
   ease: "ease-in",
   duration:1,
    
  });
  




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();