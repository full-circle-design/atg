$(document).ready(function(){var o,n=skrollr.init({forceHeight:!1});n.isMobile()&&n.destroy(),$(".locations-link").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:$("#dealership-locations").offset().top-20},1e3)}),$(".location").hover(function(){o=$(this).attr("data-location"),$("#location-"+o).addClass("active")},function(){$("#location-"+o).removeClass("active")}),$(".navicon").click(function(){var o=$(this).data("clicks");o?($(".tcon").removeClass("tcon-transform"),$(".nav-mobile").removeClass("open")):($(".tcon").addClass("tcon-transform"),$(".nav-mobile").addClass("open")),$(this).data("clicks",!o)}),$(".locations-link-mobile").click(function(){$(".navicon").click()}),$(window).resize(function(){1024<$(window).width()&&$(".tcon").hasClass("tcon-transform")&&$(".navicon").click()})});