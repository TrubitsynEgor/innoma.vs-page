import { Swiper, Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([EffectFade, Navigation, Pagination, Thumbs]);


const whoWeSlider = new Swiper('.who-we__slider', {
  loop: true,
  slidesPerView: 5,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.4,
    },
    380: {
      slidesPerView: 2.5,
    },
    640: {
      slidesPerView: 3.3,
    },
    769: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    }

  }
});

const exertsSlider = new Swiper('.experts__slider', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 37,
  navigation: {
    nextEl: '.experts__slider-next',
    prevEl: '.experts__slider-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.4,
      spaceBetween: 17,
      navigation: {
        nextEl: '.experts__slider-next-mobile',
        prevEl: '.experts__slider-prev-mobile',
      },
    },
    415: {
      slidesPerView: 2,
      spaceBetween: 27,
      navigation: {
        nextEl: '.experts__slider-next-mobile',
        prevEl: '.experts__slider-prev-mobile',
      },
    },
    690: {
      slidesPerView: 2.5,
      navigation: {
        nextEl: '.experts__slider-next-mobile',
        prevEl: '.experts__slider-prev-mobile',
      },
    },
    769: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.experts__slider-next-mobile',
        prevEl: '.experts__slider-prev-mobile',
      },
    },
    930: {
      slidesPerView: 3.5,
      navigation: {
        nextEl: '.experts__slider-next-mobile',
        prevEl: '.experts__slider-prev-mobile',
      },
    },
    1025: {
      slidesPerView: 4,

    }
  },
})

