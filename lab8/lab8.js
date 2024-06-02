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
}