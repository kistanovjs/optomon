// Начальная функция

(function(){
	// header
	const headerEl = $('.header');
	const	headerClass = 'header--background';
	if ($('.js-index').length !== 0) {
		$(window).on('scroll', () => {
			$(window).scrollTop() >= 65 
				? headerEl.addClass(headerClass) 
				: headerEl.removeClass(headerClass)
		})
	} else {
		headerEl.addClass(headerClass)
		$('.main').addClass('main--inner')
	}

	// form label
	function labelHide() {
		$('.form__input').each(function() {
			$(this).focus(function() {
					$(this).siblings('.form__label').addClass('hide');
			});
			$(this).blur(function(){
				if(!($(this).val())){
					$(this).siblings('.form__label').removeClass('hide')
				};
			});
		});
	}
	labelHide()

	// menu
	$('.menu__open').click(function() {
		$('.menu__block').addClass('menu__block--active')
		$('body').addClass('overflow-hidden')
	})

	$('.menu-block__close').click(function() {
		$('.menu__block').removeClass('menu__block--active')
		$('body').removeClass('overflow-hidden')
	})

	// scroll to element
	function scrollNav() {
		$('.js-scroll-to').on("click", function(){  
			//Animate
			$('html, body').stop().animate({
					scrollTop: $( $(this).attr('href') ).offset().top - 100
			}, 400);
			return false;
		});
	}
	scrollNav();

	//smpo slider
	if (!!$('.smpo-architecture__slider-slider')) {
		const slider = $('.smpo-architecture__slider-slider')
		const arrows = $('.smpo-architecture__slider-arrow')
		slider.slick({
			arrows: false,
			dots: false,
			infinite: false
		})

		arrows.filter('.prev').addClass('disable')

		arrows.click(function() {
			if ($(this).hasClass('disable')) return false
			arrows.addClass('disable')
			slider.slick($(this).hasClass('prev') ? 'slickPrev' : 'slickNext')

			const currentSlide = slider.slick('slickCurrentSlide')
			const slideCount = slider.slick('getSlick').slideCount
			
			if (currentSlide !== 0) arrows.filter('.prev').removeClass('disable')
			if (currentSlide + 1 !== slideCount) arrows.filter('.next').removeClass('disable')
		})
	}

	// adaptive
	if ($(window).width() <= 768) {
		$('.advantage').slick({
			dots: true,
			arrows: false,
			adaptiveHeight: true
		})

		$('.js-menu-contact').text('Контакты')
	}
})();

// function setPadding() {
//     $('.contact-container').css({
//         "padding-bottom":$(window).height() - $(".header").height() - $(".inner-hero").height() - $(".gap").height() - $(".contact__content").height() + 'px'
//     });
// }
// setPadding(); // устанавливаем высоту окна при первой загрузке страницы
// $(window).resize( setPadding ); // обновляем при изменении размеров окна