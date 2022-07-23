var requestOptions2 = { method: "GET", headers: { "x-api-key": "5a56d0177f27d7692ed9c58f542696b542d6b8ede69cc43b1d0540defe53544a", "Content-type": "application/json" } };
function tiempo() {
    setCorrectMargin();
    navigator.geolocation.getCurrentPosition(function (e) {
        var t = e.coords.latitude,
            e = e.coords.longitude;
        fetch("https://api.ambeedata.com/weather/latest/by-lat-lng?lat=" + t + "&lng=" + e, requestOptions2)
            .then((e) => e.json())
            .then(
                (e) =>
                    (document.getElementById("resultado").innerHTML = ((5 * (e.data.temperature - 32)) / 9).toFixed(0) + "") &&
                    (document.getElementById("snr").innerHTML = ((5 * (e.data.apparentTemperature - 32)) / 9).toFixed(0) + "°C") &&
                    (document.getElementById("humr").innerHTML = (100 * e.data.humidity).toFixed(0) + "%") &&
                    (document.getElementById("visibr").innerHTML = e.data.visibility.toFixed(0) + "km") &&
                    (document.getElementById("uvr").innerHTML = e.data.uvIndex.toFixed(0) + "") &&
                    (document.getElementById("vientor").innerHTML = e.data.windSpeed.toFixed(0) + "mpH") &&
                    (setCorrectMargin()))
            .catch((e) => console.log("error", e)),
            getDay();
    });
}
function getDay() {
    var e,
        t = new Date();
    switch (t.getMonth() + 1) {
        case 1:
            e = "ENERO";
            break;
        case 2:
            e = "FEBRERO";
            break;
        case 3:
            e = "MARZO";
            break;
        case 4:
            e = "ABRIL";
            break;
        case 5:
            e = "MAYO";
            break;
        case 6:
            e = "JUNIO";
            break;
        case 7:
            e = "JULIO";
            break;
        case 8:
            e = "AGOSTO";
            break;
        case 9:
            e = "SEPTIEMBRE";
            break;
        case 10:
            e = "OCTUBRE";
            break;
        case 11:
            e = "NOVIEMBRE";
            break;
        case 12:
            e = "DICIEMBRE";
    }
    var wd;
    switch (t.getDay()) {
        case 1:
            wd = "LUN.";
            break;
        case 2:
            wd = "MAR.";
            break;
        case 3:
            wd = "MIE.";
            break;
        case 4:
            wd = "JUE.";
            break;
        case 5:
            wd = "VIE.";
            break;
        case 6:
            wd = "SAB.";
            break;
        case 7:
            wd = "DOM.";
            break;
    }
    (t = (wd) +", "+ t.getDate() + " DE " + e), (document.getElementById("day").innerHTML = t);
    getHour();
}
function getHour() {
    t = new Date();
    var minutos;
    if(t.getMinutes() < 10){
        minutos = "0" + t.getMinutes();
    }else{
        minutos = t.getMinutes();
    }
    document.getElementById("hora").innerHTML = (t.getHours() + ":" + minutos);

}

function setCorrectMargin(){
    var x = window.matchMedia("(min-device-width : 320px) and (max-device-width : 680px)")
    var snr = document.getElementById("snr");
    var humr = document.getElementById("humr");
    var vientor = document.getElementById("vientor");
    var visibr = document.getElementById("visibr");
    var cels = document.getElementById("cels");
    var resultado = document.getElementById("resultado");
    var error = document.getElementById("error");

        if (x.matches) { 
            if(snr.innerHTML < 10){
                snr.style.marginLeft = "11.6vw";
            }else{
                snr.style.marginLeft = "5.8vw";
        
            }
            if(humr.innerHTML < 10){
                humr.style.marginLeft = "11.6vw";
            }else{
                humr.style.marginLeft = "5.8vw";
            }
            if(vientor.innerHTML < 10){
                vientor.style.marginLeft = "11.6vw";
            }else{
                vientor.style.marginLeft = "2.8vw";
            }
            if(visibr.innerHTML < 10){
                visibr.style.marginLeft = "11.6vw";
            }else{
                visibr.style.marginLeft = "3.8vw";
            }
            if(resultado.innerHTML < 10){
                cels.style.marginLeft = "13vw";
            }else{
                cels.style.marginLeft = "23vw";
            }
        } else {
            if(snr.innerHTML < 10){
                snr.style.marginLeft = "6vw";
            }else{
                snr.style.marginLeft = "1.8vw";
        
            }
            if(humr.innerHTML < 10){
                humr.style.marginLeft = "6vw";
            }else{
                humr.style.marginLeft = "1.8vw";
            }
            if(vientor.innerHTML < 10){
                vientor.style.marginLeft = "6vw";
            }else{
                vientor.style.marginLeft = "1vw";
        
            }
            if(visibr.innerHTML < 10){
                visibr.style.marginLeft = "6vw";
            }else{
                visibr.style.marginLeft = "1vw";
            }
        }
        if(snr.innerHTML == 0 && vientor.innerHTML == 0 && humr.innerHTML == 0 && visibr.innerHTML == 0 && resultado.innerHTML == 0){
            error.style.display = "block";
        }else{
            error.style.display = "none";
        }
}

function more(){
    document.getElementById('more').classList.toggle('active')
    document.getElementById('btton').classList.toggle('active')
}