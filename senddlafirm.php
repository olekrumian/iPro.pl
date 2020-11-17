<?
        $to = "info@ipro.pl";
        $subject = 'Info dla firm'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Nazwa firmy: <b>'.$_POST['nazwaFirmy'].'</b></p>
                        <p>NIP: <b>'.$_POST['nip'].'</b></p>                                
                        <p>Numer kontaktowy: <b>'.$_POST['numer'].'</b></p>                                
                        <p>Email: <b>'.$_POST['email'].'</b></p>                                
                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: iPro Serwis\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>