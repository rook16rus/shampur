import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function infinitySlider() {
  const sliders = document.querySelectorAll('.js-infinity-slider');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      speed: 6000,
      loop: true,
      loopAdditionalSlides: 10,
      loopSlides: 20,
      loopedSlidesLimit: false,
      spaceBetween: 16,
      nested: true,
      freeMode: true,
      allowTouchMove: false,
      simulateTouch: false,
      noSwiping: true,
      preventInteractionOnTransition: true,
      autoplay: {
        enabled: true,
        delay: 1,
        disableOnInteraction: false
      },
      breakpoints: {
        769: {
          spaceBetween: slider.dataset.space ? Number(slider.dataset.space) : 32,
        }
      }
    })

    window.shampur_API.swipers.push(swiper);
  })
}
