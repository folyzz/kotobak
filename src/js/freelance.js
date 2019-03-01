$(document).ready(function(){
    $("a.scroll").on('click',function(event){
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});
    });

    $('#flipbook').turn({
        height: 380,
        width: 500,
        gradients: true
    });
    
    $('[data-toggle="tooltip"]').tooltip();


    $('[data-add-to-cart]').click(function(e){
        Swal.fire(
            'اختيار جيد!',
            'أضيف المُنتج إلى عربة الشراء',
            'success'
            );
        e.stopPropagation();
    });
    $('[data-add-to-favorite]').click(function(e){
        Swal.fire(
            'رائع!',
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
