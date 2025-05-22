/* atribuindo os elementos as variaveis */
const img = document.getElementById('img');
const video = document.getElementById('video');

/* centralizando img */
function CentralizarImg() {
    img.style.marginLeft = (window.innerWidth / 2) - (img.offsetWidth / 2) + 'px';
}
CentralizarImg();


/* centralizando video */
function CentralizarVideo() {
    video.style.marginLeft = (window.innerWidth / 2) - (video.offsetWidth / 2) + 'px';
}
CentralizarVideo();

function Centralizar() {
    CentralizarImg();
    CentralizarVideo();
}

/* recentralizando img e video */
window.addEventListener('resize', Centralizar);