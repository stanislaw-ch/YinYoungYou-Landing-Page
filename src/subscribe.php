<?php
$list_id = '3cffd71e2e';
$authToken = '218afc79e4ee36dc063bd3b2e753bc90-us1';

$postData = array(
  "email_address" => $_POST["email"],
  "status" => "subscribed"
);

$ch = curl_init('https://us1.api.mailchimp.com/3.0/lists/'.$list_id.'/members/');

curl_setopt_array($ch, array(
  CURLOPT_POST => TRUE,
  CURLOPT_RETURNTRANSFER => TRUE,
  CURLOPT_HTTPHEADER => array(
    'Authorization: apikey '.$authToken,
    'Content-Type: application/json'
  ),
  CURLOPT_POSTFIELDS => json_encode($postData)
));

$result = curl_exec($ch);
$info = curl_getinfo($ch);

$response = $info["http_code"];

echo $info["http_code"];

?>

