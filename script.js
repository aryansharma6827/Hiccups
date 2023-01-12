$("footer button").click(function () {
    alert("The app is not ready yet")
});


$(".secound button").click(function () {
    $("h1").text("we are not ready yet");
    setTimeout(function () {
        $("h1").text("Meet Your Loved Ones at Unexpected places");
    }, 1000);

});


