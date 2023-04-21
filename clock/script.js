function showTime () {
    var time = new Date ();   
    var sec = time.getSeconds();
    var sec2 = time.getSeconds() * 6;
    var min = time.getMinutes();
    var min2 = time.getMinutes() * 6;
    var hour = time.getHours();
    var hour2 = time.getHours() * 30 + Math.round(min2 / 12);
    var session = document.querySelector(".session");
    min = correctTime(min);
    sec = correctTime(sec);
    
    if (hour == 0) {
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session.innerHTML ="PM";
    }
    if(hour < 10 ){
        hour = "0" + hour
    }
    document.querySelector(".hour").innerHTML =  hour ;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".second-wrapper").style.transform = "rotate(" + sec2 + "deg)"
    document.querySelector(".minute-wrapper").style.transform = "rotate(" + min2 + "deg)"
    document.querySelector(".hour-wrapper").style.transform = "rotate(" + hour2 + "deg)"
}
function correctTime(i) {
    if (i < 10 ) {
        i = "0" + i;
        
    }
    return i;
}
setInterval (showTime, 1000);
showTime()
