const news = () => {
  const elem = document.querySelector(`.js-news`);

  if (elem) {

    const sliderParams = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: elem.querySelector(`.js-news-arrow-next`),
        prevEl: elem.querySelector(`.js-news-arrow-prev`),
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

export {news};
