import {ieFix} from './utils/ie-fix';
import {scrollTo} from './utils/scroll-to';

import {page} from './modules/page';
import {initModals} from './modules/init-modals';
import {headerNav} from './modules/header-nav';
import {menu} from './modules/menu';
import {gallery} from './modules/gallery';
import {news} from './modules/news';
import {scrollBtn} from './modules/scroll-btn';

// Utils
// ---------------------------------

ieFix();
scrollTo();

// Modules
// ---------------------------------

initModals();
page();
gallery();
news();
headerNav();
menu();
scrollBtn();
