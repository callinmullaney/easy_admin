(function ($, Drupal) {

  function myFunction () {
    clearTimeout(myTimer);
  }

  function myStopFunction() {
    myTimer = setTimeout(function () {
      $('.easy-admin').removeClass('secondLevel');
    }, 1000);
  }

  $(document).ready(function() {
    $('.manager-menu > li > a,.manager-menu > li > span,ul.user > li > a').wrapInner('<span />');

    // sub nav functionality
    $('.manager-menu a,.manager-menu span.nolink').click(function(e) {
      if ($(this).parent().find('ul').length) {
        e.preventDefault();
        $('.easy-admin').addClass('secondLevel');
      } else {
        e.preventDefault();
        alert('no subnav');
      }
    });

    var myTimer;

    // mouse enter
    $('.easy-admin').mouseenter(function() {
      myFunction();
    });

    // mouse out
    $('.easy-admin').mouseleave(function() {
      myStopFunction();
    });
  });

})(jQuery, Drupal);