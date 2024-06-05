function showTime() {
    let today = new Date();
    let time = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = time;

    const seconds = today.getSeconds();
    const display = document.getElementById('seconds');
    const hand = document.getElementById('hand');
    display.innerHTML = seconds;

    const degree = ((seconds / 60) * 360) + 90; 
    hand.style.transform = `rotate(${degree}deg)`;
}
setInterval(showTime, 1000);