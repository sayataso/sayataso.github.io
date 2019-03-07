
$(document).ready(function() {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
      var topPos = $(this).scrollTop();

      if(topPos > 100) {
          $(scrollTop).css("opacity", "1");
      }else {
          $(scrollTop).css("opacity", "0");
      }
  });
  
  $(scrollTop).click(function() {
      $('body, html').animate( {
          scrollTop: 0
      }, 800);
      return false;
  });
});