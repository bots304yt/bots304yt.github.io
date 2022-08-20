<!DOCTYPE html>
<head>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Botsweb | bots304yt</title>
    <meta name="keywords" content="Portafolio, bots304yt, twitch, polo1245, minecraft">
    <meta name="author" content="bots304yt@gmail.com">
    <link rel="icon" href="assets/images/profile.png">
    <meta name="description" content="bots304yt">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body onload="window.location.href = 'index.html'">
<script src="scripts.js"></script>
<?php
    $fp = fopen('newfile.txt', 'a');//opens file in append mode  
    fwrite($fp, str_replace("%20"," ",str_replace("/hola.php?mensaje=","",$_SERVER['REQUEST_URI'] )) . "\n");  
    fclose($fp);  
  ?>
<h1>asd</h1>

</body>