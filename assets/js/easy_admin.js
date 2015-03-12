(function ($, Drupal) {

  function clearTimer () {
    clearTimeout(timer);
  }

  function resetMenu() {
    timer = setTimeout(function () {
      $('.easy-admin').removeClass('secondLevel');
      $('.easy-admin ul').removeClass('active');
    }, 1000);
  }

  $(document).ready(function() {
    $('.manager-menu > li > a,.manager-menu > li > span,ul.user > li > a').wrapInner('<span />');

    // sub nav functionality
    $('.manager-menu a,.manager-menu span.nolink').click(function(e) {
      if ($(this).parent().find('ul').length) {
        e.preventDefault();
        $(this).parent().find('ul').addClass('active');
        $('.easy-admin').addClass('secondLevel');
      }
    });

    // add "hasdropdown" class to list items that have children
    $('.manager-menu li').each(function() {
      if ($(this).find('ul').length) {
        $(this).addClass('hasdropdown');
      }
    });

    // add back button - needs to be added to module
    $('.manager-menu .manager-menu').prepend('<button class="back"><i class="fa fa-long-arrow-left"></i>Back</button>');

    // back button functionality
    $('.easy-admin button.back').click(function() {
      $('.easy-admin').removeClass('secondLevel');
      $('.easy-admin ul').removeClass('active');
    });

    // add icon to links - needs to be added to module
    $('.easy-admin .manager-menu > li > a,.easy-admin .manager-menu > li > span.nolink').prepend('<i />');

    // mouse enter
    $('.easy-admin').mouseenter(function() {
      clearTimer();
    });

    // mouse out
    $('.easy-admin').mouseleave(function() {
      resetMenu();
    });
  });

})(jQuery, Drupal);