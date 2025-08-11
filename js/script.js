$(document).ready(function(){
  $('.carousel-super, .carousel-venda, .carousel-locacao').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,  // ativa as setas
    prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } }
    ]
  });
});