var requestOptions2 = { method: "GET", headers: { "x-api-key": "5a56d0177f27d7692ed9c58f542696b542d6b8ede69cc43b1d0540defe53544a", "Content-type": "application/json" } };
function tiempo() {
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
                    (setCorrectMargin()) &&
                    (console.log( t + " " + e))
            )
            .catch((e) => console.log("error", e)),
            getDay();
    });
}
function getDay() {
    var e,
        t = new Date();
    switch (t.getMonth() + 1) {
        case 1:
            e = "enero";
            break;
        case 2:
            e = "febrero";
            break;
        case 3:
            e = "marzo";
            break;
        case 4:
            e = "abril";
            break;
        case 5:
            e = "mayo";
            break;
        case 6:
            e = "junio";
            break;
        case 7:
            e = "julio";
            break;
        case 8:
            e = "agosto";
            break;
        case 9:
            e = "septiembre";
            break;
        case 10:
            e = "octubre";
            break;
        case 11:
            e = "noviembre";
            break;
        case 12:
            e = "diciembre";
    }
    (t = t.getDate() + " de " + e), (document.getElementById("day").innerHTML = t);
}


function setCorrectMargin(){
    console.log("hola")
    if(document.getElementById("snr").innerHTML < 10){
        document.getElementById("snr").style.marginLeft = "2.6vw";
    }else{
        document.getElementById("snr").style.marginLeft = "1.8vw";

    }
    if(document.getElementById("humr").innerHTML < 10){
        document.getElementById("humr").style.marginLeft = "2.6vw";
    }else{
        document.getElementById("humr").style.marginLeft = "1.8vw";
    }
    document.getElementById("vientor").style.marginLeft = "1vw";
    document.getElementById("visibr").style.marginLeft = "1vw";

    console.log(document.getElementById("humr").textContent)
    console.log(document.getElementById("snr").textContent)
    console.log(document.getElementById("vientor").textContent)
    console.log(document.getElementById("visibr").textContent)

}