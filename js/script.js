$(document).ready(function() {
  $('.animate__fadeInUp').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__animated animate__fadeInUp');
      }
    },
    offset: '90%', // Adjust this value as needed
  });
});
ScrollReveal().reveal('.jumbotron', {
  duration: 1000,     // Animation duration in milliseconds
  origin: 'bottom',   // Animation origin (can be 'top', 'right', 'bottom', or 'left')
  distance: '20%',    // Distance the element moves while animating
  delay: 200,         // Delay before the animation starts in milliseconds
  opacity: 0.8,       // Starting opacity
  easing: 'ease-in',  // Easing function for animation
});
$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
    $('#navbarSupportedContent').collapse('toggle');
  });
});

// $(document).on("scroll", function(){
//   var pixels = $(document).scrollTop();
//   var pageHeight = $(document).height() - $(window).height();
//   var progress = 100 * pixels / pageHeight;
  
//   $("div.progress").css("width", progress + "%");
// });
$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
});