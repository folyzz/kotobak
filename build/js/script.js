$(window).scroll(function(){600<=$(this).scrollTop()?$("#navBar").addClass("noTransparrent"):$("#navBar").removeClass("noTransparrent")}),$(document).ready(function(){$("a.scroll").on("click",function(o){var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},800,function(){})}),$('[data-toggle="tooltip"]').tooltip();new Typed("#search",{strings:["العمل عبر الإنترنت","تجربة المستخدم UX"],typeSpeed:50,backSpeed:30})});