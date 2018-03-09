
$("#elem1").on("mouseover", function(){
    $("#elem1").addClass("destacar")
    $("img").attr("src", "img/arbol.jpg")
});
$("#elem1").on("mouseout", function(){
    $("#elem1").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});

$("#elem2").on("mouseover", function(){
    $("#elem2").addClass("destacar")
    $("img").attr("src", "img/lago.jpg")
});
$("#elem2").on("mouseout", function(){
    $("#elem2").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});

$("#elem3").on("mouseover", function(){
    $("#elem3").addClass("destacar")
    $("img").attr("src", "img/rio.jpg")
});
$("#elem3").on("mouseout", function(){
    $("#elem3").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});

$("#elem4").on("mouseover", function(){
    $("#elem4").addClass("destacar")
    $("img").attr("src", "img/sol.jpg")
});
$("#elem4").on("mouseout", function(){
    $("#elem4").removeClass("destacar")
    $("img").attr("src", "img/blanco.jpg")
});

