/// <reference path="../typings/globals/jquery/index.d.ts" />

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 55) {
      $('.navbar .navbar-brand img').attr('src', 'https://www.luatix.org/wp-content/uploads/2018/12/logo_menu_text.png');
    }
    if ($(this).scrollTop() < 55) {
      $('.navbar .navbar-brand img').attr('src', 'https://www.luatix.org/wp-content/uploads/2018/12/logo_menu_text_white.png');
    }
  })
});

$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 55) {
            $(".back a").addClass("black");
        } 
        else {
            $(".back a").removeClass("black");
        } 
    });
});

$(function() {
  AOS.init();
});

$(window).on('load', function() {
  AOS.refresh();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 50 ) {
      $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
      $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function(){$(".scroll").click(function(){
$("html,body").animate({
scrollTop:$(".thetop").offset().top},"1000");
return false})
})

$(function(){$(".bg-112").click(function(){
  $("html,body").animate({
  scrollTop:$("#blog").offset().top},"1000");
  return false})
  })

window.formValidatorData = {"rules":{"notEmpty":["^.+$","mgi"],"email":["^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$","gi"],"url":["^((https?|ftp|gopher|telnet|file|notes|ms-help):((\/\/)|(\\\\))+[\\w\\d:#@%\/;$()~_?\\+-=\\\\.&]*)$","gi"],"alphaNumeric":["[a-zA-Z0-9_\\-]+$","gi"],"numeric":["^([0-9]+|)$","gi"]},"validations":[{"field":"firstname","rule":"notEmpty","errorMessage":"notEmpty"},{"field":"lastname","rule":"notEmpty","errorMessage":"notEmpty"},{"field":"email","rule":"notEmpty","errorMessage":"notEmpty"},{"field":"subject","rule":"notEmpty","errorMessage":"notEmpty"},{"field":"message","rule":"notEmpty","errorMessage":"notEmpty"},{"field":"email","rule":"email","errorMessage":"email"}]};

$("#myLink").click(function () {
  $('#newPage').transition({top: '0%' });
});