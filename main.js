'use strict';
const navBar = document.querySelector('#navbar');
const navbarHeight = navBar.getBoundingClientRect().height;

//make navbar solid as user scroll down.
document.addEventListener('scroll', () => {
  if (window.screenY > navbarHeight) {
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
  scrollIntoViews(link);
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

const scrollIntoViews = (section) => {
  const scrollTo = document.querySelector(section);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
};
