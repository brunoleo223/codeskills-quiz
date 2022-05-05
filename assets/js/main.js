/*

- ✅ Passar perguntas
- Registrar valores clicados 
- ✅ Atualizar borda
- Capturar lead
- Salvar lead
- ✅ Calcular e exibir resultado

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
const results = [
    {
        "id": "r1_pergunta_4",
        "title": "O Criativo",
        "description": "1Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "img": "assets/img/r1.jpeg"
    },
    {   
        "id": "r2_pergunta_4",
        "title": "O que vira a noite",
        "description": "2Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "img": "assets/img/r2.jpeg"
    },
    {   
        "id": "r3_pergunta_4",
        "title": "O Risco zero",
        "description": "3Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "img": "assets/img/r3.jpeg"
    },
    {   
        "id": "r4_pergunta_4",
        "title": "O que quebra a produção",
        "description": "4Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "img": "assets/img/r4.jpeg"
    },
    {   
        "id": "r5_pergunta_4",
        "title": "O canivete Suíço",
        "description": "5Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        "img": "assets/img/r5.jpeg"
    },
]


// Update the current slide
perguntasSlide.addEventListener('slide.bs.carousel', function (e) {
    currentSlide = e.from
})

// When click in a option, go to the next slide
options.forEach(item => {
    item.addEventListener('click', e => {
        setTimeout(() => {
            
            // Next slide
            carousel.next()
            
            // Update borda
            updateBorda()
            
            // Update Result
            if(item.classList.contains('decision')){
                const data = results.find(result => result.id === item.getElementsByTagName('input')[0].getAttribute('id'))
                updateResultData(data)
            }
            
            // Save answer
        }, 500)
    })
})

// Update borda
function updateBorda(){
    const borda = document.querySelector('.borda .load');
    borda.className = `load load-${Math.round(((currentSlide * 100 / questions.length) + (100 / questions.length)))}`;
}

function exibeResultado(){
    const loading = document.querySelector('.res .loading');
    loading.classList.remove('not-show')
    
    setTimeout(()=>{
        carousel.next()
        alert(3)
    }, 800)
}

function updateResultData(data){
    const title = document.querySelector('.resultado .conteudo h2');
    const description = document.querySelector('.resultado .conteudo p');
    const img = document.querySelector('.resultado .conteudo img');

    title.textContent = data.title;
    description.textContent = data.description;
    img.setAttribute('src', data.img);
}