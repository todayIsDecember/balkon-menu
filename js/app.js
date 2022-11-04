// DOM Elements

const menu_kichen = document.querySelector('.menu_kichen');
const menu_categories_kichen = document.querySelector('.menu_categories_kichen');
const menu_bar = document.querySelector('.menu_bar');
const menu_categories_bar = document.querySelector('.menu_categories_bar');
const menu_first_categories = document.querySelector('.menu_first_categories');
const menu_salat_categories = document.querySelector('.menu_salat_categories');
const menu_bruskets_categories = document.querySelector('.menu_bruskets_categories');
const menu_cold_appetizers_categories = document.querySelector('.menu_cold_appetizers_categories');
const menu_hot_categories = document.querySelector('.menu_hot_categories');
const menu_odesa_delicateses_categories = document.querySelector('.menu_odesa-delicateses_categories ');
const menu_main_categories = document.querySelector('.menu_main_categories');
const menu_burgers_categories = document.querySelector('.menu_burgers_categories');
const menu_garnirs_categories = document.querySelector('.menu_garnirs_categories');
const menu_companies_categories = document.querySelector('.menu_companies_categories');
const menu_deserts_categories = document.querySelector('.menu_deserts_categories');
const header_text = document.querySelector('.header_text');
const menu_coffe_categories = document.querySelector('.menu_coffe_categories');
const menu_tia_categories = document.querySelector('.menu_tia_categories');
const menu_not_alcohol_categories = document.querySelector('.menu_not_alcohol_categories');
const menu_alcohol_categories = document.querySelector('.menu_alcohol_categories');
const menu_alcohol_coctails_categories = document.querySelector('.menu_alcohol_coctails_categories');

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

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
  }else if(parent.classList.contains('menu_bruskets')) {
    menu_bruskets_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_cold_appetizers')) {
    menu_cold_appetizers_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_hot_appetizers')) {
    menu_hot_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_odesa-delicateses')) {
    menu_odesa_delicateses_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_main')) {
    menu_main_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_burgers')) {
    menu_burgers_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_garnirs')) {
    menu_garnirs_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_for-companies')) {
    menu_companies_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_deserts')) {
    menu_deserts_categories.classList.toggle('active');
  }
});

setTimeout(() => {header_text.classList.add('active_title')}, 700);

menu_categories_bar.addEventListener('click', (e) => {
  let parent = e.target.closest('.menu_submenu');
  if(parent.classList.contains('menu_coffe')) {
    menu_coffe_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_tia')) {
    menu_tia_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_not-alcohol')) {
    menu_not_alcohol_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_alcohol')) {
    menu_alcohol_categories.classList.toggle('active');
  }else if(parent.classList.contains('menu_alcohol-coctails')) {
    menu_alcohol_coctails_categories.classList.toggle('active');
  }
})