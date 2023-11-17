"use strict";
exports.__esModule = true;
exports.nextCard = exports.isDone = exports.getCurrentCard = void 0;
var cards = [
    {
        front: "Hello",
        back: "שלום"
    },
    {
        front: "World",
        back: "עולם"
    },
    {
        front: "Card",
        back: "קלף"
    },
    {
        front: "Repetition",
        back: "חזרה"
    },
    {
        front: "Software",
        back: "תוכנה"
    },
];
var currentCardIndex = 0;
function getCurrentCard() {
    return cards[currentCardIndex];
}
exports.getCurrentCard = getCurrentCard;
function isDone() {
    return currentCardIndex === cards.length - 1;
}
exports.isDone = isDone;
function nextCard() {
    if (isDone()) {
        throw new Error("Review is done.");
    }
    currentCardIndex++;
}
exports.nextCard = nextCard;
