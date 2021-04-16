
//  sticky nav
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("nav").addClass("fixed-top");
    } else {
        $("nav").removeClass("fixed-top");
    }
});
 
 