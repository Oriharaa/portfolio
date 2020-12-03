'use strict';


//스크롤을 내릴 때 navbar에 동적요소 추가
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.clientHeight;
const navbarHeight2 = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
  console.log(`window.scrollY : ${window.scrollY}`);
  console.log(`navbarHeight : ${navbarHeight}`);
  console.log(`navbarHeight(ver.2) :  ${navbarHeight2}`);

  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else {
    navbar.classList.remove('navbar--dark');
  }

});