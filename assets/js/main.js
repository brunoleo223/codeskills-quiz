/*

- Passar perguntas
- Registrar valores clicados 
- Atualizar borda

*/

// VARS
const perguntasSlide = document.querySelector('#perguntasSlide')
const carousel = new bootstrap.Carousel(perguntasSlide, {
    keyboard: true
})
let currentSlide = 0;
const answers = [];
const questions = document.querySelectorAll('.carousel-item');
const options = document.querySelectorAll('.carousel-item .item');


// When click in a option, go to the next slide
options.forEach(item => {
    item.addEventListener('click', e => {
        setTimeout(() => {

            // Next slide
            carousel.next()

            // Update borda
            updateBorda()

            // Save answer
        }, 500)
    })
})

// Update the current slide
perguntasSlide.addEventListener('slide.bs.carousel', function (e) {
    currentSlide = e.from
})

function updateBorda(){
    const borda = document.querySelector('.borda .load');
    
    borda.style.width = `${100 - ((currentSlide * 100 / questions.length) + (100 / questions.length))}%`;
}