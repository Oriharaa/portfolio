'use strict';


//스크롤을 내릴 때 navbar에 동적요소 추가
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.clientHeight;
const navbarHeight2 = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else {
    navbar.classList.remove('navbar--dark');
  }
});

//스크롤을 내릴때 home이 투명해지도록
const home = document.querySelector('.home__container');
const homeHeight = home.clientHeight;
  document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
  });


//navbar menu 클릭시 해당 섹션으로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }else{
    scrollIntoviews(link);
  } 
});

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (event)=>{
  scrollIntoviews('#contact');
});

function scrollIntoviews(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}