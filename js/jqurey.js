
$(document).ready(function(){
  $('.sidebarbtn').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarbtn').toggleClass('toggle');
    $('.main').toggleClass('mainactive')
    $('.footer').toggleClass('footeractive')
    $('.header').toggleClass('headeractive')
  })
})
