"use strict";
function Age() {
    let ans= "";
    let WatchMove = parseInt(document.getElementById("WatchMove").value);
   
    if (WatchMove >= 17) {
        ans = "You can watch PG18 Moves"
    }
    else if (WatchMove >= 13) {
        ans = "You are only allowed to watch PG13";
    }
    else if (WatchMove <= 12) {
        ans = "You are only allowed to watch PG";
    }
    else {
        ans = "Enter a Valid Age";
    }
    document.getElementById("ans").innerHTML = ans ;
}
