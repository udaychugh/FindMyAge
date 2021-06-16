document.getElementById("getData").onclick = function () {
    // taking values from html

    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var time = document.getElementById("time").value;
    
    var currentDate = new Date();
    
    var newDay = currentDate.getDate();
    var newMonth = currentDate.getMonth();
    var newYear = currentDate.getFullYear();
    var newHour = currentDate.getHours();
    var newMin = currentDate.getMinutes();
    
    var finalDate = newDay - date;
    var finalMonth = newMonth - month;
    var finalYear = newYear - year;
    var finalTime = (newHour + newMin) - time;
    
    document.getElementById("showAge").innerHTML = finalYear + "years, " + finalMonth + "months, " + finalDate + "days. ";
}
