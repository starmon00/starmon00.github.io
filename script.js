function SubMit() {
    document.getElementById("frm1").submit();
    window.alert("Congradulations, you are now subscribed to our mailing list.");
}

function validateMailList(){
	var formObj = document.getElementById("frm1");
	var email = formObj.email.value;

	if (!validateEmail(email))
	{
		alert("Error: Invaid E-mail, must have '@'.");
		return false;
	}


}

function validateEmail(email)
{
	var p == email.search([@]);
	if (p == 0)
		return true;
	else
		return false;
}