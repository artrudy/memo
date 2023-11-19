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
    return cardsCollection;
}
function displayCard(cardsCollection) {
    const front = document.querySelector("#front");
    if (cardsCollection.length > 0) {
        console.log(cardsCollection[0]);
    }
}
