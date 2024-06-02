function ShowDate() {
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let out6 = document.getElementById('current-date6');
    let today = new Date();
    out1.innerHTML ="Дата и время для русской локали:" + today.toLocaleString('ru-RU');
    out2.innerHTML ="Дата и время для иракской локали:"+ today.toLocaleString('ar-IQ');
    out3.innerHTML ="Дата и время для арабской локали:" + today.toLocaleString('ar-AE');
    out4.innerHTML ="Дата и время для локали Гонконга:" + today.toLocaleString('zh-HK');
    out5.innerHTML ="Дата и время для локали Тайланда:" + today.toLocaleString('th-TH');
    out6.innerHTML ="Дата и время для греческой локали:" + today.toLocaleString('el');

    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');
    let output3 = document.getElementById('output3');
    let output4 = document.getElementById('output4');
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    output1.innerHTML = `Текущий день: ${today.getDate()}`;
    output2.innerHTML = `Текущий месяц: ${month[today.getMonth()]}`;
    output3.innerHTML = `Текущий год: ${today.getFullYear()}`;
    output4.innerHTML = `Текущий день недели: ${weekDay[today.getDay()]}`;
;
}

function getWeekDay() {
    const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1;
    let year = document.getElementById('year').value;

    let date = new Date(year, month, day);   
    let getDay = date.getDay();

    let dayOFWeek = document.getElementById('getWeekDay');
    dayOFWeek.textContent = `День недели: ${weekDay[getDay]}`;

    if (day < 1 || day > 31 || isNaN(day)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";        
    }
    else if (month < 0 || month > 12 || isNaN(month)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";
    }
    else if (year < 1699 || isNaN(year)) {
        dayOFWeek.innerText = "Ошибка! Убедитесь, что поле заполнено корректно.";        
    }  
}
