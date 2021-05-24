// map_img_ch = document.querySelector('.changing_img')
// map_img_unch = document.querySelector('.unchanging_img')
// map_img_ch.style.width = map_img_unch.offsetWidth + 'px'
// is_clicked = false

// function Show_block() {
//   if (is_clicked) {
//     map_img_ch.style.width = map_img_unch.offsetWidth + 'px'
//     map_img_ch.style.transform = 'translate(0,0)';
//     map_img_ch.style.top = 'auto';
//     map_img_ch.style.position = 'absolute'
//     is_clicked = false
//   } else {
//     // Изменить ширину картинки при открытии
//     map_img_ch.style.width = '60%'

//     map_img_ch.style.transform = 'translate(0,-50%)';
//     map_img_ch.style.top = '50%';
//     map_img_ch.style.position = 'fixed'
//     is_clicked = true
//   }
// }
//popup
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//scrolltop
var scroll = $(this).scrollTop();
var header = $('.scroll').innerHeight();

if (scroll > header) {
  $('#top').fadeIn();
}
$(window).scroll(function () {
  var scroll = $(this).scrollTop();
  var header = $('.scroll').innerHeight();
  if (scroll > header) {
    $('#top').fadeIn();
  }
  else {
    $('#top').fadeOut();
  }
})
$('#top').click(function () {
  $('html').animate({
    scrollTop: 0
  }, 1000)


})
$(window).load(function () {
  $('.str3-2').liMarquee();
})
//slider
$('.about-slider').slick({
  slidesToShow: 3,
  autoplay: true,
  prevArrow: '<div class="about-slider__prev"><img src="./img/arrow_1.svg" alt=""></div>',
  nextArrow: '<div class="about-slider__next"><img src="./img/arrow_2.svg" alt=""></div>',
  responsive: [
      {
          breakpoint: 1199.98,
        settings: {
          slidesToShow: 1,
        }
      },
      {
          breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
        }
      },
      {
          breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
        }
      },
      {
          breakpoint: 370,
        settings: {
          slidesToShow: 1,
        }
      },
      {
          breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      },
     
  ]

});