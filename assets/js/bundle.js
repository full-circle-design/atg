$(document).ready(function(){var o;$(".locations-link").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:$("#dealership-locations").offset().top-20},1e3)}),$(".location").hover(function(){o=$(this).attr("data-location"),$("#location-"+o).addClass("active")},function(){$("#location-"+o).removeClass("active")}),$(".navicon").click(function(){var o=$(this).data("clicks");o?($(".tcon").removeClass("tcon-transform"),$(".nav-mobile").removeClass("open")):($(".tcon").addClass("tcon-transform"),$(".nav-mobile").addClass("open")),$(this).data("clicks",!o)})});