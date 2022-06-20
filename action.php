<?php

echo 'обработка данных формы';

require_once('engine/sql.php');

$field_5 = $_POST['field_4'] % $_POST['field_1'];
$sql = "INSERT INTO razional (field_1, field_2, field_3, field_4, field_5) VALUES (?, ?, ?, ?, ?)";
$result = qi($sql, [$_POST['field_1'],$_POST['field_2'],$_POST['field_3'],$_POST['field_4'],$field_5]);

//echo $result ? ' OK' : 'something wrong' ;
if($result){
    header('Location: '.'index.php');
}
exit();
