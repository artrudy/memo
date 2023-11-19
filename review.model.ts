document.querySelector("#returnToMenuBtn")?.addEventListener("click", () => {
  console.log("+");
  window.location.href = "index.html";
});

export type Feedback = 0 | 1 | 2 | 3 | 4 | 5;

export type Card = {
  id: number;
  fronSide: string;
  backSide: string;
  feedback?: Feedback;
};

export type CardsCollection = Card[];

export const cardsCollection = [] as CardsCollection;

export function createNewCard(card: Omit<Card, "id" | "Feedback">) {
  cardsCollection.push({
    ...card,
    id: cardsCollection.length,
    feedback: 0,
  });
  return cardsCollection;
}

function displayCard(cardsCollection) {
  const front = document.querySelector("#front");

  if (cardsCollection.length > 0) {
    console.log(cardsCollection[0]);
  }
}
