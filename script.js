






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