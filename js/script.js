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

function playPauseVideo(button){
    const videoContainer = button.closest('.film-video-container');
    const video = videoContainer.querySelector('video');
    
    if(video.paused){
        video.play();
        button.style.opacity = '0';
    } else {
        video.paused();
        button.style.opacity = '1'
    }
    video.onended = function() {
        button.style.opacity = '1'
    }
}

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