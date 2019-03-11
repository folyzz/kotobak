$(window).scroll(function(){
    if($(this).scrollTop()>=150){  
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
    
    $('[data-toggle="tooltip"]').tooltip();
    
    new WOW().init();
    
    var typed = new Typed('#search', {
        strings: ["العمل عبر الإنترنت", "تجربة المستخدم UX"],
        typeSpeed: 50,
        backSpeed: 30
    });
});


