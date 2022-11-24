const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items')

import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    init: function () {
      console.log('swiper initialized');

      const activeSlide = portSlider.querySelector('.swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;

      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible')
      nextActiveSlide.classList.add('slider-visible')
      nextNextActiveSlide.classList.add('slider-visible')
    },
  },
  navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev'
  }
});


document.querySelector('.portfolio-section__prev').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible')
  });

  activeSlide.classList.add('slider-visible')
  nextActiveSlide.classList.add('slider-visible')
  nextNextActiveSlide.classList.add('slider-visible')
})

document.querySelector('.portfolio-section__next').addEventListener('click', () => {
  const activeSlide = portSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible')
  });

  activeSlide.classList.add('slider-visible')
  nextActiveSlide.classList.add('slider-visible')
  nextNextActiveSlide.classList.add('slider-visible')
})
