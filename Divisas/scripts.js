function blocks(){
  var element1 = document.getElementById("block1");
  var element2 = document.getElementById("block2");

  if(document.getElementById("checkbox").checked){
  let input1 = document.getElementById("euro").value;
  let input2 = document.getElementById("resultado").value;
  element1.style.paddingBottom = ((Math.log(input1) / Math.log(9)) * 100) + "px";
  element2.style.paddingBottom = ((Math.log(input2) / Math.log(9)) * 100) + "px";

  console.log("1: " + ((Math.log(input1) / Math.log(9)) * 100) + " 2: " + ((Math.log(input2) / Math.log(9)) * 100))
  }else{
    element1.style.paddingBottom = "0px";
    element2.style.paddingBottom = "0px";
  }
}

var myHeaders = new Headers();
myHeaders.append("apikey", "3Yp7cvZ2hnYiJMTVrGs1kEJ1Pxvm79Sg");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function valorCambiado(input) {  
  fetch("https://api.apilayer.com/exchangerates_data/convert?to="+document.getElementById("drawfs2").value+"&from="+document.getElementById("drawfs1").value+"&amount=" + document.getElementById("euro").value , requestOptions)
  .then(response => response.json())
  .then(data => document.getElementById("resultado").value = data.result)
  .catch(error => valorCambiado2())
}


var myHeaders2 = new Headers();
myHeaders2.append("apikey", "RwwLKuCiBcFvnuIt1WVBVraURHEHZSAn");

var requestOptions2 = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders2
};
function valorCambiado2(input) {  
  fetch("https://api.apilayer.com/exchangerates_data/convert?to="+document.getElementById("drawfs2").value+"&from="+document.getElementById("drawfs1").value+"&amount=" + document.getElementById("euro").value , requestOptions)
  .then(response => response.json())
  .then(data => document.getElementById("resultado").value = data.result)
  .catch(error => console.log('error', error))
}