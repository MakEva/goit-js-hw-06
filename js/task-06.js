const inputText = document.getElementById("validation-input");

const rightDataLength = parseInt(inputText.dataset.length);

inputText.addEventListener("blur", checkInputLength);

function checkInputLength() {

    inputText.classList.remove("valid", "invalid");
   
    const inputedText = inputText.value.trim();

    if (inputedText.length === rightDataLength) {
        inputText.classList.add("valid");
    } else {
        inputText.classList.add("invalid");
    }
   
}
