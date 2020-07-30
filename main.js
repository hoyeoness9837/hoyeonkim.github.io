'use strict';
const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;
console.log('navbarhight:', navbarHeight);

//make navbar solid as user scroll down.
document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    navBar.classList.add('navbar--dark');
  } else {
    navBar.classList.remove('navbar--dark');
  }
});

//navigate users to certain section as they click nav item.
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null || undefined) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoViews(link);
});

//Handle Navbar hanburger dropdown
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//handle clicking contact me btn in home
document.querySelector('.home__contact').addEventListener('click', () => {
  scrollIntoViews('#contact');
});

//make home gradually fade out as user scroll down.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show arrow up button when scrolling down.
const arrowUp = document.getElementById('gotoTopBtn');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoViews('#home');
});

//Handle Project filters
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }

  //Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;

  target.classList.add('selected');

  projectContainer.classList.add('anim-out');

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

const scrollIntoViews = (section) => {
  const scrollTo = document.querySelector(section);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
};
