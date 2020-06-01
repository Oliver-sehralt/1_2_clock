var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
    ];
    
    var wocheTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
    ];

  
    window.onload = setInterval(clock,1000);

    function clock()
    {
	  var d = new Date();
	  
	  var date = d.getDate();
	  
	  var month = d.getMonth();
	  month=monate[month];
	  
	  var year = d.getFullYear();
	  
	  var day = d.getDay();
	  day=wocheTag[day];
	  
	  var hour =d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      
      min = ( min < 10 ? "0" : "" ) + min;
      sec = ( sec < 10 ? "0" : "" ) + sec;

      var timeOfDay = ( hour < 12 ) ? "AM" : "PM";
      hour = ( hour > 12 ) ? hour - 12 : hour;
      hour = ( hour == 0 ) ? 12 : hour;
	
	  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
      document.getElementById("time").innerHTML=hour+":"+min+":"+sec + " " + timeOfDay;
      

    }