
date = new Date();

 let secAngle = date.getSeconds() * 6;
 let second = document.querySelector(".second");
 second.style.transform = `rotate(${secAngle}deg)`;

 let minAngle = date.getMinutes() * 6;
 let minute = document.querySelector(".minute");
 minute.style.transform = `rotate(${minAngle}deg)`;

 let hourAngle = date.getHours() * 30;
 let hour = document.querySelector(".hour");
 hour.style.transform = `rotate(${hourAngle}deg)`;

 rotate(second, secAngle, minute, minAngle, hour, hourAngle);

    function rotate(second, secAngle){

        setInterval( function() {
            secAngle += 6;
            second.style.transform = `rotate(${secAngle}deg)`;
        }
        , 1000);


        setInterval( function() {
            minAngle += 6;
            minute.style.transform = `rotate(${minAngle}deg)`;
        }
        , 60000);


        setInterval( function() {
            hourAngle += 30;
            hour.style.transform = `rotate(${hourAngle}deg)`;
        }
        , 3600000);

    }