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


    var d = new Date();

    document.getElementById("monat").innerHTML = monate[d.getMonth()];

    var e = new Date();

    document.getElementById("day").innerHTML = wocheTag[d.getDay()];

    document.getElementById("stunde").innerHTML = 10;

    document.getElementById("minuten").innerHTML = 55;

    document.getElementById("sekunden").innerHTML = 30;

    document.getElementById("periode").innerHTML = "AM";