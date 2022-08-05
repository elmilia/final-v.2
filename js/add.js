$(document).ready(function () {
    let pcs;
    if (localStorage.getItem("pcs")) {
        pcs = JSON.parse(localStorage.getItem("users"))
    } else {
        pcs = [];
    }
    var cur = localStorage.getItem("current");
    var i;
    if (localStorage.getItem("i") == null) {
        i = 1;
        localStorage.setItem("i", i)
    }
    $("#save").click(function () {
        isValid($("#qiymet"))
        isValid($("#ad"))
        isValid($("#tesvir"))
        isValid($("#link"))
        isValid($("#emeli"))
        isValid($("#merkezi"))
        isValid($("#daimi"));
        isValid($("#daimitip"));
        isValid($("#emeliyyat"));
        isValid($("#video"));
        isValid($("#yeni"));
        isValid($("#Category"));
        var c = localStorage.getItem("ugur")
        if (c == "ugurlu") {
            const obj = {
                kat: $("#Category").val(),
                ad: $("#ad").val(),
                qiymet: $("#qiymet").val(),
                tesvir: $("#tesvir").val(),
                yeni: $("#yeni").val(),
                link: $("#link").val(),
                emeli: $("#emeli").val(),
                merkezi: $("#merkezi").val(),
                daimi: $("#daimi").val(),
                dtip: $("#daimitip").val(),
                emeliyyat: $("#emeliyyat").val(),
                video: $("#video").val()
            }
            pcs.push(obj)
            let js = JSON.stringify(pcs);
            localStorage.setItem("pcs", js);
            localStorage.setItem(`${cur}-pc`, js)
        } else {
            alert("zehmet olmasa xanalari doldurun")
        }
    });
if (localStorage.getItem("pcs")) {
    var b = Number(localStorage.getItem("i"));
    let a = JSON.parse(localStorage.getItem(`${cur}-pc`));
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var btn = document.createElement("button");
    var btn2 = document.createElement("button");
    for (let z = 0; z <= a.length; i++) {
        td1.innerText = b;
        td2.innerText = a[z].ad;
        td3.innerText = a[z].link;
        td4.innerText = a[z].qiymet;
        btn.innerText = "Sil";
        btn2.innerText = "Redakte et";
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(btn)
    document.querySelector("#table1 #a").appendChild(tr);
    btn.click(function(){
        this.parentNode.parentNode.remove;
    });
}
    function isValid(element) {
        if (element.val() == "") {
            element.addClass("is-invalid");
            localStorage.setItem("ugur", "ugursuz")
            element.removeClass("is-valid");
        } else {
            element.removeClass("is-invalid");
            localStorage.setItem("ugur", "ugurlu")
            element.addClass("is-valid");
        }
    }
});