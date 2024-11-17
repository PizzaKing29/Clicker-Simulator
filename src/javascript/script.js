import { formatter } from './format.js';
import { UpdateButtonStatus } from './shop.js';
const Fruit = document.getElementById('Fruit');
const FruitAmountElement = document.getElementById('FruitAmountElement');
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement');
const OnePerSecond = document.getElementById('OnePerSecond');
const ThreePerSecond = document.getElementById('ThreePerSecond');
const FivePerSecond = document.getElementById('FivePerSecond');
const TenPerSecond = document.getElementById('TenPerSecond');
export let FruitAmount = Number(localStorage.getItem("FruitAmount"));
let PriceIncrease = 1; // starting amount
let ClickMultiplier = 1; // starting amount
export let FruitPerSecond = 1;
// update fruit amount
function DisplayFruit() {
    FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`;
    FruitPerSecondElement.textContent = `${formatter(FruitPerSecond)} Fruit Per Second`;
}
DisplayFruit();
function DisplayShop() {
    OnePerSecond.textContent = `+1 Fruit Per Second:  Fruit`;
}
DisplayShop();
export function SetFruitAmount(NewAmount, NewFruitPerSecond) {
    FruitAmount = NewAmount;
    FruitPerSecond = NewFruitPerSecond;
    DisplayFruit();
    UpdateButtonStatus();
}
export function GetFruitAmount() {
    return FruitAmount;
}
export function GetFruitPerSecond() {
    return FruitPerSecond;
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
    localStorage.setItem("FruitAmount", FruitAmount.toString());
}
setInterval(IncrementFruit, 1000);
