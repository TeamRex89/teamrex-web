document.addEventListener("DOMContentLoaded", function() {
    const fs22 = document.getElementById("fs22");
    const fs25 = document.getElementById("fs25");
    const scroll = document.getElementById("scroll");

    fs22.addEventListener("mouseover", function() {
        scroll.style.transform = "translateX(-0.5vw) translateY(-1vw)";
    });

    fs22.addEventListener("mouseout", function() {
        scroll.style.transform = "translateY(-1vw) translateX(0)";
    });

    fs25.addEventListener("mouseover", function() {
        fs22.style.transform = "translateX(-0.5vw) translateY(-1.5vw)";
        scroll.style.transform = "translateX(-0.5vw) translateY(-1vw)";
    });

    fs25.addEventListener("mouseout", function() {
        fs22.style.transform = "translateY(-1.5vw) translateX(0)";
        scroll.style.transform = "translateY(-1vw) translateX(0)";
    });
});