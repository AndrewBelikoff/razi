<?php

$title = "страница с тремя формами";
require_once('head.php');

$plchldr = 'плэйсхолдер';
echo '<html>
<body>

     <h1 class="header">форма 1</h1>
<form id = "form_1" class="form_1" action="action.php" method="post">
<p>
                <label for="field_2">Введите число:</label>
                    <input id="field_1"
                           type="number"
                           name="field_1"
                           value=""
                           placeholder="'.$plchldr.'"
                    />
                    </p>
                    <p>
                <label for="field_2" >Выберите число:</label>
                <select id="field_2" name="field_2" style="display: none">';
for ($i=1; $i<=100; $i++) {
    echo ' <option value="'.$i.'">'.$i.'</option>';
}
               echo ' </select>
            </p>
 <p>
                <label for="field_3">Выберите произведение первого на второе:</label>
                <select id="field_3" name="field_3" disabled>';


echo ' </select>
           
<p>
                <label for="field_4">значение поля 4: </label>
                    <input id="field_4"
                    style="color: red"
                           type="number"
                           name="field_4"
                           value="">
                   
                    </p>
</p>
         
         <p>
                <label for="field_5">остаток от делениея поля 4 на поле 1:</label>
                    <input disabled
                           id="field_5"
                           type="number"
                           name="field_5"
                           value=""
                           
                    />
                    </p>          
<p><input type="submit" name="submit" value="отправить данные в бд"></p>
</form>


<h1 class="header">форма 2</h1>
<form id = "form_2" class="form_2">
<p><input type="button" name="button_1" id="button_1" value="сброс полей на значения по умолчанию"></p>
<p><input type="button" name="button_2" id="button_2" value="вывод в div текстового значения всех полей"></p>
<p><input type="button" name="button_3" id="button_3" value="вывод SQL запроса"></p>
<p><input type="button" name="button_4" id="button_4" value="заполнение полей из последней строки sql таблицы"></p>
<p><input type="button" name="button_5" id="button_5" value="заполнение полей случайными значениями"></p>
</form>

<h1 class="header">форма 3</h1>

';
require_once('table.php');

echo '
<div id="div"></div>
<script src="js/script.js"></script>
</body>
</html>';
