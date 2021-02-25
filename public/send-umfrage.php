<?php
$user_name = $_POST['option-1'];
// $email = $_POST['email'];
// $message = $_POST['message'];

// $user_name = htmlspecialchars($user_name);
// $email = htmlspecialchars($email);
// $message = htmlspecialchars($message);

// $user_name = urldecode($user_name);
// $email = urldecode($email);
// $message = urldecode($message);

// $user_name = trim($user_name);
// $email = trim($email);
// $message = trim($message);

echo $user_name = "Allgemeine Prävention für das psychische Wohlbefinden: ".$_POST['option-1']
                  ."\r\nPsychisch belastete Eltern: ".$_POST['option-2']
                  ."\r\nMobbing in der Schule: ".$_POST['option-3']
                  ."\r\nEigene Sexualität: ".$_POST['option-4']
                  ."\r\nRassismus-Erfahrung: ".$_POST['option-5']
                  ."\r\nScheidungskinder: ".$_POST['option-6']
                  ."\r\nEigene Angabe: ".$_POST['option-8'];
// echo "<br>";
// echo $email;
// echo "<br>";
// echo $message;

// $to = "info@yin-young-you.com";

// if (mail($to, "Kontakt: Neue Nachricht", "Name: ".$user_name."\r\nE-mail Adresse: ".$email."\r\nNachricht: \r\n".$message))
$to = "post.chirko@gmail.com";

mail($to, "Umfrage: Neue Nachricht", $user_name)
?>
