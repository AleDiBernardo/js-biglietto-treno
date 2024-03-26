// GET DATA AND DECLARATION

//! OLD SOLUTION
// const kilometres = prompt("Inserisci il numero di km da percorrere");

const oneKmPrice = 0.21;
let finalPrice;
let discount;

// LOGICAL BLOCK

//! OLD SOLUTION
// if (age < 18) {
//   discount = finalPrice * 0.2;
//   finalPrice -= discount;
//   console.log(finalPrice);
// } else if (age > 65) {
//   discount = finalPrice * 0.4;
//   finalPrice -= discount;
//   console.log(finalPrice);
// } else {
//   console.log(finalPrice);
// }

//Function to calculate price conditions
function priceCalculator() {
  const userKilometres = document.getElementById("kilometres").value;

  finalPrice = parseFloat(userKilometres) * oneKmPrice;
  discount = 0;

  //Select checked radio
  const selectedRadio = document.querySelector('input[name="age"]:checked');

  //Discount conditions
  if (selectedRadio.value == "underage") {
    discount = finalPrice * 0.2;

    //debug
    console.log("Minorenne: " + finalPrice);
  } else if (selectedRadio.value == "over-sixty-five") {
    discount = finalPrice * 0.4;

    //debug
    console.log("Over 65: " + finalPrice);
  } 

  finalPrice -= discount;

  // OUTPUT
  return (document.getElementById("finalPrice").innerHTML =
    "Prezzo: € " + finalPrice.toFixed(2));
}
