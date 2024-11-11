"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitPerSecond = exports.FruitAmount = void 0;
exports.SetFruitAmount = SetFruitAmount;
exports.GetFruitAmount = GetFruitAmount;
exports.GetFruitPerSecond = GetFruitPerSecond;
const format_js_1 = require("./typescript/format.js");
const shop_js_1 = require("./typescript/shop.js");
const Fruit = document.getElementById('Fruit');
const FruitAmountElement = document.getElementById('FruitAmountElement');
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement');
const OnePerSecond = document.getElementById('OnePerSecond');
const ThreePerSecond = document.getElementById('ThreePerSecond');
const FivePerSecond = document.getElementById('FivePerSecond');
const TenPerSecond = document.getElementById('TenPerSecond');
exports.FruitAmount = 0;
let PriceIncrease = 1; // starting amount
let ClickMultiplier = 1; // starting amount
exports.FruitPerSecond = 1;
// update fruit amount
function DisplayFruit() {
    FruitAmountElement.textContent = `Fruit Amount: ${(0, format_js_1.formatter)(exports.FruitAmount)}`;
    FruitPerSecondElement.textContent = `${(0, format_js_1.formatter)(exports.FruitPerSecond)} Fruit Per Second`;
}
function DisplayShop() {
    OnePerSecond.textContent = `+1 Fruit Per Second:  Fruit`;
}
function SetFruitAmount(NewAmount, NewFruitPerSecond) {
    exports.FruitAmount = NewAmount;
    exports.FruitPerSecond = NewFruitPerSecond;
    DisplayFruit();
    (0, shop_js_1.UpdateButtonStatus)();
}
window.SetFruitAmount = SetFruitAmount;
function GetFruitAmount() {
    return exports.FruitAmount;
}
window.GetFruitAmount = GetFruitAmount;
function GetFruitPerSecond() {
    return exports.FruitPerSecond;
}
window.GetFruitPerSecond = GetFruitPerSecond;
// clicking fruit system
Fruit.addEventListener('click', () => {
    exports.FruitAmount += 1 * ClickMultiplier;
    DisplayFruit();
    DisplayShop();
});
function IncrementFruit() {
    exports.FruitAmount += exports.FruitPerSecond;
    DisplayFruit();
    (0, shop_js_1.UpdateButtonStatus)();
    DisplayShop();
}
setInterval(IncrementFruit, 1000);
