<?php
$ArrayFormData = $_POST;
$name = checkData($ArrayFormData['name']);
$phone = checkData($ArrayFormData['phone']);
$countItems = checkData($ArrayFormData['countItems']);
function checkData ($item) {
    $item = trim($item);
    $item = stripslashes ($item);
    $item = htmlspecialchars($item);
    return $item;
}
 $subject = 'Клієнт магазину';
$to = 'zlatkin_store@ukr.net';
$headers = 'Content-type: text/html; charset = utf-8 \r\n';
$message = '
<html>
<body>
<center>
<table border = "1" cellpadding = "6" cellspacing = "0" width = "90%" bordercolor = "#DBDBDB">
<tr><th colspan = "2" align = "center" bgcolor = "#E4E4E4">Замовлення з сайту https://zlatkin-store.com.ua/ </th></tr>
<tr>
    <td>Ім*я </td>
    <td >'.$name.'</td>
</tr>
<tr>
    <td >Номер телефона клієнта </td>
    <td >'.$phone.'</td>
</tr>
<tr>
    <td >Кількісь одиниць замовленого товару</td>
    <td >'.$countItems.'</td>
</tr>
</table>
</center>
</body>
</html>
';

mail($to, $subject, $message, $headers);
$ArrayFormData = '';
?>

