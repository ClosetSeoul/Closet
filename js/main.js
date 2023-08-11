/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();


    $(".container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999,
        enabletranslate3d: true, // nicescroll can use css translate to scroll content
        enablemousewheel: true, // nicescroll can manage mouse wheel events
        enablekeyboard: true
    });

    // =========================
    // on event section      ===
    //==========================



    var $mouseX = 0,
        $mouseY = 0,
        $xp = 0,
        $yp = 0;


    $(document).mousemove(function (e) {
        $mouseX = e.pageX;
        $mouseY = e.pageY;
    });

    let tl = gsap.timeline();

    $('.menu').click(function (e) {


        // e.preventDefault();
        // e.stopPropagation();



        //console.log('open clicked');
            if(clicker === true){


                $('#menu').addClass('on');
                $(this).fadeOut();


                tl.to('#menu > div',1,{
                    y:0,
                    opacity:1,
                    stagger: 0.1,
                    onComplete: ()=>{
                        clicker = false;
                    }
                })


            }

            //console.log(clicker);


    })




    $('.close').click(function (e) {
        e.preventDefault();
        e.stopPropagation();



        //console.log('close clicked');

             if(clicker === false){
                 $('#menu').removeClass('on');
                 $('.menu').fadeIn();

                 tl.to('#menu > div',1,{

                     y:100,
                     opacity:0,
                     stagger: -0.1,
                     onComplete: ()=>{
                         clicker = true;
                     }
                 })

                 //console.log(clicker);
             }

    })

    var $loop = setInterval(function () {
// change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 15);
        $yp += (($mouseY - $yp) / 15);
        $("#flag").css({left: ($xp-$('#flag').width() * 0.5) + 'px', top: ($yp -$('#flag').height() * 0.5) + 'px'});
    }, 1);


    // document.getElementById("myDIV").style.transform = "rotate(7deg)";
    // $('#example').animate({rotate: '30deg', scale: '1.25'}, 1000);


    var flag = document.getElementById('flag');

    $('.white_cursor').mouseenter(function (e) {

        e.preventDefault();

        // $('#flag').addClass('on');

        TweenMax.to('#flag .deep',{css:{backgroundImage:'url(imgs/cur_top_w.png)'}});
        TweenMax.to('#flag .dot',{duration: .5,borderColor: '#fff',ease:Power2.easeInOut})



    });

    $('.white_cursor').mouseleave(function (e) {

        e.preventDefault();
        TweenMax.to('#flag .deep',{css:{backgroundImage:'url(imgs/cur_top.png)'}});
        TweenMax.to('#flag .dot',{duration: .5,borderColor: '#1a1a1a',ease:Power2.easeInOut})


    });


    $('.enter_cursor').mouseenter(function (e) {

        e.preventDefault();


        TweenMax.to('#flag .top',{delay:.5,duration: .5,y: -10,opacity:0,ease:Power2.easeInOut});
        TweenMax.to('#flag .dot',{delay:.5,duration: .5,scale: 2.65,ease:Power2.easeInOut,borderColor: '#fff',border:0.2})
        TweenMax.to('#flag .discover',{delay:.5,duration: .5,y: 0,opacity: 1,ease:Power2.easeInOut})

    });

    $('.enter_cursor').mouseleave(function (e) {

        e.preventDefault();

        TweenMax.to('#flag .top',{duration: .5,y: 0,opacity:1,ease:Power2.easeInOut});
        TweenMax.to('#flag .dot',{duration: .5,scale: 1,ease:Power2.easeInOut})
        TweenMax.to('#flag .discover',{duration: .5,y: 10,opacity:0,ease:Power2.easeInOut})


    });


    function intro() {

        $('#logo').delay(1000).queueAddClass('opacity').delay(1600).queueAddClass('on');
        $('#main_title .muse').delay(4900).queueAddClass('on');
        $('#scroll > div').addClass('on');
        $('#sns').addClass('on');
        $('#section01 .inner .last').addClass('on');

        setTimeout(() => {
            $('#slider').css('height', '820px');
        }, 3600)

    }

    intro();


    $(".sub_inner").slick({
        dots: true, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        autoplay: true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '#slider', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: true, //세로 슬라이드
        verticalSwiping: true, //세로 스와이프
        mobileFirst : true,
        touchMove : true,
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    });

    $("#slider").slick({
        dots: true, //네비게이션 사용여부
        arrows: false, //화살표 사용여부
        autoplay: true, //자동넘김
        autoplaySpeed: 3000, //자동넘김 속도
        pauseOnHover: false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '.sub_inner', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable: true,
        vertical: true, //세로 슬라이드
        verticalSwiping: true, //세로 스와이프
        mobileFirst : true,
        touchMove : true,
        initialSlide: 0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $('#nav > li').removeClass('on');


    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {


        if (currentSlide === 0) {
            $('#slider').attr('data-name', 'slider01');
            $('#main_title').attr('data-name', 'slider01');
            $('#nav > li:nth-child(1)').addClass('on');

        } else if (currentSlide === 1) {
            // $('#main_title .faerie').addClass('on');
            $('#slider').attr('data-name', 'slider02');
            $('#main_title').attr('data-name', 'slider02');
            $('#nav > li:nth-child(2)').addClass('on');

        } else if (currentSlide === 2) {
            // $('#main_title .gardener').addClass('on');
            $('#slider').attr('data-name', 'slider03');
            $('#main_title').attr('data-name', 'slider03');
            $('#nav > li:nth-child(3)').addClass('on');

        } else if (currentSlide === 3) {
            // $('#main_title .oracle').addClass('on');
            $('#slider').attr('data-name', 'slider04');
            $('#main_title').attr('data-name', 'slider04');
            $('#nav > li:nth-child(4)').addClass('on');

        } else if (currentSlide === 4) {
            // $('#main_title .queen').addClass('on');
            $('#slider').attr('data-name', 'slider05');
            $('#main_title').attr('data-name', 'slider05');
            $('#nav > li:nth-child(5)').addClass('on');
        }

    });


    //

    let fixScreen = true;
    let delayTime = true;
    let delayLocation = true;

    const wheelStage = document.querySelector('#slider');


    wheelStage.addEventListener('wheel', function (e) {
        //console.log(delayTime);

        let value = e.deltaY;

        if (value < 0 && fixScreen === false) { //up
            $('#slider').slick('slickPrev');
            delayTime = false;

        } else if (value > 0 && fixScreen === false) { // down
            $('#slider').slick('slickNext');
            delayTime = false;
        }


        if (fixScreen === true) { // 초기화

            $('#slider').removeClass('full');
            $('#sub_title').css('transition', 'opacity 0.5s cubic-bezier(1, -0.10, 0.25, 1) 0.7s').addClass('on');
            $('#main_title > div').removeClass('on');
            $('#section01 .inner .last').css('transition', 'all 0.8s').removeClass('on');
            $('#scroll > div').css('transition', 'all 0.8s').removeClass('on');
            $('#scroll_2').addClass('on');
            $('#nav').css('transition', 'all 1s 1s').addClass('on');

            setTimeout(() => {
                fixScreen = false;
            }, 1000);
            delayTime = false;
            delayLocation = true;
            console.log(delayTime);
        }
    });


    $('#main_title').on('wheel',function (e) {
        //console.log();

        if(e.originalEvent.deltaY > 0){ //up


        }


        if (fixScreen === true) { // 초기화

            $('#slider').removeClass('full');
            $('#sub_title').css('transition', 'opacity 0.5s cubic-bezier(1, -0.10, 0.25, 1) 0.7s').addClass('on');
            $('#main_title > div').removeClass('on');
            $('#section01 .inner .last').css('transition', 'all 0.8s').removeClass('on');
            $('#scroll > div').css('transition', 'all 0.8s').removeClass('on');
            $('#scroll_2').addClass('on');
            $('#nav').css('transition', 'all 1s 1s').addClass('on');
            $('#main_title').css('pointer-events','none');
            setTimeout(() => {
                fixScreen = false;
            }, 1000);
            delayTime = false;
            delayLocation = true;
            //console.log(delayTime);
        }
    })




    $('#slider').click(function () {

        //console.log();
        //console.log(delayTime);

        setTimeout(()=>{
            delayLocation = false;
        },700);

        fixScreen = true;
        $(this).addClass('full');
        $('#sub_title').css('transition', 'opacity 0.5s 0.5s,transform 1s linear').removeClass('on');
        $('#section01 .inner .last').css('transition', 'all 0.8s 2s').addClass('on');
        $('#scroll > div').css('transition', 'all 0.8s 2.4s').addClass('on');
        $('#scroll_2').removeClass('on');
        $('#nav').css('transition', 'all 1s').removeClass('on');


        $('#main_title').css('pointer-events','initial');

        if ($(this).attr('data-name') === 'slider01' && delayTime === false) {


            $('#main_title .muse').delay(1000).queueAddClass('on');
            delayTime = true;
            //console.log(delayTime);


        } else if ($(this).attr('data-name') === 'slider02' && delayTime === false) {

            $('#main_title .faerie').delay(1000).queueAddClass('on');
            delayTime = true;


        } else if ($(this).attr('data-name') === 'slider03' && delayTime === false) {
            $('#main_title .gardener').delay(1000).queueAddClass('on');
            delayTime = true;


        } else if ($(this).attr('data-name') === 'slider04' && delayTime === false) {
            $('#main_title .oracle').delay(1000).queueAddClass('on');
            delayTime = true;


        } else if ($(this).attr('data-name') === 'slider05' && delayTime === false) {
            $('#main_title .queen').delay(1000).queueAddClass('on');
            delayTime = true;

        }


        if($(this).hasClass('full') && delayLocation === false && $(this).attr('data-name') === 'slider01'){

            //location.href = 'sub/sub01.html';
            // delayLocation = true;
        }


        if($(this).hasClass('full') && delayLocation === false && $(this).attr('data-name') === 'slider02'){

            //location.href = 'sub/sub01.html';
            // delayLocation = true;
        }

        if($(this).hasClass('full') && delayLocation === false && $(this).attr('data-name') === 'slider03'){

            //location.href = 'sub/sub02.html';
        }

        if($(this).hasClass('full') && delayLocation === false && $(this).attr('data-name') === 'slider04'){

            //location.href = 'sub/sub03.html';
        }


    });

    $('#main_title').click(function () {
        if($(this).attr('data-name') === 'slider01'){
            //location.href = 'sub/sub01.html';

        }else if($(this).attr('data-name') === 'slider02'){
            //location.href = 'sub/sub01.html';

        }else if($(this).attr('data-name') === 'slider03'){
            //location.href = 'sub/sub02.html';

        }else if($(this).attr('data-name') === 'slider04'){
            //location.href = 'sub/sub03.html';
        }

    });


    $('#nav > li').click(function () {
        $('#nav > li').removeClass('on');
        $(this).addClass('on');
        //console.log(delayTime);
        delayTime = true;

        $('#main_title > div').removeClass('on');


        // $('#slider').addClass('full');


        if ($('#nav > li:nth-child(1)').hasClass('on')) {

            $('#slider .slick-dots > li:nth-child(1)').trigger('click');
            $('#slider').attr('data-name', 'slide01');

            setTimeout(()=>{
                $('.muse').addClass('on');
            },1000);


        } else if ($('#nav > li:nth-child(2)').hasClass('on')) {
            $('#slider .slick-dots > li:nth-child(2)').trigger('click');
            $('#slider').attr('data-name', 'slide02');

            setTimeout(()=>{
                $('.faerie').addClass('on');
            },1000);



        } else if ($('#nav > li:nth-child(3)').hasClass('on')) {
            $('#slider .slick-dots > li:nth-child(3)').trigger('click');
            $('#slider').attr('data-name', 'slide03');

            setTimeout(()=>{
                $('.gardener').addClass('on');
            },1000);


        } else if ($('#nav > li:nth-child(4)').hasClass('on')) {
            $('#slider .slick-dots > li:nth-child(4)').trigger('click');
            $('#slider').attr('data-name', 'slide04');

            setTimeout(()=>{
                $('.oracle').addClass('on');
            },1000);


        } else if ($('#nav > li:nth-child(5)').hasClass('on')) {
            $('#slider .slick-dots > li:nth-child(5)').trigger('click');
            // $('.sub_inner .slick-dots > li:nth-child(5)').trigger('click');
            $('#slider').attr('data-name', 'slide05');

            setTimeout(()=>{
                $('.queen').addClass('on');
            },1000);

        }
    });


//==============================================================
});


$(function () {

    // scroll event
    $('.container').scroll(function () {
        var scrollTop = $('.container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값


        // =========================
        // scroll event section  ===
        //==========================


        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);


        //===================================================================
        // nav on/off event
        $('.container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('.container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});












