$(window).scroll(function(){150<=$(this).scrollTop()?$("#navBar").addClass("noTransparrent"):$("#navBar").removeClass("noTransparrent")}),$(document).ready(function(){$("a.scroll").on("click",function(n){var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,function(){})}),$('[data-toggle="tooltip"]').tooltip(),(new WOW).init();new Typed("#search",{strings:["العمل عبر الإنترنت","تجربة المستخدم UX"],typeSpeed:50,backSpeed:30})});