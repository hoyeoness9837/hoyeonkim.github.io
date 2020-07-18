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
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
