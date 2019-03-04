$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    // قسم طريقة الدفع
    $('input[name="payment_method"]').change(function(){
        var paymentValue = $(this).val();
        if(paymentValue === "on_delivery"){
            $('#credit-card-section input').prop('disabled', true);
        } else {
            $('#credit-card-section input').prop('disabled', false);
        }
        $('#credit-card-section').toggle('drop');
    });

    // حذف سطر المنتج
    $('[data-remove-from-cart]').click(function(){
        $(this).parents('[data-book-info]').remove();

        calculateTotalPrice();
    });
    // سعر لعدد الكتب المختار
    $('[data-book-quantity]').change(function(){
        var newQuantity = $(this).val();
        var $parent = $(this).parents('[data-book-info]');
        var pricePerUnit = $parent.attr('data-book-price');
        var totalPriceForBook = newQuantity * pricePerUnit;
        $parent.find('.total-price-for-book').text(totalPriceForBook + " SAR");

        calculateTotalPrice();
    });

    // حساب سعر الإجمالي
    function calculateTotalPrice(){
        var totalPriceForAllbooks = 0;

        $('[data-book-info]').each(function(){
            var pricePerUnit = $(this).attr('data-book-price');
            var quantity = $(this).find('[data-book-quantity]').val();
            var totalPriceForBook = pricePerUnit * quantity;
            totalPriceForAllbooks = totalPriceForAllbooks + (totalPriceForBook);
        });
        $('#total-price-for-all-books').text(totalPriceForAllbooks);
    }

    new WOW().init();
    
});