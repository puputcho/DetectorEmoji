var previsao1 = "", previsao2 = "";
var cam = document.getElementById('camera');
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach('#camera');
 function capturar() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = 
         '<img src="'+data_uri+'" id="imgcapturada" />';

    } );       
}
console.log('ml5 version: ', ml5.version);
alert('Enable your webcam!');
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GFiBf1ct1/model.json', modelLoaded);
function modelLoaded() {
    console.log("modelo carregado 👍");
}
function speech() {
 var sintetizador = window.speechSynthesis;
 var txt1 = 'A 1ª previsão é: ' + previsao1;
 var txt2 = 'A 2ª previsão é: ' + previsao2;
 var speak = new SpeechSynthesisUtterance(txt1 + txt2);
 sintetizador.speak(speak);
}
function check() {
    var img = document.getElementById('imgCapturada');
    classifier.classify(img, obtainResults);
}
function obtainResults(error, results) {
    if (error) {
        console.error('Error at line 35 "function obtainResults(error, results)"');
        console.error('error: ' + error);
    }
    else{
        console.log('Operation Completed. Results: ' + results);
        previsao1 = results[0].label;
        previsao2 = results[1].label;
        document.getElementById('resultadoemocao').innerHTML = previsao1;
        document.getElementById('resultadoemocao2').innerHTML = previsao2;
         speech()
         // 1ª Previsão
         if (previsao1 == 'Feliz') {
            document.getElementById('updateEmoji').innerHTML ='&#128512;'
           }
           if (previsao1 == 'Surpreso') {
            document.getElementById('updateEmoji').innerHTML ='&#128559;'
           }
           if (previsao1 == 'Triste') {
            document.getElementById('updateEmoji').innerHTML ='&#128546;'
           }
           if (previsao1 == 'Bravo') {
            document.getElementById('updateEmoji').innerHTML ='&#128545;'
           }
           if (previsao1 == 'Neutro') {
            document.getElementById('updateEmoji').innerHTML ='&#128528;'
           }
           // 2ª Previsão
           if (previsao2 == 'Feliz') {
            document.getElementById('updateEmoji2').innerHTML ='&#128512;'
           }
           if (previsao2 == 'Surpreso') {
            document.getElementById('updateEmoji2').innerHTML ='&#128559;'
           }
           if (previsao2 == 'Triste') {
            document.getElementById('updateEmoji2').innerHTML ='&#128546;'
           }
           if (previsao2 == 'Bravo') {
            document.getElementById('updateEmoji2').innerHTML ='&#128545;'
           }
           if (previsao2 == 'Neutro') {
            document.getElementById('updateEmoji2').innerHTML ='&#128528;'
           }

    }
   
}