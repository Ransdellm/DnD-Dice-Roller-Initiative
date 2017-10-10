// calls dice roll function when button is clicked
window.onload = function () {
document.getElementById("rollD4").onclick = rollD4;
document.getElementById("rollD6").onclick = rollD6;
document.getElementById("rollD8").onclick = rollD8;
document.getElementById("rollD10").onclick = rollD10;
document.getElementById("rollD12").onclick = rollD12;
document.getElementById("rollD20").onclick = rollD20;
document.getElementById("rollD100").onclick = rollD100;
}
// function that rolls dice
rollD4 = () => {
  const randomD4 = Math.floor((Math.random() * 4 ) + 1);
alert(randomD4);
}
rollD6 = () => {
  const randomD6 = Math.floor((Math.random() * 6 ) + 1);
alert(randomD6);
}
rollD8 = () => {
  const randomD8 = Math.floor((Math.random() * 8 ) + 1);
alert(randomD8);
}
rollD10 = () => {
  const randomD10 = Math.floor((Math.random() * 10 ) + 1);
alert(randomD10);
}
rollD12 = () => {
  const randomD12 = Math.floor((Math.random() * 12 ) + 1);
alert(randomD12);
}
rollD20 = () => {
  const randomD20 = Math.floor((Math.random() * 20 ) + 1);
alert(randomD20);
}
rollD100 = () => {
  const randomD100 = Math.floor((Math.random() * 100 ) + 1);
alert(randomD100);
}
