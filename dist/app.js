// [x] array of cards
// [x] card has front and back
// [x] display first card
// [x] let the user flip
// [x] let the user continue to next card
// [x] when all cards reviewed show done message
// [x] next card always show front first
// [ ] feedback after card was flipped
var _a;
(_a = document.querySelector("#startPracticingBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    window.location.href = "review.html";
});
function getNewCardData() {
    var _a;
    var newCardFormHeader = document.createElement("div");
    newCardFormHeader.innerText = "New card";
    newCardFormHeader.id = "newCardFormHeaderId";
    var emptyDiv = document.createElement("div");
    var newCardForm = document.createElement("form");
    newCardForm.id = "newForm";
    newCardForm.className = "forms";
    var fronSideInput = document.createElement("input");
    fronSideInput.type = "text";
    fronSideInput.name = "fron side";
    fronSideInput.placeholder = "front side of the card";
    var backSideInput = document.createElement("input");
    backSideInput.type = "text";
    backSideInput.name = "back side";
    backSideInput.placeholder = "back side of the card";
    newCardFormHeader.appendChild(emptyDiv);
    newCardFormHeader.appendChild(newCardForm);
    newCardFormHeader.appendChild(emptyDiv);
    newCardForm.appendChild(fronSideInput);
    newCardFormHeader.appendChild(emptyDiv);
    newCardForm.appendChild(backSideInput);
    newCardFormHeader.appendChild(emptyDiv);
    (_a = document.querySelector("#mainMenu")) === null || _a === void 0 ? void 0 : _a.appendChild(newCardFormHeader);
    var subitNewCardBtn = document.createElement("button");
    subitNewCardBtn.id = "subitNewCardBtnId";
    subitNewCardBtn.classList.add("buttons");
    subitNewCardBtn.innerText = "Sunbmit new card.";
    newCardFormHeader.appendChild(subitNewCardBtn);
    var buttongroup = document.querySelector("#buttongroup");
    if (buttongroup) {
        buttongroup.style.display = "none";
    }
}
var getCardData = document.querySelector("#newCardBtn");
if (getCardData) {
    getCardData.addEventListener("click", getNewCardData());
}
