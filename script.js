import { formatter } from './format.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement')
let FruitAmount = 0
let PriceIncrease = 1 // starting amount
let ClickMultiplier = 1 // starting amount
let FruitPerSecond = 1

PriceIncrease


// update fruit amount
function DisplayFruit () {
    FruitAmountElement.innerHTML = `<h2>Fruit Amount: ${formatter(FruitAmount)}</h2>`
    FruitPerSecondElement.innerHTML = `<h3>${FruitPerSecond} Fruit Per Second</h3>`
}



// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 500*(ClickMultiplier)
    DisplayFruit()
})


function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
}

setInterval(IncrementFruit, 1000)