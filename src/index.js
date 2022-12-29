const start_btn = document.querySelector('#start');
const pause_btn = document.querySelector('#pause');
const reset_btn = document.querySelector('#reset');

const time_display = document.querySelector('.time_display');

let sec_num = 60;
let min_num = 60 * 60;

let start_time = 0;
let pause_time = 0;
let seconds_passed = 0;
let minutes_passed = 0;
let hours_passed = 0;

let time_elapsed;

const zero_pad = (num, places) => String(num).padStart(places, '0');

start_btn.addEventListener('click', () => {
    const start_date = new Date();
    start_time = start_date.getTime();

    const seconds_count_down = () => {
        let temp_date = new Date();
        seconds_passed = Math.floor((temp_date.getTime() - start_time) / 1000)
        if ((seconds_passed) % sec_num == 0) {
            minutes_passed++;
        }
        if ((seconds_passed) % min_num == 0) {
            hours_passed++
        }
        time_elapsed = `${zero_pad(hours_passed, 2)}:${zero_pad(minutes_passed, 2)}:${zero_pad(seconds_passed, 2)}`;
        time_display.innerText = time_elapsed;
        reset_btn.addEventListener('click', () => {
            clearInterval(count_down);
            time_elapsed = `${zero_pad(0, 2)}:${zero_pad(0, 2)}:${zero_pad(0, 2)}`;
            time_display.innerText = time_elapsed;
        });
    };

    const count_down = setInterval(seconds_count_down, 1000)
});

pause_btn.addEventListener('click', () => {
    const pause_date = new Date();
    pause_time = pause_date.getTime();
    console.log(start_time, pause_time)
    seconds_passed = Math.floor((pause_time - start_time) / sec_format);
    console.log(seconds_passed);
});