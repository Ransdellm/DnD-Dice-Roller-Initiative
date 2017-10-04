// calls d6 function when button is clicked
document.getElementById("d4").addEventListener("click", rollD4);
document.getElementById("d6").addEventListener("click", rollD6);
document.getElementById("d8").addEventListener("click", rollD8);
document.getElementById("d10").addEventListener("click", rollD10);
document.getElementById("d12").addEventListener("click", rollD12);
document.getElementById("d20").addEventListener("click", rollD20);
document.getElementById("d100").addEventListener("click", rollD100);


// function that rolls d6
function rollD4 (){
  var randomD4 = Math.floor((Math.random() * 4 ) + 1);
alert(randomD4);
}
function rollD6 (){
  var randomD6 = Math.floor((Math.random() * 6 ) + 1);
alert(randomD6);
}
function rollD8 (){
  var randomD8 = Math.floor((Math.random() * 8 ) + 1);
alert(randomD8);
}
function rollD10 (){
  var randomD10 = Math.floor((Math.random() * 10 ) + 1);
alert(randomD10);
}
function rollD12 (){
  var randomD12 = Math.floor((Math.random() * 12 ) + 1);
alert(randomD12);
}
function rollD20 (){
  var randomD20 = Math.floor((Math.random() * 20 ) + 1);
alert(randomD20);
}
function rollD100 (){
  var randomD100 = Math.floor((Math.random() * 100 ) + 1);
alert(randomD100);
}
