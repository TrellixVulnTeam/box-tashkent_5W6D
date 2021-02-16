$('.nav__burger').click(function () {  
    $('.menu').hasClass('active') ? close() : open()
})


function open() {  
    // console.log(1);
    $('.menu').addClass('active')
    $('.menu').fadeIn(200);
    $('.nav__burger').addClass('cancel')
    $('.nav__burger').removeClass('burger')
    // $('.nav-block').addClass('header-heght')
    $('.nav-block').css('height','100vh')
    $("body").css("overflow-y","hidden");
    
}
$(window).scroll(function(ee){
    ee.preventDefault();
});

function close() {
    // console.log(2);
    $('.menu').removeClass('active')
    $('.menu').fadeOut(200)
    $('.nav__burger').addClass('burger')
    $('.nav__burger').removeClass('cancel')
    // $('.nav-block').removeClass('header-heght')
    $('.nav-block').css('height','fit-content')
    $("body").css("overflow-y","scroll");
    
}

