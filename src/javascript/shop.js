"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseFruitPerSecond = PurchaseFruitPerSecond;
exports.PurchaseUpgrades = PurchaseUpgrades;
exports.PurchasePotions = PurchasePotions;
exports.UpdateButtonStatus = UpdateButtonStatus;
const script_1 = require("../script");
const ClickSound = new Audio('Audio/click.mp3');
function PurchaseFruitPerSecond(FruitValue) {
    let FruitAmount = (0, script_1.GetFruitAmount)();
    let FruitPerSecond = (0, script_1.GetFruitPerSecond)();
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
    const Buttons = document.querySelectorAll('button');
    let FruitAmount = (0, script_1.GetFruitAmount)();
    Buttons.forEach(button => {
        const ButtonValue = Number(button.value);
        if (FruitAmount < ButtonValue) {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    });
}
