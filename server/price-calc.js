var numOfPics = document.querySelector("#num-of-pics");
var submitButton = document.querySelector("#price-calc-button");
var displayPrice = document.getElementById("calculated-price");
var price;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  var selected = numOfPics.options[numOfPics.selectedIndex].text;
  if (selected == "Please select...") {
    price = calcPrice(0);
  } else {
    price = calcPrice(selected);
  }

  if (price == 0) {
    displayPrice.innerText = "...";
  } else {
    displayPrice.innerText = "£ " + price.toFixed(2);
  }
});

// Calculates price and updates html
const calcPrice = (selected) => {
  if (selected == 0) {
    return 0;
  } else if (selected < 6) {
    return selected * 7.5;
  } else if (selected < 8 && selected > 5) {
    return selected * 7;
  } else if (selected < 10 && selected > 7) {
    return selected * 6.5;
  } else if (selected >= 10) {
    return selected * 6;
  }
};
