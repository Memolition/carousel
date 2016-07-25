var carousel = document.getElementById('carousel');
var width = 600;
var initial = 0;
var frame;

var carouselInterval = setInterval(function() {
    if ((carousel.scrollWidth - 50) >= (carousel.scrollLeft + width)) { //If didn't reached final image 
        //Move to next image
        initial = carousel.scrollLeft; //Set initial scrollLeft to calculate final image position

        frame = width / 60; //How many pixels to move

        function animateScroll() {
            var time = 1; //Seconds on animation to switch

            carousel.scrollLeft += frame; //Scroll 
            if (carousel.scrollLeft < initial + width) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateScroll); //Call next frame
            }
        }
        window.requestAnimationFrame(animateScroll); //Start animation
    } else { //If reached last image on carousel
        //Reset carousel position
        //carousel.scrollLeft = 1000;
        initial = 0; //Reset initial var position to start from first slide
        frame = carousel.scrollLeft / 60; //How many pixels to move

        function animateReset() {
            var time = 1; //Seconds on animation to switch
            if (carousel.scrollLeft > 500) //Smooth final reset animation
                frame = carousel.scrollLeft / 30;

            carousel.scrollLeft -= frame; //Scroll 
            if (carousel.scrollLeft > 5) { //If image isn't fixed within carousel viewport
                window.requestAnimationFrame(animateReset); //Call next frame
            } else {
                carousel.scrollLeft = 0; //Fallback to 0 even if time is up.
            }
        }
        window.requestAnimationFrame(animateReset); //Start animation to reset carousel
    }
}, 4000)