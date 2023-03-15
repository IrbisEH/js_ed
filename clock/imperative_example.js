//Вывод показаний часов каждую секунду
setInterval(logClockTime, 1000)

function logClockTime() {
    // Получение строки показаний часов в формате гражданского времени
    let time = getClockTime();
}

function getClockTime() {
    //Получение текущего времени
    let date = new Date();
    // let time = "";

    //Выстраивание последоваткельности показаний часов
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };

    //Преобразование показания часов в формат гражданкого времени
    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12
    }

    //Подстановка 0 к показанию секунд, чтобы получалась пара цифр
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    // Придание показаниям часов формата строки "hh:mm:ss tt"
    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm
}