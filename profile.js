
//
//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//  $("#back-to-top").hide();
//}

$(document).ready(function() {
  $(this).scrollTop(0);
  $("#back-to-top").hide();
  $(document).attr('title', 'Katie Lee')
//  if($(window).scrollTop() === 0) {
//    $("#back-to-top").hide();
//  }
});

$(document).scroll(function() { 
  if($(window).scrollTop() === 0) {
    $("#back-to-top").hide();
  }
  else {
    $("#back-to-top").show();
  }
});

$(function () {
  var currentHash = "#top"
  $(document).scroll(function () {
    $('.section').each(function () {
        var top = window.pageYOffset;
        var distance = top - $(this).offset().top;
        var hash = $(this).attr('id');

        if (distance < 30 && distance > -30 && currentHash != hash) {
//          alert(hash);
          if ($(window).scrollTop() === 0) {
            $(document).attr('title', 'Katie Lee');
          }
          else {
            var page_title = hash + " | Katie Lee";
            $(document).attr('title', page_title);
          }
          console.log(hash);
          currentHash = hash;
        }
    });
  });
});