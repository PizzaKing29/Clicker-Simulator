import { formatter } from './format.js'
import { ClickMultiplier } from './shop.js'

const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
export let FruitAmount = 0

// update fruit amount
function DisplayFruit () {
    FruitAmountElement.innerHTML = `<h2>Fruit Amount: ${formatter(FruitAmount)}</h2>`
}

// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 500*(ClickMultiplier)
    DisplayFruit()
})
