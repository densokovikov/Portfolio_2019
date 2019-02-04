$(document).ready(function() {
  //переворот плашки на welcome
$(".auth").on("click", function(flip) {
    $(".info").addClass("flap");
    setTimeout(function(){
        $(".auth").addClass("clicked");
    },3000);
    flip.stopPropagation();
});

$(".card-back__list.nav__item").on("click", function(flip) {
    $(".info").removeClass("flap");
    $(".auth").removeClass("clicked");
    flip.stopPropagation();
});

});