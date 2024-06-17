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

    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 60; 

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
    el.removeEventListener('click', toggleSkills);
    el.addEventListener('click', toggleSkills); 
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

document.addEventListener("DOMContentLoaded", function() {
    const subtitles = [
        "An Aspiring Software Developer",
        "A Passionate Programmer",
        "A Creative Problem Solver",
        "A Tech Enthusiast"
    ];
    let currentSubtitleIndex = 0;
    const subtitleElement = document.getElementById("dynamicSubtitle");
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'cursor';
    cursorSpan.textContent = ''; 

    function updateSubtitleText(text) {
        subtitleElement.innerHTML = text + '<span class="cursor"></span>'; 
    }

    function typeNextSubtitle() {
        if (currentSubtitleIndex >= subtitles.length) currentSubtitleIndex = 0;
        let currentCharIndex = 0;
        const nextSubtitle = subtitles[currentSubtitleIndex];
        updateSubtitleText(''); 
        const typingInterval = setInterval(() => {
            if (currentCharIndex < nextSubtitle.length) {
                updateSubtitleText(subtitleElement.textContent + nextSubtitle.charAt(currentCharIndex));
                currentCharIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    cursorSpan.remove(); 
                    deleteCurrentSubtitle();
                }, 2000); 
            }
        }, 100);
    }

    function deleteCurrentSubtitle() {
        const deletingInterval = setInterval(() => {
            const currentText = subtitleElement.textContent;
            if (currentText.length > 0) {
                updateSubtitleText(currentText.substring(0, currentText.length - 1));
            } else {
                clearInterval(deletingInterval);
                currentSubtitleIndex++; 
                setTimeout(typeNextSubtitle, 500); 
            }
        }, 50);
    }


    typeNextSubtitle();
});

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

document.body.classList.add(darkTheme);
themeButton.classList.add(iconTheme);

localStorage.setItem('selected-theme', 'dark');
localStorage.setItem('selected-icon', 'uil-moon');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});