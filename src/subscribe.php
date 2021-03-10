<?php
if (isset($_POST)) {
  $list_id = 'd3eb4aada4';
  $authToken = '';

  $postData = array(
    "email_address" => $_POST["email"],
    "status" => "pending"
  );

  $ch = curl_init('https://us7.api.mailchimp.com/3.0/lists/'.$list_id.'/members/');

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
};
?>

