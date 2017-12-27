
// ISOTOPE FILTER
jQuery(document).ready(function ($) {
  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });
  }
});

var pagepilingChildrenNum = 0;
jQuery(document).ready(function ($) {
  pagepilingChildrenNum = $("#pagepiling .section").length;
  try {
    $('#pagepiling').pagepiling(function () {
      $('#pagepiling').pagepiling({
        navigation: {
          'position': 'left',
          'bulletsColor': 'white'
        },
        onLeave: function (index, nextIndex, direction) {
          //after leaving section 2
          if (index === pagepilingChildrenNum - 2 && direction == 'down') {
            nextIndex = index;
          }
        }
      });
    });
    $.fn.pagepiling.setKeyboardScrolling(true);
    $.fn.pagepiling.setAllowScrolling(true);
  } catch (e) {
    console.log(e);
  }
});


$(window).load(function () {
  $('#loader').fadeOut(1000); // set duration in brackets  
  $('#overlay-for-loader').fadeOut(1000);
  
  $('#video-background-2').vide({
    mp4: 'video/beach.mp4',
    poster: 'images/beach'
  }, {
    posterType: 'png'
  });

  $('#video-background-4').vide({
    mp4: 'video/cloud.mp4',
    poster: 'images/cloud',
  }, {
    posterType: 'PNG'
  });
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
    effect: 'fadeScale',
  });


  // HOME BACKGROUND SLIDESHOW
  $(function () {
    jQuery(document).ready(function () {
      $('#home').backstretch([
        "images/factory1.jpg",
        "images/factory2.jpg",
        "images/factory3.jpg"
      ], { duration: 2000, fade: 750 });
      $('#video-background-2').backstretch([
        "images/beach.png"
      ], { duration: 2000, fade: 750 });
      $('#subsideries').backstretch([
        "images/superstunningbackground1.jpeg",
        "images/superstunningbackground2.jpg",
        "images/superstunningbackground3.jpg",
      ], { duration: 2000, fade: 750 });
      $('#video-background-4').backstretch([
        "images/cloud.PNG"
      ], { duration: 2000, fade: 750 });
    });
  })

});

$(window).resize(function () {
  closeNav();
});


function openNav() {
  document.getElementById("pagepiling").style.marginLeft = $('#mySidenav').width() + "px";
  document.getElementById("nav-button").style.marginLeft = $('#mySidenav').width() + "px";
  console.log("\"" + $('#mySidenav').width() + "\"");
  setTimeout(function () {
    $("#nav-button").attr("onclick", "closeNav()");
    $("#pagepiling").attr("onclick", "closeNav()");
  }, 1);
}

function closeNav() {
  document.getElementById("pagepiling").style.marginLeft = "0";
  document.getElementById("nav-button").style.marginLeft = "0";
  $("#nav-button").attr("onclick", "openNav()");
  $("#pagepiling").attr("onclick", "null");
}
