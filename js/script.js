// GET DATA AND DECLARATION

const oneKmPrice = 0.21;
let finalPrice;
let discount;

// LOGICAL BLOCK


//Function to calculate price conditions

const sendBtn = document.getElementById("sendButton");

sendBtn.addEventListener("click", function () {
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
});

