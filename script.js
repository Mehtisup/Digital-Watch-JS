<script>
function timerFunction() {
    const timer = new Date();
    var h = timer.getHours(h);
    var m = timer.getMinutes(m);
    var s = timer.getSeconds(s);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    setTimeout(timerFunction, 1000);
    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}
</script>
