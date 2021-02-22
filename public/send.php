<?php
$user_name = $_POST['user-name'];
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

// echo $user_name;
// echo "<br>";
// echo $email;
// echo "<br>";
// echo $message;

$to = "info@yin-young-you.com";

if (mail($to, "Website Feedback", "User-name: ".$user_name."\r\nE-mail: ".$email."\r\nMessage: \r\n".$message))

?>

<?php
    // ini_set( 'display_errors', 1 );
    // error_reporting( E_ALL );
    // $from = "me@mysite.ru";
    // $to = "post.chirko@gmail.com";
    // $subject = "Checking PHP mail";
    // $message = "PHP mail works just fine";
    // $headers = "From:" . $from;
    // mail($to,$subject,$message, $headers);
    // echo "The email was sent.";
?>

<?php
// var_dump(mail("post.chirko@gmail.com","Test","Test"));
?>
