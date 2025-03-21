let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu)


let button = document.querySelector(".menu-button")    
button.addEventListener("click",showMenu)



function showMenu(){
 let menu = document.querySelector("nav.menu");     
 menu.classList.toggle("show")

 let layer = document.querySelector(".fade-layer");
 layer.classList.toggle("visible")
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