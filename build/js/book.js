$(document).ready(function(){$("a.scroll").on("click",function(t){var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,function(){})}),$("#flipbook").turn({duration:1e3,gradients:!0}),$('[data-toggle="tooltip"]').tooltip(),$("[data-add-to-cart]").click(function(t){Swal.fire("اختيار جيد!","أضيف المُنتج إلى عربة الشراء","success"),t.stopPropagation()}),$("[data-add-to-favorite]").click(function(t){Swal.fire("رائع!","أضيف المُنتج إلى المفضلة","success")}),$("#btn-show").on("click",function(){$("#flippage,#flippage2").show("drop")}),$("#btn-hide").on("click",function(){$("#flippage,#flippage2").hide("drop")}),$('input[type="number"]').niceNumber({autoSize:!1,buttonDecrement:"-",buttonIncrement:"+",buttonPosition:"around"}),(new WOW).init()});