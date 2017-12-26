var switcher = true;

function openNav() {
  if (switcher) {
    switcher = false;
    $( "#main" ).animate({
        left: "+=" + $('#mySidenav').width(),
        right: "-=" + $('#mySidenav').width(),
      }, function() {
        // Animation complete.
      });
    //document.getElementById("main").style.marginRight = (-1 * $('#mySidenav').width()) + "px";
    $( "#nav-button" ).animate({
        left: "+=" + $('#mySidenav').width(),
        right: "-=" + $('#mySidenav').width(),
      }, function() {
        $("#nav-button").attr("onclick","closeNav()");
        $('#main').attr("onclick","closeNav()");
      });
      $('#ol').show();
      $('#outer-container').css('overflow','hidden');
    console.log("\""+ $('#mySidenav').width() + "\"");
    }
}

function closeNav() {
  if (!switcher) {
    switcher = true;
  $("#nav-button").attr("onclick","openNav()");
  $('#main').attr("onclick","null");
    $( "#main" ).animate({
        left: "-=" + $('#mySidenav').width(),
        right: "+=" + $('#mySidenav').width(),
      }, function() {
        // Animation complete.
      });
    //document.getElementById("main").style.marginRight = (-1 * $('#mySidenav').width()) + "px";
    $( "#nav-button" ).animate({
        left:  $(window).width() > 992 ? 50 : 10 ,
        right: $(window).width() > 992 ? 50 : 10
      }, function() {
        $('#ol').hide();
        $('#outer-container').css('overflow','scroll');
      });
    }
}

$( window ).resize(function() {
  closeNav();
  $( "#nav-button" ).removeAttr('style');

  //document.getElementById("main").style.left= "0";
  //if ($(window).width() < 992) {
  //  document.getElementById("nav-button").style.left = "10px";
  //  document.getElementById("nav-button").style.top = "10px";
  //} else {
  //  document.getElementById("nav-button").style.left = "50px";
  //  document.getElementById("nav-button").style.top = "50px";
  //}
  //  $("#nav-button").attr("onclick","openNav()");
});

jQuery(document).ready(function($) {
  $(".scroll").click(function(event){		
    event.preventDefault();
    $('html,body').animate({scrollTop:$("#top-background-about").height()},1000);
  });
});