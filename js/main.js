$(document).ready(function(){
  /*var s = skrollr.init({
    forceHeight:false
  });
  if (s.isMobile()) {
    s.destroy();
  }
  */

  $('.locations-link').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("#dealership-locations").offset().top - 20
    }, 1000);
  })

  var loc;
  $('.location').hover(
    function() {
      loc = $(this).attr('data-location');
      $('#location-'+loc).addClass('active');
    }, function() {
      $('#location-'+loc).removeClass('active');
    }
  );

  $('.navicon').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('.tcon').removeClass('tcon-transform');
      $('.nav-mobile').removeClass('open');
    } else {
      $('.tcon').addClass('tcon-transform');
      $('.nav-mobile').addClass('open');
    }
    $(this).data("clicks", !clicks);
  });

  $('.locations-link-mobile').click(function() {
    $('.navicon').click();
  });

});
