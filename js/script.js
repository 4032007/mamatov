$(function() {

//fix header
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		if (top > 80) $('.wr-header').addClass('fixed');
		else $('.wr-header').removeClass('fixed');
	});
	
//slider
$('.slider-coms').slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

//countdown
	$('#countdown_dashboard').countDown({
		omitWeeks: true,
		targetOffset: {
			'day': 		2,
			'month': 	0,
			'year': 	0,
			'hour': 	5,
			'min': 		25,
			'sec': 		38
		}
	});

//menu
	$('.menu-tt a').click(function(){
		$(this).parent().toggleClass('active');
		$('.header__menu').toggle()
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('nav').length) return;
	    $('.header__menu').hide();
		$('.menu-tt').removeClass('active');
	    event.stopPropagation();
	});
	
	$('.header__menu ul li a').click(function(){
		$('.header__menu').hide();
		$('.menu-tt').removeClass('active')
	});

//scroll
	$('.scroll').click(function(event){
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 50;
		$('html, body').animate({scrollTop:target_top}, 1000);
	});

//map
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.7272088, 37.5814128],
				zoom: 16,
				controls: []
			}, {
				suppressMapOpenBlock: true
			}),
	
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
			
			myPlacemark = new ymaps.Placemark([55.7272088, 37.5814128], {
				balloonContent: ''
			}, {

				iconLayout: 'default#image',
				iconImageHref: 'images/ico-map.png',
				iconImageSize: [60, 60],
				iconImageOffset: [60, -40]
			});
			myMap.behaviors.disable('scrollZoom');
	
			myMap.geoObjects
			.add(myPlacemark);
	});
	
//tabs	
	$('.tabs-tb').each(function(){
		$(this).find('.tab-tb').hide();
		$(this).find('.tab-tb:eq(0)').show();
		$(this).find('.nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().siblings('.tab-tb:visible').hide();
			$(this).addClass('active');
			$(this).siblings('.nav-tb li').removeClass('active')
			return false;
		});
	});
});