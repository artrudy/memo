// [x] array of cards
// [x] card has front and back
// [x] display first card
// [x] let the user flip
// [x] let the user continue to next card
// [x] when all cards reviewed show done message
// [x] next card always show front first
// [ ] feedback after card was flipped
import { createNewCard } from "./review.model.js";
import { cardsCollection } from "./review.model.js";
document.querySelector("#startPracticingBtn")?.addEventListener("click", () => {
    window.location.href = "review.html";
});
const getCardData = document.querySelector("#newCardBtn");
if (getCardData) {
    getCardData.addEventListener("click", () => {
        const buttongroup = document.querySelector("#buttongroup");
        if (buttongroup) {
            buttongroup.style.display = "none";
        }
        const newCardFormHeader = document.createElement("div");
        newCardFormHeader.innerText = "New card";
        newCardFormHeader.id = "newCardFormHeaderId";
        const emptyDiv = document.createElement("div");
        const newCardForm = document.createElement("form");
        newCardForm.id = "newForm";
        newCardForm.className = "forms";
        const fronSideInput = document.createElement("input");
        fronSideInput.type = "text";
        fronSideInput.name = "frontside";
        fronSideInput.placeholder = "front side of the card";
        const backSideInput = document.createElement("input");
        backSideInput.type = "text";
        backSideInput.name = "backside";
        backSideInput.placeholder = "back side of the card";
        newCardFormHeader.appendChild(emptyDiv);
        newCardFormHeader.appendChild(newCardForm);
        newCardFormHeader.appendChild(emptyDiv);
        newCardForm.appendChild(fronSideInput);
        newCardFormHeader.appendChild(emptyDiv);
        newCardForm.appendChild(backSideInput);
        newCardFormHeader.appendChild(emptyDiv);
        document.querySelector("#mainMenu")?.appendChild(newCardFormHeader);
        const subitNewCardBtn = document.createElement("button");
        subitNewCardBtn.id = "subitNewCardBtnId";
        subitNewCardBtn.classList.add("buttons");
        subitNewCardBtn.innerText = "Sunbmit new card.";
        newCardFormHeader.appendChild(subitNewCardBtn);
        subitNewCardBtn.addEventListener("click", () => {
            newCardFormHeader.style.display = "none";
            buttongroup.style.display = "flex";
            const formData = new FormData(newCardForm);
            const cardDataFromForm = {
                id: 0,
                fronSide: formData.get("frontside"),
                backSide: formData.get("backside"),
            };
            console.log(cardDataFromForm);
            createNewCard(cardDataFromForm);
            console.log(cardsCollection);
        });
    });
}
