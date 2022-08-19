
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    var session = "AM";

    if(h==0){
        h = 12;
    }
    if(h > 12){
        h = h-12;
        session = "PM";

    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " +  session;

    document.getElementById("clockdisplay").innerText = time;

    document.getElementById("clockdisplay").textContent = time;

    setTimeout(showTime, 1000);
   
    
}

showTime();

function showfulldate(){
    var fulldate = new Date();
    var numday = fulldate.getDate();
    var d = fulldate.getDay();
    var mn = fulldate.getMonth();
    var y = fulldate.getFullYear();

    var day;
    var month;

    if(d == 1){
        day = "Mon";

    } else if (d == 2){
        day = "Tue";

    } else if (d == 3){
        day = "Wed";

    } else if (d == 4){
        day = "Thu";

    } else if (d == 5){
        day = "Fri";

    } else if (d == 6){
        day = "Sat";

    } else if (d == 7){
        day = "Sun";

    }

    if(mn == 0){
        month = "January";
 
     }if(mn == 1){
       month = "February";

    } else if (mn == 2){
        month = "March";

    } else if (mn == 3){
        month = "April";

    } else if (mn == 4){
        month = "May";

    } else if (mn == 5){
        month = "June";

    } else if (mn == 6){
        month = "July";

    } else if (mn == 7){
        month = "August";

    } else if (mn == 8){
        month = "September";

    } else if (mn == 9){
        month = "October";

    } else if (mn == 10){
        month = "November";

    } else if (mn == 11){
        month = "December";

    } 

    var compdate = day + " " + numday + "-" + month + "-" + y;0

    document.getElementById("clockdisplay").innerText = compdate;
    document.getElementById("datedisplay").textContent = compdate;


}

showfulldate();