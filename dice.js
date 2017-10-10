// calls dice roll function when button is clicked
window.onload = () => {
document.getElementById("rollD4").onclick = rollD4;
document.getElementById("rollD6").onclick = rollD6;
document.getElementById("rollD8").onclick = rollD8;
document.getElementById("rollD10").onclick = rollD10;
document.getElementById("rollD12").onclick = rollD12;
document.getElementById("rollD20").onclick = rollD20;
document.getElementById("rollD100").onclick = rollD100;
}



// creates random roll based on sided die given. insert into button functions below
const rollRandomDice = i => {
  const num = Math.floor((Math.random() * i ) + 1);
  return num;
}

// function that rolls dice
rollD4 = () => {
  const randomD4 = rollRandomDice(4);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD4 + mod;
  alert(outcome);
}
rollD6 = () => {
  const randomD6 = rollRandomDice(6);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD6 + mod;
alert(outcome);
}
rollD8 = () => {
  const randomD8 = rollRandomDice(8);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD8 + mod;
alert(outcome);
}
rollD10 = () => {
  const randomD10 = rollRandomDice(10);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD10 + mod;
alert(outcome);
}
rollD12 = () => {
  const randomD12 = rollRandomDice(12);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD12 + mod;
alert(outcome);
}
rollD20 = () => {
  const randomD20 = rollRandomDice(20);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD20 + mod;
alert(outcome);
}
rollD100 = () => {
  const randomD100 = rollRandomDice(100);
  const mod = parseInt(document.getElementById("modifier").value);
  const outcome = randomD100 + mod;
alert(outcome);
}
