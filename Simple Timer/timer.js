var active = false; 
var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;
var number = 1;

$(function(){
    $(".footer").show();


    $("#start-btn").on("click", function(){
        if(active == false) {
            active = true;
            timer = setInterval(UpdateTimer, 1000);
        }
    });

    $("#stop-btn").on("click", function(){
        if(active == true) {
            active = false;
            clearInterval(timer);
        }
    });

    $("#reset-btn").on("click", function(){
        if(active == true) {
            active = false;
            clearInterval(timer);
        }
        seconds = 0;
        minutes = 0;
        hours = 0;
        $("#timer").html("00:00:00");
    });

    $("#record-btn").on("click", function(){
        if(seconds != 0 || minutes != 0 || hours != 0){
            var curHours = (hours < 10 ? "0" : "") + hours;
            var curMinutes = (minutes < 10 ? "0" : "") + minutes;
            var curSeconds = (seconds < 10 ? "0" : "") + seconds;

            var recordString = `<tr><td>${number++}</td><td>${curHours}:${curMinutes}:${curSeconds}</td></tr>`;
            
            $("#table-record").append(recordString);
        }
    });

    function UpdateTimer() {
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }

        var timeString = (hours < 10 ? "0" : "") + hours + ":" +
                         (minutes < 10 ? "0" : "") + minutes + ":" +
                         (seconds < 10 ? "0" : "") + seconds;
        
        $("#timer").html(timeString);
    }
})