// Select all slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

// Show the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Show the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-scroll functionality
setInterval(() => {
    nextSlide();
}, 6000);

// Initialize the first slide
showSlide(currentSlide);
