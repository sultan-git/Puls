// $(document).ready(function () {
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
// 		responsive: [{
// 			breakpoint: 767,
// 			settings: {
// 				arrows: false,
// 				dots: true
// 			}
// 		}]

// 	});
// });

// const slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   autoplay: false,
//   controls: false,
//   speed: 1200,
//   nav: false,
//   responsive: {
//     575: {
//       nav: true,
//       navPosition: 'bottom'
//     }
//   }
// });

// document.querySelector('.prev').addEventListener('click', function () {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function () {
//   slider.goTo('next');
// });


$(document).ready(function () {
  $('.carousel__inner').slick({
    autoPlay: true,
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__list-link');  

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_mini').on('click', function () {
    $('.overlay, #order').fadeIn('slow');
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  $('#consultation-form').validate();
  $('#consultation form').validate({
    rules: {
      name: 'required',
      phone: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Пожалуйста введите свое имя",
      phone: "Пожалуйста введите свой номер телефона",
      email: {
        required: "Пожалуйста введите свою почту",
        email: "Введите адрес в виде name@domain.com"
      }
    }
  });
  $('#order form').validate();
});