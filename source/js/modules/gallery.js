const gallery = () => {
  const elem = document.querySelector(`.js-gallery`);

  if (elem) {

    const sliderParams = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: elem.querySelector(`.js-gallery-arrow-next`),
        prevEl: elem.querySelector(`.js-gallery-arrow-prev`),
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    };

    const slider = new Swiper(elem.querySelector(`.swiper-container`), sliderParams);
  }
}

export {gallery};
