import {scrollIntoView} from 'scroll-js';

const scrollTo = () => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(evt) {
            evt.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const target = document.getElementById(href);
            if (target) {
                scrollIntoView(target, document.body, {behavior: `smooth`});
            }
        });
    });
}

export {scrollTo};
