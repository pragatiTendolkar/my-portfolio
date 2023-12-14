document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector(".scroll-container"),
        smooth: true,
    });
});

function hamburger() {
    document.querySelector(".hamburger").classList.toggle('active');
    document.querySelector(".ham-main").classList.toggle('active');
}

let main = document.querySelectorAll(".project-list");

main.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.display = "block";
    });

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.display = "none";
    });

    let imgElement = val.querySelector(".img");
    let imgWidth = imgElement.offsetWidth;
    let imgHeight = imgElement.offsetHeight;

    gsap.set(imgElement, { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(imgElement, "x", { duration: 0.6, ease: "power3" }),
        yTo = gsap.quickTo(imgElement, "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", e => {
        let mouseX = e.clientX - imgWidth / 2;
        let mouseY = e.clientY - imgHeight / 2;
        xTo(mouseX);
        yTo(mouseY);
    });
});
