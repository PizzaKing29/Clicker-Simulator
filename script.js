import { formatter } from './format.js'
import { UpdateButtonStatus } from './shop.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement')
let FruitAmount = 0
let PriceIncrease = 1 // starting amount
let ClickMultiplier = 1 // starting amount
let FruitPerSecond = 1



// update fruit amount
function DisplayFruit () {
    FruitAmountElement.innerHTML = `<h2>Fruit Amount: ${formatter(FruitAmount)}</h2>`
    FruitPerSecondElement.innerHTML = `<h3>${FruitPerSecond} Fruit Per Second</h3>`
}

export function getFruitAmount () {
    return FruitAmount
}


// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 500*(ClickMultiplier)
    DisplayFruit()
})


function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
}

setInterval(IncrementFruit, 1000)