const menu = () => {

  const menuElem = document.querySelector(`.js-menu`);

  if(menuElem) {
    const tabElems = menuElem.querySelectorAll(`[data-menu-tab]`);
    const categoryElems = menuElem.querySelectorAll(`[data-menu-category]`);

    let currentTab;
    let currentCategory;
    let currentSlider;

    const sliderParams = {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: menuElem.querySelector(`.js-menu-arrow-next`),
        prevEl: menuElem.querySelector(`.js-menu-arrow-prev`),
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    };

    const hideAllCategories = () => {
      categoryElems.forEach((elem) => {
        elem.classList.add(`visually-hidden`);
      });
    }

    const unsetAllTabs = () => {
      tabElems.forEach((elem) => {
        elem.classList.remove(`active`);
      });
    }

    const showCategory = (id) => {
      categoryElems.forEach((elem) => {
        if (elem.dataset.menuCategory == id) {
          elem.classList.remove(`visually-hidden`);
          currentSlider = new Swiper(elem.querySelector(`.swiper-container`), sliderParams);
          currentCategory = elem;
        }
      });
    }

    const hideCategory = () => {
      currentCategory.classList.add(`visually-hidden`);
      currentCategory = null;
      currentSlider.destroy();
      currentSlider = null;
    }

    const setTab = (id) => {
      tabElems.forEach((elem) => {
        if (elem.dataset.menuTab == id) {
          elem.classList.add(`active`);

          currentTab = elem;
        }
      });
    }

    const unsetTab = () => {
      currentTab.classList.remove(`active`);
      currentTab = null;
    }


    // Set default state
    //---------------------------------
    hideAllCategories();
    unsetAllTabs();
    showCategory(0);
    setTab(0);


    // Set listeners
    //---------------------------------
    tabElems.forEach((elem) => {
      elem.addEventListener(`click`, () => {
        if (elem !== currentTab) {
          const id = elem.dataset.menuTab;

          currentCategory.classList.add(`active`);
          setTimeout(() => {
            currentCategory.classList.remove(`active`);
            hideCategory();
            showCategory(id);
          }, 600);

          unsetTab();
          setTab(id);
        }
      });
    });
  }
}

export {menu}
