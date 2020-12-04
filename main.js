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

// Make navbar transparent when it is on the top
const home = document.querySelector('.home__container');
const homeHeight = home.clientHeight;
  document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
  });


// Navbar scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
  const link = event.target.dataset.link;
  if(link == null){
    return;
  }
    navbarMenu.classList.remove('open');
    scrollIntoviews(link);
 
});



// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open');
});





//contact me 클릭시 contact 섹션으로 이동
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (event)=>{
  scrollIntoviews('#contact');
});


//일정부분 스크롤 될 경우 상단퀵버튼 생성
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
  if(scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

//상단퀵버튼 클릭시 홈섹션 이동
arrowUp.addEventListener('click', (event)=>{
  scrollIntoviews('#home');
}); 

//
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
  workBtnContainer.addEventListener('click', (event)=> {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
      return;
    }

    //버튼 selected
    const active = document.querySelector('.category__btn.selected');  
    active.classList.remove('selected');

    const target = 
      event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected'); 

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
      projects.forEach((project) =>{
        if(filter === "*" || filter === project.dataset.type){
          project.classList.remove('invisible');
        }
        else{
          project.classList.add('invisible');
        }
      });

      projectContainer.classList.remove('anim-out');
    }, 300);

  });





/*★★★★★★★★★★★★★★★★★★
 ★★★★★★★★ Function ★★★★★★
  ★★★★★★★★★★★★★★★★★★*/

function scrollIntoviews(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}