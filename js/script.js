$('.head').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.arrow').toggleClass('arrow-animate');
    $(this).parent().find('.content').slideToggle(280);
  });

  $(function () {
    // Scroll to elements smoothly
    $('html').smoothScroll(1000)
  
    // Enable parallax on divs
    $(window).enllax({
      type: 'foreground'
    })
  
    // Reveal .slowshow when user gets close to page 2
    $('.slowshow').hide()
  
    $('#page2').waypoint(
      function () {
        $('.slowshow').fadeIn(1000)
      },
      {
        offset: 200,
        horizontal: true
      }
    )
  
    // Update nav links when user scrolls/clicks to different pages
    $('.page1_link').addClass('selected')
  
    $('#page2').waypoint(function (direction) {
      $('nav a').removeClass('selected')
      if (direction == 'down') $('.page2_link').addClass('selected')
      else $('.page1_link').addClass('selected')
    })
  
    $('#page3').waypoint(function (direction) {
      $('nav a').removeClass('selected')
      if (direction == 'down') $('.page3_link').addClass('selected')
      else $('.page2_link').addClass('selected')
    })
  
    $('#page4').waypoint(function (direction) {
      $('nav a').removeClass('selected')
      if (direction == 'down') $('.page4_link').addClass('selected')
      else $('.page3_link').addClass('selected')
    })
  })

  
  "use strict"

function toggleIcon() {
    $(".icon").on("click", function() {
        $(".icon").toggleClass("active")
        $(".menu-mobile").slideToggle(300)
    })
}

function closeMobileMenu() {
    $(".menu-mobile").on("click", "a", function() {
        $(".icon").trigger("click")
    })
}


//when the page loads call toggleIcon;
$(toggleIcon)
$(closeMobileMenu)