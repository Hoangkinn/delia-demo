$.fn.BeerSlider = function ( options ) {
    options = options || {};
    return this.each(function() {
    new BeerSlider(this, options);
    });
};
$('.beer-slider').BeerSlider({start: 50});

$(document).ready(function(){
    $(".tabs-content").eq(0).show();
    $("#tabs li").eq(0).addClass("button-renk");
    $("#tabs li").click(function(){
    var number = $(this).index();
    $("#tabs li").removeClass("button-renk");
    $(".tabs-content").hide().eq(number).fadeIn("fade");
    $("#tabs li").eq(number).addClass("button-renk");
    });
    });