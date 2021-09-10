"use strict";

$(document).ready(function() {
  if($(window).scrollTop() === 0) {
    $("#back-to-top").hide();
  }
});

$(document).scroll(function() { 
  if($(window).scrollTop() === 0) {
    $("#back-to-top").hide();
  }
  else {
    $("#back-to-top").show();
  }
});
//
//$("#about").scroll(function() {
//  var url = window.location.origin;
//  window.location.replace(url + "/#about");
//})