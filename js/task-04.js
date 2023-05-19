const spanValue = document.querySelector("span#value");
let counterValue = 0;
function updateCounterValue() {
    spanValue.textContent = counterValue;
};

const decrementButton = document.querySelector('[data-action="decrement"]');

decrementButton.addEventListener("click", toDecrementValue);
function toDecrementValue() {
    counterValue--;
    updateCounterValue();
};
  
const incrementButton = document.querySelector('[data-action="increment"]');
incrementButton.addEventListener("click", toIncrementValue);
function toIncrementValue() {
    counterValue++;
    updateCounterValue();

}; 