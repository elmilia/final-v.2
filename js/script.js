$(document).ready(function () {
    var log = localStorage.getItem("status");
    if (log == "ugurlu login") {
        $("#log").removeClass("d-none");
        $("#pc").removeClass("d-none");
        $("#in").addClass("d-none");
        var current = localStorage.getItem("current");
        if (current) {
            $("#current").text(current);
        }
        } else {
        $("#in").removeClass("d-none")
    }
    $("#log").click(function () {
        $("#log").addClass("d-none");
        $("#pc").addClass("d-none");
        $("in").removeClass("d-none")
        localStorage.setItem("status", "ugursuz")
        localStorage.removeItem("current");
    });
});