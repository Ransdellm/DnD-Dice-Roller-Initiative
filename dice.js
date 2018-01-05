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



// creates random roll based on die given. insert into button functions below
const rollRandomDice = i => {
  let num = Math.floor((Math.random() * i ) + 1);
  let NumDice = document.getElementById("numOfDice")
  let mod = parseInt(document.getElementById("modifier").value);
  if (mod == "" || isNaN(mod)) {
    document.getElementById("diceOut").innerHTML= (num+0);
    return false;
  } else {
  let outcome = (num + mod);
  document.getElementById("diceOut").innerHTML = outcome;
}
}

// function that rolls dice
rollD4 = () => {
  rollRandomDice(4);
}
rollD6 = () => {
  rollRandomDice(6);
}
rollD8 = () => {
  rollRandomDice(8);
}
rollD10 = () => {
  rollRandomDice(10);
}
rollD12 = () => {
  rollRandomDice(12);
}
rollD20 = () => {
  rollRandomDice(20);
}
rollD100 = () => {
  rollRandomDice(100);
}
