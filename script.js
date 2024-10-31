import { formatter } from './format.js'
import { UpdateButtonStatus } from './shop.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement')
const OnePerSecond = document.getElementById('OnePerSecond')
const ThreePerSecond = document.getElementById('ThreePerSecond')
const FivePerSecond = document.getElementById('FivePerSecond')
const TenPerSecond = document.getElementById('TenPerSecond')
export let FruitAmount = 0
let PriceIncrease = 1 // starting amount
let ClickMultiplier = 1 // starting amount
export let FruitPerSecond = 1

// update fruit amount
function DisplayFruit () {
    FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`
    FruitPerSecondElement.textContent = `${formatter(FruitPerSecond)} Fruit Per Second`
}

function DisplayShop () {
    OnePerSecond.textContent = `+1 Fruit Per Second:  Fruit`
}

export function SetFruitAmount (NewAmount, NewFruitPerSecond) {
    FruitAmount = NewAmount
    FruitPerSecond = NewFruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
}
window.SetFruitAmount = SetFruitAmount



export function GetFruitAmount () {
    return FruitAmount
}
window.GetFruitAmount = GetFruitAmount

export function GetFruitPerSecond () {
    return FruitPerSecond
}
window.GetFruitPerSecond = GetFruitPerSecond

// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 1 * ClickMultiplier
    DisplayFruit()
    DisplayShop()
})


function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
    DisplayShop()
}

setInterval(IncrementFruit, 1000)