let colores = ["blue", "yellow", "red", "grey", "orange", "purple"]


$("document").ready(function(){
        $("#anuncio")
        .text("¡CLICK! Para cambiar de color")
        .width("500px")
        .height("500px")
        .hide()
        .fadeIn(3000)
});

$("#anuncio").on("click", function(){
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("div").css("background", color)
});

