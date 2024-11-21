<?php
$name = checkData($_POST('name'));
$phone = checkData($_POST('phone'));
$countItems = checkData($_POST('countItems'));
$to = 'my@gmail.com';
$headers = 'Content-type: text/html; charset = utf-8 \r\n';
$message = '
<html>
<body>
<center>
<table border = "1" cellpadding = "6" cellspacing = "0" width = "90%" bordercolor = "#DBDBDB">
<tr><th colspan = "2" align = "center" bgcolor = "#E4E4E4">Замовлення з сайту </th></tr>
<tr>
    <td>Ім"я </td>
    <td >$name</td>
</tr>
<tr>
    <td >Номер телефона клієнта </td>
    <td >$phone</td>
</tr>
<tr>
    <td >Кількісь одиниць замовленого товару</td>
    <td >$countItems</td>
</tr>
</table>
</center>
</body>
</html>
';
function checkData ($item) {
    $item = trim($item);
    $item = stripslashes ($item);
    $item = htmlspecialchars($item);
}
mail($to,  $message, $headers);
?>

