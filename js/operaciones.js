function f5(){
    var s1 = parseInt(document.getElementById("txtDato1").value);
    var s2 = parseInt(document.getElementById("txtDato2").value);
    var suma = s1 + s2;
    document.getElementById('txtRespuesta').value= suma;
}

function f6(){
    var s1 = parseInt(document.getElementById("txtDato1").value);
    var s2 = parseInt(document.getElementById("txtDato2").value);
    var suma = s1 * s2;
    document.getElementById('txtRespuesta').value= suma;
}

function f7() {
    var s1 = parseInt(document.getElementById("txtDato1-2").value);
    var respuesta=s1*0.2;
    document.getElementById('txtRespuesta2').value= respuesta;
}
function f8() {
    var s1 = parseInt(document.getElementById("txtDato1-3").value);
    var respuesta=s1*100;
    document.getElementById('txtRespuesta3').value= respuesta;
}
function f9() {
    var s1 = parseInt(document.getElementById("txtDato1-3").value);
    var respuesta=s1*1000;
    document.getElementById('txtRespuesta3').value= respuesta;
}

function f10(){
    var s1 = parseInt(document.getElementById("txtDato1-4").value);
    var s2 = parseInt(document.getElementById("txtDato2-4").value);
    var respuesta=(s1*s2)/2;
    document.getElementById('txtRespuesta4').value= respuesta;
}

function f11(){
    var s1 = parseInt(document.getElementById("txtDato1-5").value);
    var respuesta=s1*3.38;
    document.getElementById('txtRespuesta5').value= respuesta;
}
function f12(){
    var s1 = parseInt(document.getElementById("txtDato1-6").value);
    var respuesta=s1*25.4;
    document.getElementById('txtRespuesta6').value= respuesta;
}
function f13(){
    var s1 = parseInt(document.getElementById("txtDato1-7").value);
    var a,b,c;
    var aux;
    a=s1%10;
    aux=parseInt(s1/10);
    b=aux%10;
    c=parseInt(aux/10);
    var aux2=a+b+c;
    var respuesta=aux2*aux2;
    document.getElementById('txtRespuesta7').value= respuesta;
}
function f14(){
    var s1 = parseInt(document.getElementById("txtDato1-8").value);
    var respuesta=s1*0.3;
    document.getElementById('txtRespuesta8').value= respuesta;
}
function f15(){
    var s1 = parseInt(document.getElementById("txtDato1-8").value);
    var respuesta=s1*0.2;
    document.getElementById('txtRespuesta8').value= respuesta;
}
function f16(){
    var s1 = parseInt(document.getElementById("txtDato1-8").value);
    var respuesta=s1*0.5;
    document.getElementById('txtRespuesta8').value= respuesta;
}

function f17(){
    var s1 = parseInt(document.getElementById("txtDato1-9").value);
    var respuesta=s1*0.19;
    var respuesta1=s1-respuesta;
    document.getElementById('txtRespuesta9').value= respuesta;
    document.getElementById('txtRespuesta9-1').value= respuesta1;
}

function f18(){
    var s1 = parseInt(document.getElementById("txtDato1-10").value);
    var s2 = parseInt(document.getElementById("txtDato2-10").value);
    var s3 = parseInt(document.getElementById("txtDato3-10").value);
    var a=s1*150;
    var b=s2*50;
    var c=s3*80;
    var suma=a+b+c;
    document.getElementById('txtRespuesta10-1').value= a;
    document.getElementById('txtRespuesta10-2').value= b;
    document.getElementById('txtRespuesta10-3').value= c;
    document.getElementById('txtRespuesta10').value= suma;
}