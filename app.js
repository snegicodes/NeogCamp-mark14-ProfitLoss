const initialPrice = document.querySelector("#price-initial");
const currentPrice = document.querySelector("#price-current");
const stocksQuantity = document.querySelector("#stocks-quantity");
const calcButton = document.querySelector("#calc-percent");
const resultMsg = document.querySelector("#result-msg");
const reset = document.querySelector("#reset-fields");
const pageBottom = document.querySelector("page-bottom");

calcButton.addEventListener("click", handleCalcClick);

function handleCalcClick() {
  let initialCost = Number(initialPrice.value);
  let currentCost = Number(currentPrice.value);
  let noOfStocks = Number(stocksQuantity.value);

  if (initialCost >= 1 && currentCost >= 1 && noOfStocks >= 1) {
    calculateResult(initialCost, noOfStocks, currentCost);
  } else {
    resultMsg.style.display = "block";
    resultMsg.innerText = "Enter Valid Values ❌";
    resultMsg.style.color = "red";
  }
}

function calculateResult(initialCost, noOfStocks, currentCost) {
  if (initialCost > currentCost) {
    let loss = (initialCost - currentCost) * noOfStocks;
    let lossPercent = (loss / initialCost) * 100;
    resultMsg.innerText = `Oops 🙁, Your Loss is ${loss} and your loss percent is ${lossPercent}%`;
    resultMsg.style.color = "red";
    reset.style.display = "block";
  } else if (currentCost > initialCost) {
    let profit = (currentCost - initialCost) * noOfStocks;
    let profitPercent = (profit / initialCost) * 100;
    resultMsg.innerText = `Congratulations ✨, Your profit is ${profit} and your profit percent is ${profitPercent}%`;
    resultMsg.style.color = "green";
    reset.style.display = "block";
  } else {
    resultMsg.innerText = "No Profit, No Loss 🤷🏻‍♂️";
    reset.style.display = "block";
  }
}

reset.addEventListener("click", (e) => {
  initialPrice.value = "";
  currentPrice.value = "";
  stocksQuantity.value = "";
  window.location.reload();
});
