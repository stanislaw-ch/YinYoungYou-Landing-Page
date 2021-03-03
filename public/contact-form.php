<?php
$user_name = $_POST['user_name'];
$email = $_POST['email'];
$message = $_POST['message'];

$user_name = htmlspecialchars($user_name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

$user_name = urldecode($user_name);
$email = urldecode($email);
$message = urldecode($message);

$user_name = trim($user_name);
$email = trim($email);
$message = trim($message);

// $to = "info@yin-young-you.com";
$to = "post.chirko@gmail.com";

if (mail($to, "Kontakt: Neue Nachricht", "Name: ".$user_name."\r\nE-mail Adresse: ".$email."\r\nNachricht: \r\n".$message))
?>
