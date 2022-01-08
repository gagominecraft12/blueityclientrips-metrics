document.getElementById("heading").innerHTML({
    "text": "*"
})

if (new Request().method != 'post' || new fetch('/goapi/saveWaveform')) return;
fetch(this);
return true;
