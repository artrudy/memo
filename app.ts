// [x] array of cards
// [x] card has front and back
// [x] display first card
// [x] let the user flip
// [x] let the user continue to next card
// [x] when all cards reviewed show done message
// [x] next card always show front first
// [ ] feedback after card was flipped

document.querySelector("#startPracticingBtn")?.addEventListener("click", () => {
  window.location.href = "review.html";
});

document
  .querySelector("#newCardBtn")
  ?.addEventListener("click", getNewCardData());

function getNewCardData() {
  const newCardFormHeader = document.createElement("div");

  const newCardForm = document.createElement("form");
  newCardForm.id = "newForm";
  newCardForm.className = "forms";

  const fronSideInput = document.createElement("input");
  fronSideInput.type = "text";
  fronSideInput.name = "fron side";
  fronSideInput.placeholder = "front side of the car";

  newCardFormHeader.appendChild(newCardForm);
  newCardForm.appendChild(fronSideInput);

  document.querySelector("#mainMenu")?.appendChild(newCardFormHeader);
}
