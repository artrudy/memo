var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
(_a = document.querySelector("#returnToMenuBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    console.log("+");
    window.location.href = "index.html";
});
function createNewCard(card) {
    cardsCollection.push(__assign(__assign({}, card), { id: cardsCollection.length, feedback: 0 }));
}
