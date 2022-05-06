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
        "description": "Você gosta do seu espaço",
        "img": "assets/img/r1.png"
    },
    {   
        "id": "r2_pergunta_4",
        "title": "O que vira a noite",
        "description": "Se você pudesse estaria sempre dormingo de dia e trabalhando a noite. Você curte trabalhar em silêncio e sem ser interrompido por outras pessoas. A noite é quando seu cérebro disperta e você consegue elevar sua produtividade!",
        "img": "assets/img/r2.png"
    },
    {   
        "id": "r3_pergunta_4",
        "title": "O Risco zero",
        "description": "Você tenta a todo momento ter certeza de que tudo está funcionando como deveria. Seu pior pesadelo é que o alguém mexer no sistema e ele parar de funcionar. Melhor garantir do que passar o fim de semana resolvendo.",
        "img": "assets/img/r3.png"
    },
    {   
        "id": "r4_pergunta_4",
        "title": "O que quebra a produção",
        "description": "Você gosta de um desafio, mas nem sempre lembra de testar o suficiente. A essa altura você já quebrou o sistema ou site em produção pelo menos uma vez, mas isso não significa que você não saiba o que está fazendo.",
        "img": "assets/img/r4.png"
    },
    {   
        "id": "r5_pergunta_4",
        "title": "O canivete Suíço",
        "description": "Você é dev para todo código. Se precisam resolver algo, você está lá. Se precisam de algo simples ou completo, é você mesmo que chamam!",
        "img": "assets/img/r5.png"
    },,
    {   
        "id": "r6_pergunta_4",
        "title": "O Expert",
        "description": "Focê tem bem claro o quer quer para sua carreira como dev. Seu objetivo é se aprofundar e especializar o máximo que for possível, sem tempo para investir naquilo que não faz sentido para você.",
        "img": "assets/img/r6.png"
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



// Validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            
            form.classList.add('was-validated')
        }, false)
    })
})()