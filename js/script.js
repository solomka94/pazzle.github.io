$(document).ready(function() {


    /*$('.puz-item-wp').hover(function(){
        var ths = $(this).find('.puz-item-sm');
        ths.addClass('hover');
    }, function(){
        var ths = $(this).find('.puz-item-sm');
        setTimeout(function(){
            ths.removeClass('hover');    
        }, 1300)
    })*/



	$('.owl-carousel.slider-price').owlCarousel({
		loop:true, //Зацикливаем слайдер
//		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000,//Время смены слайда
        navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
        onTranslated: changePrice,
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
//    if($('div').data('price').parent('.owl-item .active')) {
//        $price = $('div').data('price');
//        $('h3 .price').find('span').text('$price');
//    }
//    var owl = $('.owl-carousel');
    
//    owl.on('changed.owl.carousel', function(event) {
//        $price = $('.owl-item.active').next().find('.slide-price').data('price');
//        $('h3.price').find('span').text($price);
//    });
    $('.owl-carousel.main-slider').owlCarousel({
		loop:true, //Зацикливаем слайдер
//		margin:10, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:false, //Автозапуск слайдера
		smartSpeed:1000, //Время движения слайда
		autoplayTimeout:2000,//Время смены слайда
        animateOut: 'zoomIn',
        animateIn: 'zoomIn',
        navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
		responsive:{ //Адаптация в зависимости от разрешения экрана
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
    function changePrice(event) {
        $price = $('.owl-item.active').find('.slide-price').data('price');
        $('h3.price').find('span').text($price);
    }
    
    $('.filtr-ul li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.nav li, .hb-nav li').click(function(){
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });
    
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#blah').attr('src', e.target.result);
            $("#close").css('display','block');
            $('.zack-wp').css('display','block');
        }

        reader.readAsDataURL(input.files[0]);
      }
    }
    
    $("#up-img").change(function(e) {
        readURL(this);
    });
    
    $("#close").click(function(e) {
        $("#blah").attr("src", "#");
        $(this).css('display','none');
        $('.zack-wp').css('display','none');
    });
    
    $(function() {

        $('.select-puz-size').styler();

    });
    
    $(".enter, .enter-m, .registration, .registration-m, .self-img, #congrat").fancybox({
        'titlePosition' : 'inside',
        'transitionIn' : 'fade',
        'transitionOut' : 'fade'
    });
    
    window.oninput = function oninputColor() {
        var val_color = $('#color-pick').val();
        $('body').css('background-color', val_color);
    }

    var inp = $("#image-input");
    
    $('#image-input').change(function () {
        //проверка на формат    
        $file_type = this.value.split('.').pop();
        if($file_type!="jpeg" && $file_type!="jpg"  && $file_type!="png"){
            $('.upl-message').text("Допускаются файлы только jpeg, jpg, png");
            $('.upl-message').css("color", "red");
            inp.val("");
        }else {
            $('.fancybox-close-small').trigger("click");
        }
    });
    
    $(window).scroll(function() {
        var header_h = $('header').innerHeight();
        
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else if ($(this).scrollTop() < 1) {
            $('header').removeClass("sticky");
        }
    });
    
    $(document).ready(function(){
        $('#nav-icon1').click(function(){
            $(this).toggleClass('open');
            $('.menu').fadeToggle(500);
        });
    });
    
    $('.a-toggle').click(function(){
        $('.sub-nav-m').toggle(500);
    });
    
    var par_width = $(".page-404").width();
    var chil_width = $(".center-txt").width();
    
    $(".center-txt").css('left',(par_width/2 - chil_width/2) +'px');
    
    $('.self-img').click(function(){
        var par_width2 = $("#image-form").width();
        var chil_width2 = $("#image-label").width();
        var disp = $('#create-puzzle').css("display");
        console.log(disp);
        setTimeout(function() { 
            if(disp = 'inline-block') {
            $("#image-label").css('left',(par_width2/2 - chil_width2/2) +'px');
        }}, 50);
    });
    
    $(window).resize(function() {
        var par_width = $(".page-404").width();
        var par_width2 = $("#image-form").width();
        var chil_width = $(".center-txt").width();
        var chil_width2 = $("#image-label").width();
        $(".center-txt").css('left',(par_width/2 - chil_width/2) +'px');
        $("#image-label").css('left',(par_width2/2 - chil_width2/2) +'px');
    });
    
    
    
    $('.togg-btn').click(function(){
        $('.fixtab-menu').toggleClass('togg-fixtab');
    });
    
    $('.mob-secmenu').click(function(){
        $('.navig').slideToggle();
    });
});