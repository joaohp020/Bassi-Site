// Seleção de elementos
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

// Inicializa o slide ativo
let currentSlide = 0;

// Função para mostrar o slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add("active");
            indicators[i].classList.add("active");
        } else {
            slide.classList.remove("active");
            indicators[i].classList.remove("active");
        }
    });
    currentSlide = index;
}

// Configura os eventos dos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        showSlide(index);
    });
});

// Alternância automática dos slides
setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000); // Alterna os slides a cada 5 segundos



// Função para animar os números
function animateNumbers() {
    const numbers = document.querySelectorAll('.numero h2');

    numbers.forEach((number) => {
        const target = +number.getAttribute('data-target'); // Valor final
        const increment = target / 100; // Incremento suave (ajustar conforme necessidade)
        let count = 0;

        const updateNumber = () => {
            count += increment;
            if (count < target) {
                number.textContent = Math.ceil(count) + '+'; // Atualiza com arredondamento e "+"
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target + '+'; // Garante o valor final
            }
        };

        updateNumber();
    });
}

// Inicia a animação quando a página é carregada
window.addEventListener('load', animateNumbers);


// Seleciona todos os itens da FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');

    question.addEventListener('click', () => {
        // Alterna a classe 'active' para o botão
        toggle.classList.toggle('active');

        // Mostra ou oculta a resposta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });

    // Permite que o botão também seja clicável
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
