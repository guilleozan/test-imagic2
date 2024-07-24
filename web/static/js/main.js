// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '../css/styles.css';
// import '../scss/styles.scss';
// import * as bootstrap from 'bootstrap';

// import 'swiper/swiper-bundle.min.css';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper-bundle.min.css';

// // Initialize Swiper
// document.addEventListener('DOMContentLoaded', function() {
//     new Swiper('.swiper-container', {
//         modules: [Navigation, Pagination],
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const swiperEl = document.querySelector('swiper-container');
    const buttonEl = document.getElementById('slideNextBtn');

    swiperEl.swiper = new Swiper(swiperEl, {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    buttonEl.addEventListener('click', () => {
        swiperEl.swiper.slideNext();
    });
});

