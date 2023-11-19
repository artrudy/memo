document.querySelector("#returnToMenuBtn")?.addEventListener("click", () => {
    console.log("+");
    window.location.href = "index.html";
});
export const cardsCollection = [];
export function createNewCard(card) {
    cardsCollection.push({
        ...card,
        id: cardsCollection.length,
        feedback: 0,
    });
}
