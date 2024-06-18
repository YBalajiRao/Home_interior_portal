// JavaScript to handle scrolling
document.addEventListener("DOMContentLoaded", function() {
    const imageGallery = document.querySelector('.image-gallery');
    const scrollLeftBtn = document.querySelector('.scroll-btn.left');
    const scrollRightBtn = document.querySelector('.scroll-btn.right');

    scrollLeftBtn.addEventListener('click', function() {
        imageGallery.scrollBy({
            left: -200, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', function() {
        imageGallery.scrollBy({
            left: 200, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });

    // Show/hide scroll buttons based on scroll position
    imageGallery.addEventListener('scroll', function() {
        const scrollLeft = imageGallery.scrollLeft;
        const scrollWidth = imageGallery.scrollWidth;
        const clientWidth = imageGallery.clientWidth;

        if (scrollLeft === 0) {
            scrollLeftBtn.style.display = 'none';
        } else {
            scrollLeftBtn.style.display = 'block';
        }

        if (scrollLeft + clientWidth >= scrollWidth) {
            scrollRightBtn.style.display = 'none';
        } else {
            scrollRightBtn.style.display = 'block';
        }
    });
});
