document.querySelector("#returnToMenuBtn")?.addEventListener("click", () => {
  console.log("+");
  window.location.href = "index.html";
});

type Feedback = 0 | 1 | 2 | 3 | 4 | 5;

type Card = {
  id: number;
  fronSide: string;
  backSide: string;
  feedback?: Feedback;
};

type CardsCollection = Card[];

function createNewCard(card: Omit<Card, "id" | "Feedback">) {
  cardsCollection.push({
    ...card,
    id: cardsCollection.length,
    feedback: 0,
  });
}
