document.querySelector('.contact-button').addEventListener('click', function(event) {
    event.preventDefault();
});
function openForm() {
    document.getElementById('contactForm').style.display = 'flex';
}

function closeForm() {
    document.getElementById('contactForm').style.display = 'none';
}
let slideIndex = 1;
const slidesToShow = 3; 

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let totalSlides = slides.length;
    let maxIndex = Math.ceil(totalSlides / slidesToShow);

    if (n > maxIndex) { slideIndex = 1 }
    if (n < 1) { slideIndex = maxIndex }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex - 1].className += " active";
    document.querySelector('.slides').style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;


}


function openForm() {
    document.getElementById("contactForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

showSlides(slideIndex);



document.addEventListener('DOMContentLoaded', (event) => {
    const contents = document.querySelectorAll('.content');
    const firstContent = contents[0];

    firstContent.classList.add('hovered');

    contents.forEach(content => {
        content.addEventListener('mouseover', () => {
            contents.forEach(c => c.classList.remove('hovered'));
            content.classList.add('hovered');
        });

        content.addEventListener('mouseout', () => {
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var contents = document.querySelectorAll('.content');
    var mainImage = document.getElementById('main-image');

    contents.forEach(function(content) {
        content.addEventListener('mouseover', function() {
            contents.forEach(function(c) {
                c.classList.remove('selected');
            });

            content.classList.add('selected');

            var imageUrl = content.getAttribute('data-image');
            mainImage.src = imageUrl;
        });
    });

    var defaultContent = document.querySelector('.content.selected');
    if (defaultContent) {
        mainImage.src = defaultContent.getAttribute('data-image');
    }
});

