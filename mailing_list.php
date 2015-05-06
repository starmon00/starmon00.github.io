<?php

$name = $_POST['name'];
$email = $_POST['email'];

if(empty($name)||empty($email))
{
	echo "Name and email are mandatory!";
	exit;
}

$email_from = 'vcphung@uci.edu';
$email_subject = "Subscribed to Mailing List";
$email_body = "Congradulations $name, you are not subscribed to Not Black Market Gaming mailing list! \n \n Thank You!".

$to = "$email";
$headers = "From: $email_from \r \n";
$headers .= "Reply-To: $email \r \n";
mail($to,$email_subject,$email_body,$headers);

?>