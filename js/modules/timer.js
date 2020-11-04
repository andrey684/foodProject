function timer() {
    //Timer

    const deadline = "2020-11-6";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (24 * 60 * 60 * 1000)),
                hours = Math.floor((t / (60 * 60 * 1000) % 24)),
                minutes = Math.floor((t / 1000 / 60)  % 60),
                seconds = Math.floor((t / 1000) % 60);

            return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };     
    }

    function getZero(num) {
        if(num >=0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
                d = timer.querySelector("#days"),
                h = timer.querySelector("#hours"),
                m = timer.querySelector("#minutes"),
                s = timer.querySelector("#seconds"),
                timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            d.innerHTML = getZero(t.days);
            h.innerHTML = getZero(t.hours);
            m.innerHTML = getZero(t.minutes);
            s.innerHTML = getZero(t.seconds);

            if (t <= 0) {
                clearInterval(timerInterval);
            } 
        }
    }

    setClock(".timer", deadline);
    
}

module.exports = timer;