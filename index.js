jQuery("h1").css("color","teal");

// jQuery("body").css("background-color", "black");

$("body").keypress(function (event) {
    $("h1").text(event.key);
});

// $("button").click(function () {
//     $("h1").css("color", "yellow");
// })

$("#btn1").click(function () {
    $("h1").css("font-size", "36px");
    $("h1").css("color", "#b3eaea")
})

$("#btn2").click(function () {
    $("h1").css("font-size", "40px");
    $("h1").css("color", "red");
})

$("#btn3").click(function () {
    $("h1").css("font-size", "44px");
    $("h1").css("color", "green");
})

$("#btn4").click(function () {
    $("h1").css("font-size", "48px");
    $("h1").css("color", "pink");
})

$("#btn5").click(function () {
    $("h1").css("font-size", "52px");
    $("h1").css("color", "purple");
})
