try {

    /* footer e out - fotter */
    const footer = document.getElementById('footer');
    const out_footer = document.getElementById('out-footer');

    footer.addEventListener('click', InteragirFooter);
    out_footer.addEventListener('click', InteragirFooter);

    let footer_press = false;

    function InteragirFooter() {
        if (footer_press === false) {
            footer.style.top = '100%';
            footer.style.transform = 'translate(0%, -100%)';
            footer_press = true;
            out_footer.style.display = 'block';
        } else if (footer_press === true) {
            footer.style.top = '120%';
            footer.style.transform = 'translate(0%, -120%)';
            footer_press = false;
            out_footer.style.display = 'none';
        }
    }

    /* centralizando iframe */

    const video_1 = document.getElementById('video-1');

    window.addEventListener('resize', CentralizarVideo1);

    function CentralizarVideo1() {
        video_1.style.marginLeft = (window.innerWidth / 2) - (video_1.offsetWidth / 2) + 'px';
    }

    CentralizarVideo1();



    /* caso haja erros */
} catch (error) {
    // console.log('Recarregando Página...' + error);
    // setTimeout(() => {
    //     location.reload();
    // }, 1000)
}