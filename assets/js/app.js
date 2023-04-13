
$(document).on("dblclick", "h3.green-query", function(){
    $(this).css(
        "color","red"
    )
})


setTimeout(() => {
    $(document).on("click",  function(){
        $("#quienes-somos,p").toggleClass("color-text-blue  ")
    })
}, 5000);