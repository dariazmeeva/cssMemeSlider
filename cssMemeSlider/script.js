const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
let currentIndex = 0;

function showSlide(index) {
    if (index >= indicators.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = indicators.length - 1;
    } else {
        currentIndex = index;
    }

    // Переключаем слайды
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Обновляем индикаторы
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
    });
}

// Обработчик кликов на индикаторы
indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        showSlide(parseInt(indicator.getAttribute('data-index')));
    });
});

/*
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Интервал в 5 секунд*/

// Показ первого слайда при загрузке
showSlide(currentIndex);