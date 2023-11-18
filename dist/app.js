// [x] array of cards
// [x] card has front and back
// [x] display first card
// [x] let the user flip
// [x] let the user continue to next card
// [x] when all cards reviewed show done message
// [x] next card always show front first
// [ ] feedback after card was flipped
var _a, _b;
(_a = document.querySelector("#startPracticingBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    window.location.href = "review.html";
});
(_b = document
    .getElementById("#newCardBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", getNewCardData());
function getNewCardData() {
    var _a;
    var newCardFormHeader = document.createElement("div");
    var newCardForm = document.createElement("form");
    newCardForm.id = "newForm";
    newCardForm.className = "forms";
    var fronSideInput = document.createElement("input");
    fronSideInput.type = "text";
    fronSideInput.name = "fron side";
    fronSideInput.placeholder = "front side of the car";
    newCardFormHeader.appendChild(newCardForm);
    newCardForm.appendChild(fronSideInput);
    (_a = document.querySelector("#mainMenu")) === null || _a === void 0 ? void 0 : _a.appendChild(newCardFormHeader);
}
