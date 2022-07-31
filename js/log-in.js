$(document).ready(function () {
    $("#submit").click(function (a) {
        a.preventDefault();
        var email = $("#email").val();
        var pass = $("#password2").val();
        // isValid($("#email"));
        // isValid($("#password2"));
        //var a=localStorage.getItem("ugur2");
        var cvb = false;
        if (cvb == false) {
            for (var i = 0; i <= localStorage.getItem("users").length; i++) {
                var a=localStorage.getItem("users");
                var json=JSON.parse(a);
                console.log(json)
                if (email == json[i].uname) {
                    cvb = true;
                    if (pass == json[i].pass) {
                        localStorage.setItem("current",json[i].fname)
                        localStorage.setItem("status", "ugurlu login");
                    //     var current=localStorage.getItem("current");
                    //  $("#current").text(current);
                        window.location.assign("index.html");
                    }
                } else {
                    alert("zehmet olmasa hesabiviza duzgun giris ed")
                    localStorage.setItem("status", "ugursuz")
                }
            }
        }
    });
});