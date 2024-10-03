// mask phone 
$('[name="phone"]').mask('+7 (999) 999-99-99');

//плавный скролл
$(document).ready(function () {
  $('.go_to').click(function (e) {
      e.preventDefault();
      var scroll_el = $(this).attr('href');
      if ($(scroll_el).length !== 0) {
          $('html, body').animate({
              scrollTop: $(scroll_el).offset().top
          }, 500);
      }
      $('.mobile-menu').fadeOut();
      return false;
  });
});
//плавный скролл end

// slick sliders
$('.projects-slider').slick({
  slidesToShow: 1,
  fade: true,
  prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.team-slider').slick({
  slidesToShow: 3,
  appendArrows: '.team-slider__nav',
  prevArrow: '<button type="button" class="slick-prev slick-arrow-dark"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow-dark"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        appendArrows: '.team-slider',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
        appendArrows: '.team-slider',
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1,
        variableWidth: false,
        appendArrows: '.team-slider',
      }
    }
  ]
});

// mobile menu
$('.btn-burger').on('click', function(e){
  e.preventDefault();
  $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function(e){
  e.preventDefault();
  $('.mobile-menu').fadeOut();
});