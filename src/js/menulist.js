import menuCardsTpl from '../templates/menu-card.hbs';
import menu from './menu.json';
import '../css/styles.css';

export const menuList = document.querySelector('.js-menu');
const cardsMarkup = menuCardsTpl(menu);

menuList.insertAdjacentHTML('beforeend', cardsMarkup);
