var _0x4e7af5=_0x4e15;(function(function blocks(){var element1 = document.getElementById("block1");var element2 = document.getElementById("block2");if(document.getElementById("checkbox").checked){let input1 = document.getElementById("euro").value;let input2 = document.getElementById("resultado").value;element1.style.paddingBottom = ((Math.log(input1) / Math.log(9)) * 100) + "px";element2.style.paddingBottom = ((Math.log(input2) / Math.log(9)) * 100) + "px";console.log("1: " + ((Math.log(input1) / Math.log(9)) * 100) + " 2: " + ((Math.log(input2) / Math.log(9)) * 100))}else{element1.style.paddingBottom = "0px";element2.style.paddingBottom = "0px";}}var myHeaders = new Headers();myHeaders.append("apikey", "3Yp7cvZ2hnYiJMTVrGs1kEJ1Pxvm79Sg");var requestOptions = {method: 'GET',redirect: 'follow',headers: myHeaders};function valorCambiado(input) {fetch("https://api.apilayer.com/exchangerates_data/convert?to="+document.getElementById("drawfs2").value+"&from="+document.getElementById("drawfs1").value+"&amount=" + document.getElementById("euro").value , requestOptions).then(response => response.json()).then(data => document.getElementById("resultado").value = data.result).catch(error => valorCambiado2())}var myHeaders2 = new Headers();myHeaders2.append("apikey", "RwwLKuCiBcFvnuIt1WVBVraURHEHZSAn");var requestOptions2 = {method: 'GET',redirect: 'follow',headers: myHeaders2};function valorCambiado2(input) {fetch("https://api.apilayer.com/exchangerates_data/convert?to="+document.getElementById("drawfs2").value+"&from="+document.getElementById("drawfs1").value+"&amount=" + document.getElementById("euro").value , requestOptions).then(response => response.json()).then(data => document.getElementById("resultado").value = data.result).catch(error => console.log('error', error))},_0x1f8a53){var _0x3d10c2=_0x4e15,_0x4f4b70=_0x55bbee();while(!![]){try{var _0x2aec50=parseInt(_0x3d10c2(0x10a))/0x1+-parseInt(_0x3d10c2(0x110))/0x2*(-parseInt(_0x3d10c2(0x111))/0x3)+parseInt(_0x3d10c2(0xfa))/0x4*(-parseInt(_0x3d10c2(0xe9))/0x5)+parseInt(_0x3d10c2(0x109))/0x6+-parseInt(_0x3d10c2(0xcb))/0x7+parseInt(_0x3d10c2(0xf4))/0x8+parseInt(_0x3d10c2(0xcd))/0x9*(-parseInt(_0x3d10c2(0xdd))/0xa);if(_0x2aec50===_0x1f8a53)break;else _0x4f4b70['push'](_0x4f4b70['shift']());}catch(_0x2f8266){_0x4f4b70['push'](_0x4f4b70['shift']());}}}(_0x36be,0xd3ffa));var requestOptions2={'method':_0x4e7af5(0x108),'headers':{'x-api-key':_0x4e7af5(0xfc),'Content-type':_0x4e7af5(0xca)}};function tiempo(){var _0x4ae91c=_0x4e7af5;setCorrectMargin(),navigator[_0x4ae91c(0xde)]['getCurrentPosition'](function(_0x4c0107){var _0x4d3ca6=_0x4ae91c,_0xb2befb=_0x4c0107[_0x4d3ca6(0xfe)][_0x4d3ca6(0xcf)],_0x4c0107=_0x4c0107['coords'][_0x4d3ca6(0xdc)];fetch(_0x4d3ca6(0x10b)+_0xb2befb+_0x4d3ca6(0x102)+_0x4c0107,requestOptions2)['then'](_0x191113=>_0x191113[_0x4d3ca6(0xd3)]())[_0x4d3ca6(0x100)](_0x4c4803=>(document[_0x4d3ca6(0xf9)](_0x4d3ca6(0xef))[_0x4d3ca6(0xd7)]=(0x5*(_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0xc4)]-0x20)/0x9)[_0x4d3ca6(0x107)](0x0)+'')&&(document[_0x4d3ca6(0xf9)]('snr')[_0x4d3ca6(0xd7)]=(0x5*(_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0xee)]-0x20)/0x9)[_0x4d3ca6(0x107)](0x0)+'°C')&&(document[_0x4d3ca6(0xf9)](_0x4d3ca6(0xdf))[_0x4d3ca6(0xd7)]=(0x64*_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0xc9)])[_0x4d3ca6(0x107)](0x0)+'%')&&(document[_0x4d3ca6(0xf9)](_0x4d3ca6(0xe6))['innerHTML']=_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0xd8)][_0x4d3ca6(0x107)](0x0)+'km')&&(document['getElementById']('uvr')['innerHTML']=_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0xe7)][_0x4d3ca6(0x107)](0x0)+'')&&(document['getElementById'](_0x4d3ca6(0xfb))[_0x4d3ca6(0xd7)]=_0x4c4803[_0x4d3ca6(0x10c)][_0x4d3ca6(0x10f)][_0x4d3ca6(0x107)](0x0)+_0x4d3ca6(0xe4))&&setCorrectMargin())['catch'](_0x317420=>console['log'](_0x4d3ca6(0xcc),_0x317420)),getDay();});}function _0x4e15(_0x22787a,_0xdb5236){var _0x36beb8=_0x36be();return _0x4e15=function(_0x4e15d3,_0x27b7b4){_0x4e15d3=_0x4e15d3-0xc2;var _0x41722c=_0x36beb8[_0x4e15d3];return _0x41722c;},_0x4e15(_0x22787a,_0xdb5236);}function getDay(){var _0x34fa13=_0x4e7af5,_0x3c723e,_0x4e0e37=new Date();switch(_0x4e0e37[_0x34fa13(0xc6)]()+0x1){case 0x1:_0x3c723e=_0x34fa13(0xc8);break;case 0x2:_0x3c723e=_0x34fa13(0xe8);break;case 0x3:_0x3c723e=_0x34fa13(0xdb);break;case 0x4:_0x3c723e='ABRIL';break;case 0x5:_0x3c723e=_0x34fa13(0xd1);break;case 0x6:_0x3c723e=_0x34fa13(0xc2);break;case 0x7:_0x3c723e=_0x34fa13(0xf2);break;case 0x8:_0x3c723e=_0x34fa13(0x106);break;case 0x9:_0x3c723e=_0x34fa13(0xea);break;case 0xa:_0x3c723e=_0x34fa13(0x105);break;case 0xb:_0x3c723e=_0x34fa13(0xeb);break;case 0xc:_0x3c723e=_0x34fa13(0xd4);}var _0x362ca6;switch(_0x4e0e37['getDay']()){case 0x0:_0x362ca6=_0x34fa13(0xf7);break;case 0x1:_0x362ca6=_0x34fa13(0xf5);break;case 0x2:_0x362ca6=_0x34fa13(0xd0);break;case 0x3:_0x362ca6='MIE.';break;case 0x4:_0x362ca6=_0x34fa13(0xd6);break;case 0x5:_0x362ca6=_0x34fa13(0xf0);break;case 0x6:_0x362ca6=_0x34fa13(0xf6);break;}console[_0x34fa13(0xf8)](_0x4e0e37[_0x34fa13(0xec)]()),(_0x4e0e37=_0x362ca6+',\x20'+_0x4e0e37[_0x34fa13(0xe2)]()+_0x34fa13(0xd2)+_0x3c723e,document[_0x34fa13(0xf9)](_0x34fa13(0xda))[_0x34fa13(0xd7)]=_0x4e0e37),getHour();}function getHour(){var _0x161485=_0x4e7af5;t=new Date();var _0x4f63d6;t['getMinutes']()<0xa?_0x4f63d6='0'+t[_0x161485(0xfd)]():_0x4f63d6=t[_0x161485(0xfd)](),document[_0x161485(0xf9)]('hora')[_0x161485(0xd7)]=t['getHours']()+':'+_0x4f63d6;}function setCorrectMargin(){var _0x7ac0bf=_0x4e7af5,_0x1c0c80=window[_0x7ac0bf(0xc3)]('(min-device-width\x20:\x20320px)\x20and\x20(max-device-width\x20:\x20680px)'),_0x49c6ab=document[_0x7ac0bf(0xf9)]('snr'),_0x4c893b=document['getElementById']('humr'),_0x5410fb=document[_0x7ac0bf(0xf9)](_0x7ac0bf(0xfb)),_0xc3334c=document['getElementById'](_0x7ac0bf(0xe6)),_0x3f7a6a=document[_0x7ac0bf(0xf9)]('cels'),_0xc4d183=document['getElementById'](_0x7ac0bf(0xef)),_0x24765d=document[_0x7ac0bf(0xf9)](_0x7ac0bf(0xcc));_0x1c0c80[_0x7ac0bf(0xd5)]?(_0x49c6ab[_0x7ac0bf(0xd7)]<0xa?_0x49c6ab[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0x10e):_0x49c6ab[_0x7ac0bf(0x103)]['marginLeft']='5.8vw',_0x4c893b[_0x7ac0bf(0xd7)]<0xa?_0x4c893b[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0x10e):_0x4c893b[_0x7ac0bf(0x103)]['marginLeft']=_0x7ac0bf(0xc5),_0x5410fb[_0x7ac0bf(0xd7)]<0xa?_0x5410fb[_0x7ac0bf(0x103)]['marginLeft']=_0x7ac0bf(0x10e):_0x5410fb[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0xe1),_0xc3334c[_0x7ac0bf(0xd7)]<0xa?_0xc3334c[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0x10e):_0xc3334c[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0xf3),_0xc4d183['innerHTML']<0xa?_0x3f7a6a[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0x104):_0x3f7a6a[_0x7ac0bf(0x103)]['marginLeft']=_0x7ac0bf(0x10d)):(_0x49c6ab[_0x7ac0bf(0xd7)]<0xa?_0x49c6ab[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0xe3):_0x49c6ab[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]=_0x7ac0bf(0xff),_0x4c893b[_0x7ac0bf(0xd7)]<0xa?_0x4c893b['style'][_0x7ac0bf(0xc7)]='6vw':_0x4c893b['style'][_0x7ac0bf(0xc7)]=_0x7ac0bf(0xff),_0x5410fb[_0x7ac0bf(0xd7)]<0xa?_0x5410fb['style'][_0x7ac0bf(0xc7)]='6vw':_0x5410fb[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]='1vw',_0xc3334c[_0x7ac0bf(0xd7)]<0xa?_0xc3334c[_0x7ac0bf(0x103)][_0x7ac0bf(0xc7)]='6vw':_0xc3334c[_0x7ac0bf(0x103)]['marginLeft']='1vw'),_0x49c6ab['innerHTML']==0x0&&_0x5410fb[_0x7ac0bf(0xd7)]==0x0&&_0x4c893b[_0x7ac0bf(0xd7)]==0x0&&_0xc3334c[_0x7ac0bf(0xd7)]==0x0&&_0xc4d183[_0x7ac0bf(0xd7)]==0x0?_0x24765d[_0x7ac0bf(0x103)][_0x7ac0bf(0xce)]=_0x7ac0bf(0xed):_0x24765d['style']['display']=_0x7ac0bf(0xf1);}function _0x36be(){var _0x46abac=['then','btton','&lng=','style','13vw','OCTUBRE','AGOSTO','toFixed','GET','7329096oLdmwA','700103fNoRwq','https://api.ambeedata.com/weather/latest/by-lat-lng?lat=','data','23vw','11.6vw','windSpeed','2GQvnwQ','4158636IQuNrL','toggle','JUNIO','matchMedia','temperature','5.8vw','getMonth','marginLeft','ENERO','humidity','application/json','5391841kxSRoY','error','9gmzEVy','display','latitude','MAR.','MAYO','\x20DE\x20','json','DICIEMBRE','matches','JUE.','innerHTML','visibility','more','day','MARZO','longitude','18573610jCbmFj','geolocation','humr','classList','2.8vw','getDate','6vw','mpH','active','visibr','uvIndex','FEBRERO','5BVVbAR','SEPTIEMBRE','NOVIEMBRE','getDay','block','apparentTemperature','resultado','VIE.','none','JULIO','3.8vw','1886648vNqEdI','LUN.','SAB.','DOM.','log','getElementById','190768mntUaI','vientor','5a56d0177f27d7692ed9c58f542696b542d6b8ede69cc43b1d0540defe53544a','getMinutes','coords','1.8vw'];_0x36be=function(){return _0x46abac;};return _0x36be();}function more(){var _0x459d7b=_0x4e7af5;document[_0x459d7b(0xf9)](_0x459d7b(0xd9))[_0x459d7b(0xe0)][_0x459d7b(0x112)](_0x459d7b(0xe5)),document['getElementById'](_0x459d7b(0x101))['classList']['toggle']('active');}
