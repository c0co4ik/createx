const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items')
const relatedSlider = document.querySelector('.related-project__items')
  import Swiper, { Navigation } from 'swiper';
  Swiper.use([Navigation]);

if (portSlider){
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
}

if (relatedSlider){
const relatedProjSlider = new Swiper(relatedSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  on: {
    init: function () {
      console.log('swiper initialized');

      const activeSlide = relatedSlider.querySelector('.swiper-slide-active');

      const nextActiveSlide = activeSlide.nextElementSibling;

      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible')
      nextActiveSlide.classList.add('slider-visible')
      nextNextActiveSlide.classList.add('slider-visible')
    },
  },
  navigation: {
    nextEl: '.related-project__next',
    prevEl: '.related-project__prev'
  }
});


document.querySelector('.related-project__prev').addEventListener('click', () => {
  const activeSlide = relatedSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.related-project__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible')
  });

  activeSlide.classList.add('slider-visible')
  nextActiveSlide.classList.add('slider-visible')
  nextNextActiveSlide.classList.add('slider-visible')
})

document.querySelector('.related-project__next').addEventListener('click', () => {
  const activeSlide = relatedSlider.querySelector('.swiper-slide-active');

  const nextActiveSlide = activeSlide.nextElementSibling;

  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.related-project__items .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible')
  });

  activeSlide.classList.add('slider-visible')
  nextActiveSlide.classList.add('slider-visible')
  nextNextActiveSlide.classList.add('slider-visible')
})
}



const testimonialsSlider = new Swiper('.testimonials__items', {
  spaceBetween: gap,
  loop: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev'
  }
});
