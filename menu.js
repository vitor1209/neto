
window.addEventListener('scroll', function(){
    const fixo = document.querySelector(".header");
    const baixo = document.querySelector(".header-baixo");
if(window.scrollY > 180){
    fixo.classList.add('fechar');
    baixo.classList.add('abrir');
}

else{
    fixo.classList.remove('fechar');
    baixo.classList.remove('abrir');
}
}) 

function mudar(){
    const seta = document.querySelector(".seta")

    seta.style.border = "solid #dd3333"
    seta.style.borderWidth = "0 7px 7px 0"
    seta.style.padding = "6px"
    seta.style.display = "inline-block"
}

function fechar(){
    const seta = document.querySelector(".seta")

    seta.style.border = "solid #FFF"
    seta.style.padding = "6px"
    seta.style.display = "inline-block"
    seta.style.borderWidth = "0 7px 7px 0"
}


