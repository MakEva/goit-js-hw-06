const inputText = document.getElementById("validation-input");
const rightDataLength = parseInt(inputText.dataset.length);

inputText.addEventListener("blur", checkInputLength);

function checkInputLength() {
    inputText.classList.remove("valid", "invalid");
    
    if (inputText.value.length === rightDataLength) {
        inputText.classList.add("valid");
    } else {
        inputText.classList.add("invalid");
    }
   
}
