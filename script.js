$(".btn-warning").on( "click", function(event) {
  $(".first-row").toggle("slow");
});

$(".btn-success").on( "click", function() {
    $("#item-2").hide("slow");
    $("#item-1").hide("slow");
    $("#item-2").toggleClass("order");
    $("#item-2").show("slow");
    $("#item-1").show("slow");
});


$(document).ready(function(){
    $("#modal").css({"display": "flex"});

    $("#close-modal").on( "click", function(event) {
        $("#modal").css({"display": "none"});
        $(".modal-container").css({"display": "none"});
    });
});