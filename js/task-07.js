const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputRange.addEventListener("input", updateFontSize);

function updateFontSize() {

    const inputedFontSize = inputRange.value + "px"; 
    spanText.style.fontSize = inputedFontSize;
}