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
});