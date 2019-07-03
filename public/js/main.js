$(function () {
    const socket = io.connect('http://localhost:3000');
    $("#button").click(function () {
        $(this).toggleClass("down");
        $(this).toggleClass("up");
        $("#light").toggleClass("on");
        $("#light").toggleClass("off");
        $("#front").toggleClass("lit");
        $("#front").toggleClass("dark");
        socket.emit('/led', { status:  $("#light").hasClass('on')?'on':'off'});
    })
});
// r