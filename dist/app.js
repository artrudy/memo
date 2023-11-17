"use strict";
// [x] array of cards
// [x] card has front and back
// [x] display first card
// [x] let the user flip
// [x] let the user continue to next card
// [x] when all cards reviewed show done message
// [x] next card always show front first
// [ ] feedback after card was flipped
var _a, _b;
exports.__esModule = true;
var review_model_js_1 = require("./review.model.js");
function displayCurrentCard() {
    var _a;
    var currentCard = review_model_js_1.getCurrentCard();
    (_a = document.querySelector("#currentCard")) === null || _a === void 0 ? void 0 : _a.classList.remove("card--flipped");
    document.querySelector("#currentCard .card__front").textContent =
        currentCard.front;
    document.querySelector("#currentCard .card__back").textContent =
        currentCard.back;
}
(_a = document.querySelector("#btnFlip")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    (_a = document.querySelector("#currentCard")) === null || _a === void 0 ? void 0 : _a.classList.toggle("card--flipped");
});
(_b = document.querySelector("#btnNextCard")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    if (review_model_js_1.isDone()) {
        document.querySelector("#reviewZone").innerHTML = "<h2>All done!</h2>";
        return;
    }
    review_model_js_1.nextCard();
    displayCurrentCard();
});
displayCurrentCard();
