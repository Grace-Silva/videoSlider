// selecciona todos los contenedores de vídeo:
let items = document.querySelectorAll(".carrouselItem");

// selecciona los vídeos de cada uno de los contenedores:
let videos = document.querySelectorAll(".myvid");

// botones de avance:
const leftArrow = document.getElementById("prev"); 
const rightArrow = document.getElementById("next");

    let index = 0; // indice para los contenedores de vídeo:

// desplazar hacia la derecha (siguiente):
function next(){
    items[index].classList.remove("active"); // elimina la clase active para todos los elementos a excepción del actual
    index = (index+1) % items.length; // avanza una posición hacia la derecha
    items[index].classList.add("active"); // activa la visiblidad para el elemento actual
    currentVideo = index; // necesito saber que video seleccionar, para ello tomo como referencia al indice de los contenedores
    videos[currentVideo].pause(); // el vídeo está pausado y su avance es de 0
    videos[currentVideo].currentTime = 0;
    videos[currentVideo].play(); // el vídeo está activado y su avance es automático
}    

// desplazar hacia la izquierda (atrás):
function prev(){
    items[index].classList.remove("active");
    index = (index-1+items.length) % items.length; // avanza una posición hacia la izquierda
    items[index].classList.add("active");
    currentVideo=index;
    videos[currentVideo].pause();
    videos[currentVideo].currentTime = 0;
    videos[currentVideo].play();
}    

leftArrow.addEventListener("click", prev);
rightArrow.addEventListener("click", next);