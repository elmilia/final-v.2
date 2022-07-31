$(document).ready(function () {
    let i = 0;
    let istifadeciVarmi = false;
    let users;
    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"))
    } else {
        users = [];
    }
    $("#submit2").click(function (e) {
        e.preventDefault();
        var cavab = false;
        var tel = $("#nomer").val();
        var yer = tel.indexOf("-");
        var yer2 = tel.lastIndexOf("-")
        var telo = $("#nomer");
        if (yer == 2 && yer2 == 6) {
            cavab = true;
            $("#nam1").addClass("d-none")
            $("#nam2").removeClass("d-none")
            telo.removeClass("is-invalid");
            telo.addClass("is-valid");
        }
        var cavab2 = false;
        var user = $("#mail").val();
        var user2 = $("#mail");
        if (user.length > 2 && user.length < 30) {
            cavab2 = true;
            $("#idd").addClass("d-none");
            $("#add").removeClass("d-none");

            user2.removeClass("is-invalid");
            user2.addClass("is-valid");
        }
        var cavab3 = false;
        var ad = $("#username").val();
        var ad2 = $("#username");

        if (ad.length > 2 && ad.length < 30) {
            cavab3 = true;
            $("#ad3").addClass("d-none");
            $("#ad2").removeClass("d-none");
            ad2.removeClass("is-invalid");
            ad2.addClass("is-valid");
        }

        var cavab4 = false;
        var pas = $("#password").val();
        var pas2 = $("#password");
        if (pas.length > 2 && pas.length < 30) {
            cavab4 = true;
            $("#paslan").addClass("d-none");
            $("#paslan2").removeClass("d-none");
            pas2.removeClass("is-invalid");
            pas2.addClass("is-valid");
        }
        if (cavab == true && cavab2 == true && cavab3 == true && cavab4 == true) {
            const obj = {
                fname: ad,
                uname: user,
                phone: tel,
                pass: pas
            }
            var name = obj.uname;
            for (let i = 0; i <= users.length; i++) {
                if (name == users[i].uname) {
                    alert = ("artiq bele username var")
                    istifadeciVarmi = true;
                    break;
                }
            }
            if (!istifadeciVarmi) {
                users.push(obj);
                let json = JSON.stringify(users);
                localStorage.setItem("users", json);
                alert("siz artiq qeydiyyatdan kecmisiniz username ve sifrevizi dolduraraq ana sehifeye gede bilersiniz");
            }

            // window.location.assign("log-in.html");
        }
    });
});