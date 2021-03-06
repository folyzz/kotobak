
$(document).ready(function(){
    $("a.scroll").on('click',function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    });
    $('#flipbook').turn({
        duration: 1000,
        gradients: true
    });

    
    $('[data-toggle="tooltip"]').tooltip();


    $('[data-add-to-cart]').click(function(e){
        swal(
            'اختيار جيد!',
            'أضيف المُنتج إلى عربة الشراء',
            'success'
            );
        e.stopPropagation();
    });
    $('[data-add-to-favorite]').click(function(){
        swal(
            "رائع!",
            'أضيف المُنتج إلى المفضلة',
            'success'
        );                     
    });


    $('#btn-show').on('click',function(){
        $('#flippage').show('drop');
    });
    $('#btn-hide').on('click',function(){
        $('#flippage').hide('drop');
    });

    $('input[type="number"]').niceNumber({
        autoSize: false,
        buttonDecrement:'-',
        buttonIncrement:'+',
        buttonPosition: 'around'
    });

    new WOW().init();

});
