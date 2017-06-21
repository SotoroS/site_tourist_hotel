$(".grid-image").hover(
  function(){ $(this).animate({opacity: 1.0}); },
  function(){ $(this).animate({opacity: 0.8}); }
);

$(".grid-image").click(
  function(){
    var bg = $(this).css("background");
    var overlay = $(".overlay");

    overlay.removeAttr("hidden");
    overlay.css("background", bg);
    overlay.animate({opacity: 1.0});
  }
);

$(".overlay").click(
  function(){
    var overlay = $(".overlay");
    overlay.animate({opacity: 0}, 600, function(){ overlay.attr("hidden",""); });
  }
)
