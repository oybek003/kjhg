const body = document.querySelector('body');
const colors = ["green", "red", "brown", "gray"];

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    on: {
        slideChangeTransitionEnd: function () {
            let realIndex = swiper.realIndex;
            body.style.backgroundColor = colors[realIndex];
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    body.style.backgroundColor = colors[0];
});