const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  }

  });

  document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass:	'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    openOnInit: [0],
      collapse: false
  });
  })


  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });




let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link')

burger.addEventListener('click',

function() {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll')
    })



menuLinks.forEach(function (el) {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
})


document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form-head").classList.add("form-head__active");
  this.classList.add("active");
})

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form-head");
  if (!target.closest(".form-container")) {
  form.classList.remove("form-head__active");
    form.querySelector(".form__input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})

document.querySelector(".form-btn__close").addEventListener("click", function() {
  document.querySelector(".form-head").classList.remove("form-head__active");

})
