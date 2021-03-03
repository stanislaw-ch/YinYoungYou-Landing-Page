<?php
echo $user_message = "Allgemeine Prävention für das psychische Wohlbefinden: ".$_POST['option_1']
                  ."\r\nPsychisch belastete Eltern: ".$_POST['option_2']
                  ."\r\nMobbing in der Schule: ".$_POST['option_3']
                  ."\r\nEigene Sexualität: ".$_POST['option_4']
                  ."\r\nRassismus-Erfahrung: ".$_POST['option_5']
                  ."\r\nScheidungskinder: ".$_POST['option_6']
                  ."\r\nEigene Angabe: ".$_POST['option_8'];

// $to = "info@yin-young-you.com";
$to = "post.chirko@gmail.com";

mail($to, "Umfrage: Neue Nachricht", $user_message)
?>
