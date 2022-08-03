function generate(){
    console.clear()
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const b = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const d = ["!", "¡", "@", "#", "$", "%", "^", "[", "]", "/", "&", "+", "," , "=", "_", "(", ")", "-", "{", "}", "[", "]"];
    var lista = ["a", "b"];
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

    console.log(num);

    var sNumber = num.toString();
    var output = [];

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        pass = pass.concat(final[i]);
    }

    setResult(pass);


}


function setValue(){
    document.getElementById("longitudn").value = document.getElementById("longitud").value;
}
function setResult(pass){
    document.getElementById("result").value = pass;

}


/*
1 2 3 4 5 6 7 8 9 0 a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z ! @ # $ % ^ & / + , = _ ) - } ] 
*/