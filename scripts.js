function tp() {
    console.log(document.getElementById("text").value + "");
    window.location.href = 'hola.php?mensaje=' + document.getElementById("text").value;
}