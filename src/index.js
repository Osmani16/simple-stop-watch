// ELEMENTS
const start_btn = document.querySelector('#start');
const pause_btn = document.querySelector('#pause');
const reset_btn = document.querySelector('#reset');
const time_display = document.querySelector('.time_display');
let seconds_in_minute = 60;

// GLOBALS
let seconds_passed = 0;
let minutes_passed = 0;
let hours_passed = 0;
let time_elapsed;
let seconds = 0;
let is_paused;
let initial_start;
let stop_watch;

// pause button is disabled at first. (you cant pause nothing)
pause_btn.disabled = true;

//function for single digits to be displayed with 0. ex: 5 -> 05
const zero_pad = (num, places) => String(num).padStart(places, '0');

start_btn.addEventListener('click', () => {
    // disabling start when you start and enabling pause.
    start_btn.disabled = true;
    pause_btn.disabled = false;
    is_paused = false;
    const count = () => {
        // initial_start makes sure that your not making a new timer every time.
        initial_start = true;
        // if the timer is not paused.
        if (!is_paused) {
            // adding 1000 miliseconds (or 1 second) every second.
            seconds += 1000;
            // dividing by 1000 to convert it to seconds.
            seconds_passed = seconds / 1000;

            // this checks if the next second will make it a new minute.
            // if it does make it a new minute then it sets the seconds to a negative second to "restart" the count. with 0 first.
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
            reset_btn.addEventListener('click', () => {
                start_btn.disabled = false;
                pause_btn.disabled = false;
                clearInterval(stop_watch);
                seconds = 0;
                seconds_passed = 0;
                minutes_passed = 0;
                hours_passed = 0;
                time_display.innerText = `00:00:00`;
                initial_start = false;
                is_paused = false;
            });
            pause_btn.addEventListener('click', () => {
                start_btn.disabled = false;
                pause_btn.disabled = true;
                is_paused = true;
            });
        };
    };
    if (!initial_start) {
        stop_watch = setInterval(count, 1000);
    }
});

const update_display = setInterval(() => {
    time_elapsed = `${zero_pad(hours_passed, 2)}:${zero_pad(minutes_passed, 2)}:${zero_pad(seconds_passed, 2)}`;
    time_display.innerText = time_elapsed;
}, 10);