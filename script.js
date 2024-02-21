let slideIndex = 0;
let timer; // Переменная для хранения таймера

showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex-1].style.display = "block";
    timer = setTimeout(showSlides, 6000); // Измените значение (в миллисекундах) для скорости перехода между слайдами
}
