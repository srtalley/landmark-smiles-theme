//version: 1.0
jQuery(function($) {
  $(document).ready(function(){
    $('.et-social-dribbble a').attr('title', 'Email');
    $('.accordion-button').on('click', function(event) {
      event.preventDefault();
      var button_href = this.getAttribute('href').slice(1);
      $('.' + button_href).slideToggle();
    });
  });


});
