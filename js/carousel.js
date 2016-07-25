var carousel = document.getElementById('carousel');
var width = 600;
var initial = 0;
var carouselInterval = setInterval(function() {
    if ((carousel.scrollWidth - 50) >= (carousel.scrollLeft + width)) {
        //Move to next image
        initial = carousel.scrollLeft;

        function animateScroll() {
            var time = 1; //Seconds on animation to switch
            var frame = width / (60 * time); //How many pixels to move

            carousel.scrollLeft += frame; //Scroll 
            if (carousel.scrollLeft < initial + width) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateScroll);
            }
        }
        window.requestAnimationFrame(animateScroll);
    } else {
        //Reset position
        initial = 0;

        function animateReset() {
            var time = 1; //Seconds on animation to switch
            var frame = carousel.scrollLeft / 30; //How many pixels to move

            carousel.scrollLeft -= frame; //Scroll 
            if (carousel.scrollLeft > 15) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateReset);
            } else {
                carousel.scrollLeft = 0;
            }
        }
        window.requestAnimationFrame(animateReset);
    }
}, 4000)