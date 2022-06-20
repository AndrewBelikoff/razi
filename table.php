<?php

require_once('engine/sql.php');

$sql = "SELECT * FROM razional";
$result = q($sql, []);

if (!$result) {
    echo 'записей не найдено';
}


echo '
<table border="1" width="100%" cellpadding="5" id="table">
   <tr>
    <th>id</th>
    <th>поле 1</th>
    <th>поле 2</th>
    <th>поле 3</th>
    <th>поле 4</th>
    <th>поле 5</th>
   </tr>
   ';

foreach ($result as $row) {
    echo '
<tr>
    <td>' . $row['id'] . '</td>
    <td>' . $row['field_1'] . '</td>
    <td>' . $row['field_2'] . '</td>
    <td>' .$row['field_3'] . '</td>
    <td>' . $row['field_4'] . '</td>
    <td>' . $row['field_5'] . '</td>
  </tr>
';
}

echo ' </table>';
