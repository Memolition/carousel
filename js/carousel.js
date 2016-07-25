var carousel = document.getElementById('carousel');
var width = 600;
var initial = 0;
var carouselInterval = setInterval(function() {
    if ((carousel.scrollWidth - 50) >= (carousel.scrollLeft + width)) { //If didn't reached final image 
        //Move to next image
        initial = carousel.scrollLeft; //Set initial scrollLeft to calculate final image position

        function animateScroll() {
            var time = 1; //Seconds on animation to switch
            var frame = width / (60 * time); //How many pixels to move

            carousel.scrollLeft += frame; //Scroll 
            if (carousel.scrollLeft < initial + width) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateScroll); //Call next frame
            }
        }
        window.requestAnimationFrame(animateScroll); //Start animation
    } else { //If reached last image on carousel
        //Reset carousel position
        initial = 0; //Set initial position to calculate final carousel position
        function animateReset() {
            var time = 1; //Seconds on animation to switch
            var frame = carousel.scrollLeft / 30; //How many pixels to move

            carousel.scrollLeft -= frame; //Scroll 
            if (carousel.scrollLeft > 15) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateReset); //Call next frame
            } else {
                carousel.scrollLeft = 0; //Fallback to 0 even if time is up.
            }
        }
        window.requestAnimationFrame(animateReset); //Start animation to reset carousel
    }
}, 4000)