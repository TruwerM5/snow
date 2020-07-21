let menu = $("nav.navbar");
let logo = menu.find('a.navbar-brand').children('img');
let links = menu.find('a.nav-link');
let buttonToggle = menu.find('button.header-toggler');
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();
    if ( scroll > 60 ) { //белый background
      menu.addClass('scrolled');
      links.addClass('scrolled');
      buttonToggle.addClass('scrolled');
      logo.attr('src','img/logo.svg');
    } else { //прозрачный background
      menu.removeClass('scrolled');
      links.removeClass('scrolled');
      buttonToggle.removeClass('scrolled');
      logo.attr('src','img/logo-light.svg');
    }
  });