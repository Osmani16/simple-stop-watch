const start_btn = document.querySelector('#start');
const pause_btn = document.querySelector('#pause');
const reset_btn = document.querySelector('#reset');
const time_display = document.querySelector('.time_display');

let seconds_in_minute = 60;

let seconds_passed = 0;
let minutes_passed = 0;
let hours_passed = 0;

let time_elapsed;

let seconds = 0;

const zero_pad = (num, places) => String(num).padStart(places, '0');

start_btn.addEventListener('click', () => {
    start_btn.disabled = true;
    const count = () => {
        seconds += 1000;
        seconds_passed = seconds / 1000;

        if ((seconds_passed + 1) % seconds_in_minute == 0) {
            seconds = -1000;
        }

        if ((seconds_passed % seconds_in_minute) == 0) {
            minutes_passed++;
        }

        if (minutes_passed % seconds_in_minute == 0 && minutes_passed != 0) {
            hours_passed++;
            minutes_passed = 0;
        }
        time_elapsed = `${zero_pad(hours_passed, 2)}:${zero_pad(minutes_passed, 2)}:${zero_pad(seconds_passed, 2)}`;
        time_display.innerText = time_elapsed;
        reset_btn.addEventListener('click', () => {
            start_btn.disabled = false;
            clearInterval(stop_watch);
            seconds = 0;
            seconds_passed = 0;
            minutes_passed = 0;
            hours_passed = 0;
            time_display.innerText = `00:00:00`;
        });
    };
    const stop_watch = setInterval(count, 1000)
});