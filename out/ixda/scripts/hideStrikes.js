var io = false;
var sS = document.getElementsByTagName("s");
for (var i = 0; i < sS.length; i++) {
    sS.item(i).style.display = "none";
}

function hideStrikes() {
    if (io === false) {
        for (var i = 0; i < sS.length; i++) {
            sS.item(i).style.display = "inline";
        }
        io = true;
    } else {
        for (var i = 0; i < sS.length; i++) {
            sS.item(i).style.display = "none";
        }
        io = false;
    }
}