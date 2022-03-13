$(".product").click(function () {
    $(this).find(".description").toggle()
    $(this).find(".icon").toggle();
})

$(".port-imgs").hover(function () {
    $(this).find(".port-overlay").toggle()
})