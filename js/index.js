const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
})

const video = document.querySelector('.video')
const playbtn = document.querySelector('.video-control')

playbtn.addEventListener('click', playvideo)

function playvideo() {
    if(video.paused){
        playbtn.innerHTML = `<ion-icon name="pause-circle-outline"></ion-icon>`
        video.play();
    } else {
        playbtn.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon>`
        video.pause();
    }
}
