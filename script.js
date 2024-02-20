

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


const slider= document.querySelector('#page2');

$('#work').on('click', function() {
    locoScroll.scrollTo(slider)
});




var magnets = document.querySelectorAll('.magnetic')
var strength = 50

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    TweenMax.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  TweenMax.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}


document.addEventListener("DOMContentLoaded", function () {
  // Simulate a delay of 2 seconds before hiding the loader
  setTimeout(function() {
      // When timeout is complete, remove the loader
      document.body.classList.add('loaded');
  }, 2000); // 2000 milliseconds = 2 seconds
});












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
    markers:false
  },
  x: '-350%', 
  scale:0,
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
    
            var width1 = 900;
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
  
  var wallLeft = Bodies.rectangle(-80, 300 / 2, 160, 630, {
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
            render: { sprite: { texture: 'skills/html.png', xScale: 0.9, yScale: 0.9 } }
        });
    
        var css = Bodies.rectangle(590, 170, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/css.png', xScale: 0.9, yScale: 0.9 } }
        });
    
    
    
        var js   = Bodies.rectangle(700,100, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/JS.png', xScale: 0.9, yScale: 0.9 } }
        });
    
        var react = Bodies.rectangle(470, 90, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/react.png', xScale: 0.9, yScale: 0.9} }
        });
    
        var tail = Bodies.rectangle(630, 10, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/tailwind.png', xScale: 0.9, yScale: 0.9 } }
        });
    
        
        var boot = Bodies.rectangle(500, 90, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/boot.png', xScale: 0.9, yScale: 0.9 } }
        });
    
        var creative = Bodies.rectangle(580, 90, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/creative.png', xScale: 0.9, yScale: 0.9} }
        });
    
        var wordpress = Bodies.rectangle(770, 90, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/wordpress.png', xScale: 0.9, yScale: 0.9 } }
        });
    
        var shopify = Bodies.rectangle(490, 0, 175, 45,{
            chamfer: { radius: radius },
            render: { sprite: { texture: 'skills/shopify.png', xScale: 0.9, yScale: 0.8 } }
        });
  
        var photoshop = Bodies.rectangle(490, 0, 175, 45,{
          chamfer: { radius: radius },
          render: { sprite: { texture: 'skills/photoshop.webp', xScale: 0.9, yScale: 0.8 } }
      });
    
        World.add(engine.world, [ground, wallLeft, wallRight, roof, html, css,js,react,tail,boot, creative,wordpress,shopify, photoshop]);
    
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
    
  


    function initmobilePhysicsSimulation(){
//   mobile view skill section

    var MatterEngine = Matter.Engine,
        MatterRender = Matter.Render,
        MatterEvents = Matter.Events,
        MatterMouseConstraint = Matter.MouseConstraint,
        MatterMouse = Matter.Mouse,
        MatterWorld = Matter.World,
        MatterBodies = Matter.Bodies;

    var engine = MatterEngine.create(),
        world = engine.world;

    var containerWidth = 400;
    var renderOptions = MatterRender.create({
        element: document.getElementById('mobile-matter-container'),
        engine: engine,
        options: {
            width: 360,
            height: 400,
            pixelRatio: 2,
            background: '#171717',
            wireframes: false,
        }
    });

    var groundBody = MatterBodies.rectangle(
        (containerWidth / 2) + 160, 300 + 180, 1200, 160, {
            isStatic: true,
            chamfer: { radius: 10 },
            render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
        }
    );

    var leftWallBody = MatterBodies.rectangle(-30, 300 / 2, 60, 500, {
        isStatic: true,
        chamfer: { radius: 10 },
        render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
    });

    var rightWallBody = MatterBodies.rectangle(100 + 380, 300 / 2, 240, 1200, {
        isStatic: true,
        chamfer: { radius: 10 },
        render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' }
    });

    var roofBody = MatterBodies.rectangle(
        (containerWidth / 2) + 160, -80, 900 + 320, 160, { isStatic: true, render: { fillStyle: '#333', lineWidth: 0, strokeStyle: '#555' } });

    var radius = 20;

    var htmlBody = MatterBodies.rectangle(0, 300, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/html.png', xScale: 0.7, yScale: 0.7 } }
    });

    var cssBody = MatterBodies.rectangle(200, 400, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/css.png', xScale: 0.7, yScale: 0.7 } }
    });

    var jsBody = MatterBodies.rectangle(170, 200, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/JS.png', xScale: 0.7, yScale: 0.7 } }
    });

    var reactBody = MatterBodies.rectangle(340, 400, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/react.png', xScale: 0.7, yScale: 0.7 } }
    });

    var tailwindBody = MatterBodies.rectangle(440, 300, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/tailwind.png', xScale: 0.7, yScale: 0.7 } }
    });

    var bootstrapBody = MatterBodies.rectangle(340, 10, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/boot.png', xScale: 0.7, yScale: 0.7 } }
    });

    var creativeBody = MatterBodies.rectangle(140, 10, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/creative.png', xScale: 0.7, yScale: 0.7 } }
    });

    var wordpressBody = MatterBodies.rectangle(40, 250, 135, 39, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/wordpress.png', xScale: 0.7, yScale: 0.7 } }
    });

    var shopifyBody = MatterBodies.rectangle(40, 10, 135, 39, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/shopify.png', xScale: 0.7, yScale: 0.7 } }
    });

    var photoshopBody = MatterBodies.rectangle(40, 10, 135, 35, {
        chamfer: { radius: radius },
        render: { sprite: { texture: 'skills/photoshop.webp', xScale: 0.7, yScale: 0.7 } }
    });

    MatterWorld.add(engine.world, [groundBody, leftWallBody, rightWallBody, roofBody, htmlBody, cssBody, jsBody, reactBody, tailwindBody, bootstrapBody, creativeBody, wordpressBody, shopifyBody, photoshopBody]);
    var mouse = MatterMouse.create(renderOptions.canvas),
        mouseConstraint = MatterMouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    MatterWorld.add(world, mouseConstraint);

    renderOptions.mouse = mouse;

    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    let click = false;

    document.addEventListener('mousedown', () => click = true);
    document.addEventListener('mousemove', () => click = false);
    document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

    MatterEngine.run(engine);
    MatterRender.run(renderOptions);


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

gsap.to("#mobile-matter-container", {
    opacity: 0, 
  duration: 1, 
    scrollTrigger: {
      trigger: "#mobile-matter-container",
      scroller: "#main",
      start: "-290%",
      end: "+10%",
      markers:true,
     
      duration: 1, 
    },
    
  
    onComplete: function () {
  
      initmobilePhysicsSimulation(); // Call your physics simulation initialization here
  },
  opacity: 1,
  });
  


gsap.from(".contact-div", {
    scrollTrigger: {
      trigger: ".contact-container",
      scroller: "#main",
      start: "-30%",
      end: "+=50%",
      opacity:1,
      markers:false,
    
    },
  
   scale:2,
   opacity:0,
   ease: "ease-in",
   duration:1,
    
  });
  




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();