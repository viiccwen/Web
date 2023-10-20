var d = document;
var timer;
var year, month, day, hour, minute, second;
var currentTime, targetTime;

function clock() {
    timer = setInterval(function () {
        currentTime = new Date();
        var remainingTime = targetTime - currentTime;

        if (remainingTime < 0) {
            alert("時間到!");
            clearInterval(timer);
            location.reload();
            return;
        }

        var hours = Math.floor(remainingTime / (60 * 60 * 1000));
        var minutes = Math.floor(remainingTime % (60 * 60 * 1000) / (1000 * 60));
        var seconds = Math.floor(remainingTime % (60 * 1000) / 1000);
        var display_time = d.querySelector(".display-time");

        var display_hours = hours < 10 ? "0" + hours.toString() : hours.toString();
        var display_minutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
        var display_seconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();
        display_time.innerText = `${display_hours}:${display_minutes}:${display_seconds}`;

    }, 1000);
}

function TimerFunction(e) {
    var et = e.target;
    var func = et.getAttribute("data-target");

    if (func == "start") {
        var datetime = d.querySelector(".datetimer").value;

        if (!datetime) {
            alert("請輸入日期和時間!");
            return;
        }

        targetTime = new Date(datetime);


        if (targetTime <= currentTime) {
            alert("目標時間已過，請重新設定。");
            return;
        }

        clock();

        et.innerText = "暫停";
        et.setAttribute("data-target", "stop");

    }
    else if (func == "stop") {
        clearInterval(timer);
        et.innerText = "繼續";
        et.setAttribute("data-target", "continue");
    }
    else if (func == "continue") {
        clock();
        et.innerText = "暫停";
        et.setAttribute("data-target", "stop");
    } else if (func == "reset") {
        location.reload();
    }
}