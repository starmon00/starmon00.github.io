function SubMit() {
    document.getElementById("frm1").submit();
    window.alert("Congradulations, you are now subscribed to our mailing list.");
}

function validateForm() {
    var x = document.forms["myForm"]["frm1"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
