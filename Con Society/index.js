// Wait for the window to finish loading
window.addEventListener('load', function() {

    // Get the image container element
    var imageContainer = document.querySelector('.image-container');
  
    // Define the animation
    var animation = anime({
      targets: imageContainer,
      translateX: ['-100%', '0%'],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 500
    });
  
  });
  