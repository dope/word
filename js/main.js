'use strict';

var trigger = document.querySelector('.js-trigger');
var nav     = document.querySelector('.js-nav');

function toggleMenu() {
    nav.classList.toggle('site-header__nav--toggle');
}

trigger.addEventListener('click', toggleMenu);
