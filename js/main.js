// captura de elementos:
let items = document.querySelectorAll(".carrouselItem");    // selecciona todos los elementos del contenedor de vídeo

// videos:
let videos = document.querySelectorAll(".myvid");

// botones de avance:
const leftArrow = document.getElementById("next");
const rightArrow = document.getElementById("prev");

    let index = 0;

// desplazar hacia la derecha (siguiente):
function next(){
    items[index].classList.remove("active");
    index = (index+1) % items.length;
    items[index].classList.add("active");
    currentVideo=index;
    videos[currentVideo].pause();
    videos[currentVideo].currentTime = 0;
    videos[currentVideo].play();
}    

// desplazar hacia la izquierda (atrás):
function prev(){
    items[index].classList.remove("active");
    index = (index-1+items.length) % items.length;
    items[index].classList.add("active");
    currentVideo=index;
    videos[currentVideo].pause();
    videos[currentVideo].currentTime = 0;
    videos[currentVideo].play();
}    

leftArrow.addEventListener("click", next);
rightArrow.addEventListener("click", prev);