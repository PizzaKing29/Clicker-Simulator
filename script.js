import { formatter } from './format.js'
import { UpdateButtonStatus } from './shop.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement')
export let FruitAmount = 0
let PriceIncrease = 1 // starting amount
let ClickMultiplier = 1 // starting amount
let FruitPerSecond = 1


// update fruit amount
function DisplayFruit () {
    FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`
    FruitPerSecondElement.textContent = `${FruitPerSecond} Fruit Per Second`
}

function GetFruitAmount () {
    return FruitAmount
}
window.GetFruitAmount = GetFruitAmount

// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 500 * ClickMultiplier
    DisplayFruit()
})


function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
}

setInterval(IncrementFruit, 1000)