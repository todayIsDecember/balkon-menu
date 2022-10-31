// DOM Elements

const menu_kichen = document.querySelector('.menu_kichen');
const menu_categories_kichen = document.querySelector('.menu_categories_kichen');
const menu_bar = document.querySelector('.menu_bar');
const menu_categories_bar = document.querySelector('.menu_categories_bar');
const menu_first_categories = document.querySelector('.menu_first_categories');
const menu_salat_categories = document.querySelector('.menu_salat_categories');

menu_kichen.addEventListener('click', onClickKichenHandler);

function onClickKichenHandler() {
  menu_categories_kichen.classList.toggle('active');
}

menu_bar.addEventListener('click', onCkickBarHandler);

function onCkickBarHandler() {
  menu_categories_bar.classList.toggle('active');
}

menu_categories_kichen.addEventListener('click', (e) => {
  let parent = e.target.closest('.menu_submenu');
  if(parent.classList.contains('menu_first')) {
    menu_first_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_salats')){
    menu_salat_categories.classList.toggle('active');
  }
})