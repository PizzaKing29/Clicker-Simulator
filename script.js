import { formatter } from './format.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
export let FruitAmount = 0
let PriceIncrease = 1 // starting amount
export let ClickMultiplier = 1 // starting amount
PriceIncrease

// update fruit amount
function DisplayFruit () {
    FruitAmountElement.innerHTML = `<h2>Fruit Amount: ${formatter(FruitAmount)}</h2>`
}

// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 500*(ClickMultiplier)
    DisplayFruit()
})
