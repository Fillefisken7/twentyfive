let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu)


let button = document.querySelector(".menu-button")
button.addEventListener("click", showMenu)



function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}
layer.addEventListener("click",function () {
    let menu =document.querySelector("nav.menu");
    if (menu.classList.contains("show")){
        menu.classList.remove("show");
        this.classList.remove("visible");
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('#gif')
    const videoElement = heroSection.querySelector('.video')

    videoElement.className = 'hero-video';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.playsinline = true;


    videoElement.src = "Video/Film biograf.mp4";


});