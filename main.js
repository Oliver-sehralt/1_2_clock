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