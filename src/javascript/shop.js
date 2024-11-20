import { FruitAmount, SetFruitAmount, FruitPerSecondFunction, Prices, TextUpdates } from "./script.js";
const ClickSound = new Audio('Audio/click.mp3');
const Shop = document.querySelectorAll('.Shop');
const ShopContainer = document.getElementById('ShopContainer');
Shop.forEach(button => {
    button.addEventListener('click', () => {
        const FruitValue = parseInt(button.value);
        TextUpdates();
        PurchaseFruitPerSecond(FruitValue);
    });
});
function PurchaseFruitPerSecond(FruitValue) {
    ClickSound.play();
    let FruitPerSecond = FruitPerSecondFunction();
    if (FruitAmount > FruitValue) {
        SetFruitAmount(FruitAmount - FruitValue, FruitPerSecond += FruitValue);
    }
}
ShopContainer?.addEventListener('click', () => {
    const ClickedButton = event?.target;
    const Category = ClickedButton.dataset.category;
    const Value = Number(ClickedButton.dataset.array);
    const ShopItem = Prices.Shop[Value];
    const ShopUpgrades = Prices.ShopUpgrades[Value];
    const ShopPotions = Prices.ShopPotions[Value];
    const PrestigeShop = Prices.PrestigeShop[Value];
    if (Category === "Shop" && FruitAmount > ShopItem.Price) {
        SetFruitAmount(FruitAmount - ShopItem.Price, ShopItem.FruitPerSecond ?? 0);
    }
    if (Category === "ShopUpgrades") {
        console.log(ShopUpgrades.FruitFromClick);
    }
    if (Category === "ShopPotions") {
        console.log(ShopPotions.FruitMultiplier);
    }
    if (Category === "Prestige") {
        console.log(PrestigeShop.FruitPerSecondMultiplier);
    }
});
export function UpdateButtonStatus() {
    const Buttons = document.querySelectorAll('button');
    // turns buttons to be disabled if you dont have enough fruit
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
