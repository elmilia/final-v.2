$(document).ready(function () {
    $("#submit").click(function (a) {
        a.preventDefault();
        var email = $("#email").val();
        var pass = $("#password2").val();
        let arr = JSON.parse(localStorage.getItem("users"));
        var bool = false;
        for (var i = 0; i <= arr.length; i++) {

            if (email == arr[i].uname && pass == arr[i].pass) {
                localStorage.setItem("current", arr[i].fname)
                localStorage.setItem("status", "ugurlu login");
                bool = true;
                window.location.assign("index.html");
            }else{
                
            }
        }
        if (bool == false) {
            alert("bele bir istifadeci yoxdur!!!");
        }

    });
});