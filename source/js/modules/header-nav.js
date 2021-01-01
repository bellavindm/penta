import {scrollIntoView} from 'scroll-js';

const headerNav = () => {
  const navElem = document.querySelector(`.js-header-nav`);

  if (navElem) {
    const toggleElem = navElem.querySelector(`.js-header-nav-toggle`);
    const overlayElem = navElem.querySelector(`.js-header-nav-overlay`);

    const showNav = () => {
      navElem.classList.add(`active`);
      toggleElem.classList.add(`active`);
    }

    const hideNav = () => {
      navElem.classList.remove(`active`);
      toggleElem.classList.remove(`active`);
    }

    const toggleNav = () => {
      if (navElem.classList.contains(`active`)) {
        hideNav();
      } else {
        showNav();
      }
    }

    // Set default state
    //---------------------------------
    hideNav();


    // Set listeners
    //---------------------------------
    if (toggleElem) {
      toggleElem.addEventListener(`click`, () => {
        toggleNav();
      });
    }

    if (overlayElem) {
      overlayElem.addEventListener(`click`, () => {
        hideNav();
      });
    }

    navElem.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(evt) {
          evt.preventDefault();
          hideNav();

          const href = this.getAttribute('href').substring(1);
          const target = document.getElementById(href);
          if (target) {
              scrollIntoView(target, document.body, {behavior: `smooth`});
          }
      });
    });
  }
}

export {headerNav};
