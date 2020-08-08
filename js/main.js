
$('.feetback-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img src="./img/left.png" alt=""></img>',
    nextArrow: '<img src="./img/right.png" alt=""></img>',
  });


  $('.header__link1').click(function(){
    $('html, body').animate({scrollTop:$('#about').position().top +280}, 2000);
});


$('.header__link2').click(function(){
  $('html, body').animate({scrollTop:$('#how').position().top}, 2000);
});


$('.header__link3').click(function(){
  $('html, body').animate({scrollTop:$('#faq').position().top -100}, 2000);
});


$('.header__link4').click(function(){
  $('html, body').animate({scrollTop:$('#footer').position().top +280}, 2000);
});
