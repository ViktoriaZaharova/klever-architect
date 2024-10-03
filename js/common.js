$('[name="phone"]').mask('+7 (999) 999-99-99');

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
  nextArrow: '<button type="button" class="slick-next slick-arrow-dark"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});