// DOM Elements

const menu_kichen = document.querySelector('.menu_kichen');
const menu_categories_kichen = document.querySelector('.menu_categories_kichen');
const menu_bar = document.querySelector('.menu_bar');
const menu_categories_bar = document.querySelector('.menu_categories_bar');

menu_kichen.addEventListener('click', onClickKichenHandler);

function onClickKichenHandler() {
  menu_categories_kichen.classList.toggle('active');
}

menu_bar.addEventListener('click', onCkickBarHandler);

function onCkickBarHandler() {
  menu_categories_bar.classList.toggle('active');
}