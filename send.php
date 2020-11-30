<?
        $to = "hello@iproserwis.pl";
        $subject = 'Naprawa'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Imię: <b>'.$_POST['nameone'].'</b></p>
                        <p>Numer kontaktowy: <b>'.$_POST['teleph'].'</b></p>                                
                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: iPro Serwis\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>