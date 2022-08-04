function generate(){
    if(!document.getElementById("mayuscb").checked && !document.getElementById("minuscb").checked && !document.getElementById("numcb").checked && !document.getElementById("especialcb").checked){
        var x = window.matchMedia("(max-device-width : 680px)");
        if(x.matches){
            document.getElementById("result").style.fontSize = "4vw";
        }else{
            document.getElementById("result").style.fontSize = "2vw";
        }
        setResult("Selecciona al menos una casilla");
    }else{
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const d = ["!", "¡", "@", "#", "$", "%", "^", "[", "]", "/", "&", "+", "," , "=", "_", "(", ")", "-", "{", "}", "[", "]", "|", ";", ":", "*", "ç"];
    var lista = [];
    var pass = "";

    if(document.getElementById("mayuscb").checked){
        lista = lista.concat(c);
    }
    if(document.getElementById("minuscb").checked){
        lista = lista.concat(b);
    }
    if(document.getElementById("numcb").checked){
        lista = lista.concat(a);
    }
    if(document.getElementById("especialcb").checked){
        lista = lista.concat(d);
    }
    
    var num = (Math.random() * Math.pow(10, document.getElementById("longitudn").value) * 10).toFixed();

    while(num < Math.pow(10, document.getElementById("longitudn").value)){
        num = num.concat(1);
    }

    var final = lista.sort(function(){return Math.random()-0.5});

    var sNumber = num.toString();
    var output = [];

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        pass = pass.concat(final[i]);
    }

    setResult(pass);
    }

}


function setValue(){
    document.getElementById("longitudn").value = document.getElementById("longitud").value;
}
function setResult(pass){
    document.getElementById("result").value = pass;

}

function navigator(){
    document.getElementById('navigator').classList.toggle('active')
    document.getElementById('boton').classList.toggle('active')
    document.getElementById('redesa').classList.toggle('active')
}