var field_1 = document.getElementById("field_1");
var field_2 = document.getElementById("field_2");
var field_3 = document.getElementById("field_3");
var field_4 = document.getElementById("field_4");
var field_5 = document.getElementById("field_5");
var button_1 = document.getElementById("button_1");
var button_2 = document.getElementById("button_2");
var button_3 = document.getElementById("button_3");
var button_4 = document.getElementById("button_4");
var button_5 = document.getElementById("button_5");
var div = document.getElementById("div");
var form= document.getElementById('form_1')


form.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});

//включение видимости второго поля
field_1 && field_1.addEventListener("input", () => {
    field_2.style.display = '';
    if (field_3.value !== '' && field_4) {
        change3();
        change4();
    }
})

//включение видимости третьего поля
field_2 && field_2.addEventListener("change", () => {
    field_3.disabled = false;

    change3()

    if (field_3.value !== '' && field_4) {
        change4();
    }
})

function change3() {

    while (field_3.firstChild) {
        field_3.removeChild(field_3.firstChild);
    }

    for (let i = 1; i <= 100; i++) {
        var opt = document.createElement('option');
        opt.value = field_1.value * i;
        opt.innerHTML = field_1.value * i;
        field_3.appendChild(opt);
    }
}

//вывод значения 4 и 5 поля
field_3 && field_3.addEventListener("change", () => {
    change4();
})

function change4() {
    let vol = field_1.value.concat(field_2.value).concat(field_3.value);
    field_4.innerText = vol;
    field_4.value = vol;
    if (vol % 2 === 0) {
        field_4.style.color = 'blue';
    }

    field_5.value = field_4.value % field_1.value;
}

button_1 && button_1.addEventListener("click", () => {
    field_1.value = '';
    field_1.innerText = '';
    field_2.style.display = 'none';
    field_3.disabled = true;
    field_4.innerText = '';
    field_4.value = '';
    field_5.value = '';
})

button_2 && button_2.addEventListener("click", () => {

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    div.innerHTML += '<div style="position:absolute;width:100%;height:100%;">' +
        'поле 1: ' + field_1.value +
        '; поле 2: ' + field_2.value +
        '; поле 3: ' + field_3.value +
        '; поле 4: ' + field_4.value +
        '; поле 5: ' + field_5.value +
        '</div>';
})

button_3 && button_3.addEventListener("click", () => {

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    div.innerHTML += '<div style="position:absolute;width:100%;height:100%;">INSERT INTO Db (field_1, field_2, field_3, field_4, field_5) VALUES (' +
        +field_1.value + ', ' + field_2.value + ', ' + field_3.value + ', ' + field_4.value + ', ' + field_5.value + ')</div>';
})

button_4 && button_4.addEventListener("click", () => {

    let t = document.getElementById('table');
    let tra = t.children;
    let trs = tra[0].children;
    let tds = trs[trs.length - 1].children;

    field_1.value = parseInt(tds[1].innerText);
    field_2.style.display = '';
    field_2.value = parseInt(tds[2].innerText);
    field_3.disabled = false;
    change3();
    field_3.value = parseInt(tds[3].innerText);
    change4();
})

button_5 && button_5.addEventListener("click", () => {
    field_1.value = Math.floor(Math.random() * 100);
    field_2.style.display = '';
    field_2.value = Math.floor(Math.random() * 100);
    field_3.disabled = false;
    change3();
    field_3.value = field_3.options[Math.floor(Math.random() * 100)].value;
    change4();
})
