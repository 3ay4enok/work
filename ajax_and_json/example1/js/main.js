"use strict";

function loadPhones() {

    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'js/phones.json', true);

    // 3. Отсылаем запрос
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        button.parentNode.removeChild(button);

        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            // обработать ошибку
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            try {
                var phones = JSON.parse(xhr.responseText);
            } catch (e) {
                alert("Некорректный ответ " + e.message);
            }
            showPhones(phones);
        }

    }

    button.innerHTML = 'Загружаю...';
    button.disabled = true;
}

function showPhones(phones) {
    phones.forEach(function (phone) {
        var li = list.appendChild(document.createElement('li'));
        li.innerHTML = phone.name;
    });

}