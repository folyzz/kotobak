$(window).scroll(function(){
    if($(this).scrollTop()>=600){
        $("#navBar").addClass("noTransparrent");
    }
    else{
        $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function(){
    $("a.scroll").on('click',function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    });

    new WOW().init();
    
    $('[data-toggle="tooltip"]').tooltip();

    $('[data-add-to-cart]').click(function(e){
        alert('أضيف المُنتج إلى عربة الشراء');
        e.stopPropagation();
    });

    $('[data-add-to-favorite]').click(function(e){
        alert('أضيف المُنتج إلى المفضلة');
    });

    
    var typed = new Typed('#search', {
        strings: ["العمل عبر الإنترنت", "تجربة المستخدم UX"],
        typeSpeed: 50,
        backSpeed: 30
    });
});

$(function(){
    $('input[type="number"]').niceNumber({
        autoSize: false,
        autoSizeBuffer: 1,
        buttonDecrement:'-',
        buttonIncrement:'+',
        buttonPosition: 'around'
    });
});