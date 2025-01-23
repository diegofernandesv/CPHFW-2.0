





            const items = document.querySelectorAll('.carousel-item');

            let currentIndex = 0;  // Keeps track of the currently visible image group

            // Function to move carousel to the left or right
            function moveCarousel(direction) {
                const itemWidth = items[0].offsetWidth + 10;  // Width of one image + gap
                const maxIndex = items.length - 2;  // To ensure we don't go beyond the images

                // Prevent the carousel from exceeding the last image
                if (direction === 'left' && currentIndex < maxIndex) {
                    currentIndex++;
                } else if (direction === 'right' && currentIndex > 0) {
                    currentIndex--;
                }

                carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            }

            // Detect touch start and touch end for mobile swipe
            carousel.addEventListener('touchstart', function (e) {
                startX = e.touches[0].clientX;  // Capture the initial touch position
            });

            carousel.addEventListener('touchend', function (e) {
                endX = e.changedTouches[0].clientX;  // Capture the end touch position
                const threshold = 50;  // Minimum swipe distance to trigger a move
                if (startX - endX > threshold) {
                    moveCarousel('left');
                } else if (endX - startX > threshold) {
                    moveCarousel('right');
                }
            });