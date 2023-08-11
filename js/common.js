$(document).ready(function () {
    Logic ()
    
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
    })

    $('.close').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

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
		}
    })

    var $loop = setInterval(function () {
    // change 12 to alter damping higher is slower
        $xp += (($mouseX - $xp) / 15);
        $yp += (($mouseY - $yp) / 15);
        $("#flag").css({left: ($xp-$('#flag').width() * 0.5) + 'px', top: ($yp -$('#flag').height() * 0.5) + 'px'});
    }, 1);

    var flag = document.getElementById('flag');

    intro();
})

$(function () {

})

function intro() {

    $('#logo').delay(1000).queueAddClass('opacity').delay(1600).queueAddClass('on');
    //$('#main_title .muse').delay(4900).queueAddClass('on');
    $('#scroll > div').addClass('on');
    $('#sns').addClass('on');
    $('#section01 .inner .last').addClass('on');

    setTimeout(() => {
        $('#slider').css('height', '820px');
    }, 3600)

}

function Logic () {
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };

}