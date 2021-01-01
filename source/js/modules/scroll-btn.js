import {throttle} from '../utils/throttle';

const scrollBtn = () => {
  const elem = document.querySelector(`.js-scroll-btn`);

  if (elem) {

    const scrollHandler = () => {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;
      const isHidden = elem.classList.contains(`visually-hidden`);

      if (scrolled > coords && isHidden) {
        elem.classList.remove(`visually-hidden`);
      }
      if (scrolled < coords && !isHidden) {
        elem.classList.add(`visually-hidden`);
      }
    }

    const throttlingScrollHandler = throttle(scrollHandler, 2000);

    const scroll = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -30);
        setTimeout(scroll, 0);
      }
    }

    elem.addEventListener(`click`, scroll);
    window.addEventListener(`scroll`, throttlingScrollHandler);
  }
}

export {scrollBtn}
