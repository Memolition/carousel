var carousel = document.getElementById('carousel');
var carouselInterval = setInterval(function() {
    if ((carousel.scrollWidth - 50) >= (carousel.scrollLeft + 600)) {
        carousel.scrollLeft += 605;
    } else {
        carousel.scrollLeft = 0;
    }
}, 3000);