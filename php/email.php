<?php
if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = "tucasbarcelos@gmail.com";
    $subject = "New message from $name";
    $body = "From: $name\nEmail: $email\nMessage: $message";
    mail($to, $subject, $body);
}
?>
