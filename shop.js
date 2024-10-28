import { FruitAmount } from "./script.js"
const PurchaseDoubleClicks = document.getElementById('PurchaseDoubleClicks')
const x2Clicks = document.getElementById('x2Clicks')
const Purchase = document.querySelectorAll('.Purchase')
let PriceIncrease = 1 // starting amount
export let ClickMultiplier = 1 // starting amount


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



Purchase.forEach(Purchase => {
    Purchase.addEventListener('click', ()=> {
        console.log("test")
    })
})