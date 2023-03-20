let burger = document.querySelector('.header__burger');
let sidebar = document.querySelector('.sidebar');
let bannerTitle = document.querySelector(".banner__title");
let bannerDescr = document.querySelector(".banner__description");
let bannerBtn = document.querySelector(".banner__button");

burger.addEventListener('click', function(){
	burger.classList.toggle('header__burger_active');
	sidebar.classList.toggle('sidebar_active');
    bannerTitle.classList.toggle("banner__title_active");
    bannerDescr.classList.toggle("banner__description_active");
    bannerBtn.classList.toggle("banner__button_active");
})