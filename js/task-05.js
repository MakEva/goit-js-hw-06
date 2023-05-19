const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", toTypeName);

function toTypeName() {
    if (nameInput.value === "") {
        nameOutput.textContent = "Anonymous";
    }
    nameOutput.textContent = nameInput.value;
}