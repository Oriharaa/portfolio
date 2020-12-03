'use strict';


//스크롤을 내릴 때 navbar에 동적요소 추가
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.clientHeight;
const navbarHeight2 = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=> {
 /*  console.log(`window.scrollY : ${window.scrollY}`);
  console.log(`navbarHeight : ${navbarHeight}`);
  console.log(`navbarHeight(ver.2) :  ${navbarHeight2}`); */

  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  }else {
    navbar.classList.remove('navbar--dark');
  }

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