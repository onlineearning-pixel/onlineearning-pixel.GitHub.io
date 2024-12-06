// Smooth Scroll Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Testimonial Slider Logic
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
    });
    // Show the current testimonial
    testimonials[index].style.display = 'block';
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}

showTestimonial(currentIndex);  // Initial display

// Contact Form Validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Form submitted successfully!');
        return true; // Form is valid
    } else {
        alert('Please fill in all fields.');
        return false; // Form is invalid
    }
}
