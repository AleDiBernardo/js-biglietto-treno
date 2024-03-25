// GET DATA AND DECLARATION

const kilometres = prompt("Inserisci il numero di km da percorrere");
const age = prompt("Inserisci la tua eta");
const oneKmPrice = 0.21;
let finalPrice = parseInt(kilometres) * oneKmPrice;
let discount = 0;

// LOGICAL BLOCK

if (age < 18) {
  discount = finalPrice * 0.2;
  finalPrice -= discount;
  console.log(finalPrice);
} else if (age > 65) {
  discount = finalPrice * 0.4;
  finalPrice -= discount;
  console.log(finalPrice);
} else {
  console.log(finalPrice);
}

document.getElementById("finalPrice").innerHTML ="€ " +  finalPrice.toFixed(2);
