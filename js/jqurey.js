
$(document).ready(function(){
  $('.sidebarbtn').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarbtn').toggleClass('toggle');
   $('.main').toggleClass('mainactive')
   $('.footer').toggleClass('footeractive')
   $('.header').toggleClass('headeractive')
   $('.fadeout').toggleClass('fadeoutactive')
  })

  $('#start').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "2");
  })
  $('#chassi').click(function() {
    $('.chassi').css("z-index", "2");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
  })
  $('#mobo').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "2");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
  })
  $('#cpu').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "2");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
  })
  $('#gpu').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "2");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
  })
  $('#ram').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "2");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
  })
  $('#hdd').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "2");
    $('.main').css("z-index", "1");
  })
  $('#video').click(function() {
    $('.chassi').css("z-index", "1");
    $('.cpu').css("z-index", "1");
    $('.gpu').css("z-index", "1");
    $('.mobo').css("z-index", "1");
    $('.ram').css("z-index", "1");
    $('.utrymme').css("z-index", "1");
    $('.main').css("z-index", "1");
    $('.video').css("z-index", "2")
  })
})
