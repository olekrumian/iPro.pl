<?php
$nameone = $_POST['nameone'];
$teleph = $_POST['teleph'];

//echo $nameone;
//echo "<br>";
//echo $teleph;
if (mail("hello@dkolosov.com", "Aplikuj", "Imię:".$nameone." Telefon: ".$teleph ,"From: iPro.pl \r\n"))
 {     echo "Wysłano"; 
} else { 
    echo "Wystąpił błąd";
}?>