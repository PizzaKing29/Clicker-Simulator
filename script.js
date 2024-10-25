const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const PurchaseDoubleClicks = document.getElementById('PurchaseDoubleClicks')
const x2Clicks = document.getElementById('x2Clicks')
let FruitAmount = 0
let ClickMultiplier = 1 // starting amount
let PriceIncrease = 1 // starting amount

// update fruit amount
function DisplayFruit () {
    FruitAmountElement.innerHTML = `<h2>Fruit Amount: ${FruitAmount}</h2>`
}

// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 1*(ClickMultiplier)
    DisplayFruit()
})


// purchasing items
PurchaseDoubleClicks.addEventListener('click', ()=> {
    let price = 15*PriceIncrease
    if (FruitAmount >= price*PriceIncrease) {
        ClickMultiplier += 1
        FruitAmount -= price
        price *= 1.5
        x2Clicks.innerHTML = `<p id="x2Clicks">x2 Clicks: ${price} Fruit</p>`
        DisplayFruit()
    }
})