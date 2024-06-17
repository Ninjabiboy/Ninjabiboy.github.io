const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
      navMenu.classList.toggle('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
    })
}
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href').substring(1); // Extract the target ID (without #)
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calculate the position to scroll to accounting for a fixed header (e.g., 60px)
                const offsetTop = targetElement.offsetTop - 60; // Adjust the 60px offset as needed

                // Smoothly scroll to the target position
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    const skillBars = this.parentNode.querySelectorAll('.skills__bar');

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';

        skillBars.forEach(bar => {
            bar.classList.remove('animate');
            void bar.offsetWidth;
            requestAnimationFrame(() => {
                bar.classList.add('animate');
            });
        });
    } else {
        this.parentNode.className = 'skills__content skills__close';
    }
}

skillsHeader.forEach((el) => {
    el.removeEventListener('click', toggleSkills); // Remove the existing event listener
    el.addEventListener('click', toggleSkills); // Add the updated event listener
});



const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('experience__active')
        })
        target.classList.add('experience__active')

        tabs.forEach(tab =>{
            tab.classList.remove('experience__active')
        })
        tab.classList.add('experience__active')
    })
})


const swiper = new Swiper('.swiper', {
  cssMode: true,
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


document.addEventListener('DOMContentLoaded', (event) => {
    const learnMoreButton = document.querySelector('.home__scroll-button');
    const moreContent = document.getElementById('more-content');

    learnMoreButton.addEventListener('click', function() {
        if (moreContent.classList.contains('hidden')) {
            moreContent.classList.remove('hidden');
            moreContent.classList.add('visible');
        } else {
            moreContent.classList.remove('visible');
            moreContent.classList.add('hidden');
        }
    });
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Functions to get the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Set dark mode as the default
document.body.classList.add(darkTheme);
themeButton.classList.add(iconTheme);

// Update localStorage with the default theme and icon
localStorage.setItem('selected-theme', 'dark');
localStorage.setItem('selected-icon', 'uil-moon');

// Add event listener to the theme button to toggle themes
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});