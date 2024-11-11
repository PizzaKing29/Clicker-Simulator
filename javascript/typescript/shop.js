"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseFruitPerSecond = PurchaseFruitPerSecond;
exports.PurchaseUpgrades = PurchaseUpgrades;
exports.PurchasePotions = PurchasePotions;
exports.UpdateButtonStatus = UpdateButtonStatus;
var script_1 = require("../script");
var ClickSound = new Audio('Audio/click.mp3');
window.PurchaseFruitPerSecond = PurchaseFruitPerSecond;
window.PurchaseUpgrades = PurchaseUpgrades;
window.PurchasePotions = PurchasePotions;
function PurchaseFruitPerSecond(FruitValue) {
    var FruitAmount = (0, script_1.GetFruitAmount)();
    var FruitPerSecond = (0, script_1.GetFruitPerSecond)();
    ClickSound.play();
    if (FruitAmount > FruitValue) {
        (0, script_1.SetFruitAmount)(FruitAmount - FruitValue, FruitPerSecond += FruitValue);
        console.log();
    }
}
function PurchaseUpgrades(FruitValue) {
}
function PurchasePotions(FruitValue) {
}
function UpdateButtonStatus() {
    var Buttons = document.querySelectorAll('button');
    var FruitAmount = (0, script_1.GetFruitAmount)();
    Buttons.forEach(function (button) {
        var ButtonValue = Number(button.value);
        if (FruitAmount < ButtonValue) {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    });
}
