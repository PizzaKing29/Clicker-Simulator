"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitPerSecond = exports.FruitAmount = void 0;
exports.SetFruitAmount = SetFruitAmount;
exports.GetFruitAmount = GetFruitAmount;
exports.GetFruitPerSecond = GetFruitPerSecond;
var format_js_1 = require("./javascript/format.js");
var shop_ts_1 = require("./typescript/shop.ts");
var Fruit = document.getElementById('Fruit');
var FruitAmountElement = document.getElementById('FruitAmountElement');
var FruitPerSecondElement = document.getElementById('FruitPerSecondElement');
var OnePerSecond = document.getElementById('OnePerSecond');
var ThreePerSecond = document.getElementById('ThreePerSecond');
var FivePerSecond = document.getElementById('FivePerSecond');
var TenPerSecond = document.getElementById('TenPerSecond');
exports.FruitAmount = 0;
var PriceIncrease = 1; // starting amount
var ClickMultiplier = 1; // starting amount
exports.FruitPerSecond = 1;
// update fruit amount
function DisplayFruit() {
    FruitAmountElement.textContent = "Fruit Amount: ".concat((0, format_js_1.formatter)(exports.FruitAmount));
    FruitPerSecondElement.textContent = "".concat((0, format_js_1.formatter)(exports.FruitPerSecond), " Fruit Per Second");
}
function DisplayShop() {
    OnePerSecond.textContent = "+1 Fruit Per Second:  Fruit";
}
function SetFruitAmount(NewAmount, NewFruitPerSecond) {
    exports.FruitAmount = NewAmount;
    exports.FruitPerSecond = NewFruitPerSecond;
    DisplayFruit();
    (0, shop_ts_1.UpdateButtonStatus)();
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
Fruit.addEventListener('click', function () {
    exports.FruitAmount += 1 * ClickMultiplier;
    DisplayFruit();
    DisplayShop();
});
function IncrementFruit() {
    exports.FruitAmount += exports.FruitPerSecond;
    DisplayFruit();
    (0, shop_ts_1.UpdateButtonStatus)();
    DisplayShop();
}
setInterval(IncrementFruit, 1000);
