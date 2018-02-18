// libs
import $ from 'jquery';
import AOS from 'aos';

$(() => {

  $(document).foundation();

  $('#fullpage').fullpage({
    scrollBar: true
  });

  AOS.init({
    duration: 800,
  });

  $('#ajax-contact-form').submit(function(){
    var str = $(this).serialize();
  
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: str,
      success: function(msg){
        $(document).ajaxComplete(function(){
          if(msg == 'OK') {
            var result = '<div class="notification_ok">Your message has been sent Succesfully. Thank you.</div>';
            $('#fields').hide();
          }
          else {
            result = msg;
          }
          $('#note').hide();
          $('#note').html(result).slideDown('slow');
          $('#note').html(result);
        });
      }
    });
    return false;
  });

});
