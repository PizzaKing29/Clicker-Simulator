import { formatter } from './format.js';
import { UpdateButtonStatus } from './shop.js';
const Fruit = document.getElementById('Fruit');
const FruitAmountElement = document.getElementById('FruitAmountElement');
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement');
const OnePerSecond = document.getElementById('OnePerSecond');
const ThreePerSecond = document.getElementById('ThreePerSecond');
const FivePerSecond = document.getElementById('FivePerSecond');
const TenPerSecond = document.getElementById('TenPerSecond');
const ResetProgress = document.getElementById('ResetProgress');
export let FruitAmount = Number(localStorage.getItem("FruitAmount"));
let PriceIncrease = 1; // starting amount
let ClickMultiplier = 1; // starting amount
let FruitIncrease = 1;
export let FruitPerSecond = Number(localStorage.getItem("FruitPerSecond"));
export function FruitPerSecondFunction() {
    return FruitPerSecond;
    // this function because of an import error, I cant reasign a value
}
// type ShopItem = {
//     Fruit: number
//     Price: number
// }
// type Prices = {
//     Shop: ShopItem[]
//     Upgrades: ShopItem[]
// }
export let Prices = {
    Shop: [
        { FruitPerSecond: 0.1, Price: 20 },
        { FruitPerSecond: 0.3, Price: 35 },
        { FruitPerSecond: 0.5, Price: 50 },
        { FruitPerSecond: 1, Price: 75 },
        { FruitPerSecond: 1.5, Price: 120 },
        { MegaFruit: 5, Price: 1500 }
    ],
    ShopUpgrades: [
        { FruitFromClick: 2, Price: 100 },
        { FruitFromClick: 5, Price: 300 },
        { FruitFromClick: 10, Price: 900 },
        { FruitFromClick: 15, Price: 2000 },
    ],
    ShopPotions: [
        { FruitMultiplier: 1.5, Price: 15000, Minutes: 5 },
        { FruitMultiplier: 5, Price: 45000, Minutes: 20 }
    ],
    PrestigeShop: [
        { FruitPerSecondMultiplier: 1.25, Price: 1e9 }
    ]
};
UpdateLocalStorage();
DisplayFruit();
DisplayShop();
// update fruit amount
function DisplayFruit() {
    if (FruitAmount >= Infinity) {
        FruitAmountElement.textContent = `Fruit Amount: ${FruitAmount}`;
    }
    else {
        FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`;
    }
    if (FruitPerSecond >= Infinity) {
        FruitPerSecondElement.textContent = `${FruitPerSecond} Fruit Per Second`;
    }
    else {
        FruitPerSecondElement.textContent = `${formatter(FruitPerSecond)} Fruit Per Second`;
    }
}
function DisplayShop() {
    OnePerSecond.textContent = `+${false} Fruit Per Second: ${false} Fruit`;
}
export function SetFruitAmount(NewAmount, NewFruitPerSecond) {
    FruitAmount = NewAmount;
    FruitPerSecond = NewFruitPerSecond;
    DisplayFruit();
    UpdateButtonStatus();
}
// clicking fruit system
Fruit.addEventListener('click', () => {
    FruitAmount += 1 * ClickMultiplier;
    DisplayFruit();
    DisplayShop();
});
// adds to your fruit count every second
function IncrementFruit() {
    FruitAmount += FruitPerSecond;
    DisplayFruit();
    UpdateButtonStatus();
    DisplayShop();
    UpdateLocalStorage();
}
setInterval(IncrementFruit, 1000);
export function UpdateLocalStorage() {
    localStorage.setItem("FruitAmount", FruitAmount.toString());
    localStorage.setItem("FruitPerSecond", FruitPerSecond.toString());
}
// resets progress
ResetProgress.addEventListener('dblclick', () => {
    localStorage.clear();
    FruitAmount = 0;
    FruitPerSecond = 1;
    DisplayFruit();
    UpdateButtonStatus();
    DisplayShop();
    UpdateLocalStorage();
});
