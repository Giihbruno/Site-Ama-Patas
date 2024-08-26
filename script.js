//Parte do slider das fotos da adoção//
const btnNext = document.getElementById('nextSlide')
const btnPrevious = document.getElementById('previousSlide')
const slider = document.querySelector('.slider')
const content = document.querySelector('.content-slider')

const { width: slideWidth } = window.getComputedStyle(slider)
const { width: contetWidth } = window.getComputedStyle(content)

let currentSlide = 0;

const slideProps = {
    width: parseInt(slideWidth),
    scroll: 0,
}

function setCurrentDot() {
    const dots = document.querySelectorAll('.dot')
    for (let dot of dots) {
        dot.classList.remove('current')
    }
    dots[currentSlide].classList.add('current')
}

function controlSlide({ target: { id } }) {
    const contentLenght = content.children.length;
    switch (id) {
        case 'nextSlide': {
            if (slideProps.scroll + slideProps.width < parseInt(contetWidth)) {
                slideProps.scroll += slideProps.width;
            }
            if (currentSlide < contentLenght - 1) {
                currentSlide += 1;
                setCurrentDot()
            }
            return slider.scrollLeft = slideProps.scroll;
        }

        case 'previousSlide': {
            if (currentSlide > 0) {
                currentSlide -= 1;
                setCurrentDot()
            }
            slideProps.scroll = slideProps.scroll - slideProps.width < 0 ? 0 : slideProps.scroll - slideProps.width;
            return slider.scrollLeft = slideProps.scroll;
        }

        default:
            break;
    }

}

btnNext.addEventListener('click', controlSlide)
btnPrevious.addEventListener('click', controlSlide)

window.onload = () => {
    const contentLenght = content.children.length;
    for (let index = 0; index < contentLenght - 1; index += 1) {
        const newDot = slider.parentElement.querySelector('.dot').cloneNode();
        slider.parentElement.querySelector('.length-dots').appendChild(newDot)
    }
    setCurrentDot();
}

const sections = $('section');
const navLink = $('.nav-link');

$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(233, 15, 52, 0.76');
    }
});


ScrollReveal().reveal('.textos', {
    origin: 'left',
    duration: 4000,
    distance: '20%'
});






