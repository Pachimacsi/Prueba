window.onscroll = function(){
    if(document.documentElement.scrollTop > 600 && window.innerWidth > 768){
        document.querySelector('.boton-arriba-container')
        .classList.add('mostrar');
    } else {
        document.querySelector('.boton-arriba-container')
        .classList.remove('mostrar');
    }
}

document.querySelector('.boton-arriba-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});