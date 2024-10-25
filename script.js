const Fruit = document.getElementById('Fruit')
const FruitAmountElement = document.getElementById('FruitAmountElement')
const PurchaseDoubleClicks = document.getElementById('PurchaseDoubleClicks')
let FruitAmount = 0
let ClickMultiplier = 1

function DisplayFruit () {
    FruitAmountElement.innerHTML = <h2>Fruit Amount: ${FruitAmount}</h2>
}

Fruit.addEventListener('click', ()=> {
    FruitAmount += 1*(ClickMultiplier)
    DisplayFruit()
})

PurchaseDoubleClicks.addEventListener('click', ()=> {
    if (FruitAmount >= 50) {
        ClickMultiplier += 2
        FruitAmount - 50
        DisplayFruit()
    }
})