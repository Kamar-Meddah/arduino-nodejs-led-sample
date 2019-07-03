$(function () {
    $("#button").click(function () {
        $(this).toggleClass("down");
        $(this).toggleClass("up");
        $("#light").toggleClass("on");
        $("#light").toggleClass("off");
        $("#front").toggleClass("lit");
        $("#front").toggleClass("dark");
        $("#light").hasClass('on')?console.log('on'):console.log('off');
    })
});
// r