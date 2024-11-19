import { FruitAmount, SetFruitAmount,  FruitPerSecondFunction, Prices, TextUpdates } from "./script.js"

const ClickSound = new Audio('Audio/click.mp3')
const Shop = document.querySelectorAll('.Shop')
const ShopContainer = document.getElementById('ShopContainer')

Shop.forEach(button => {
    button.addEventListener('click', () => {
        const FruitValue = parseInt((button as HTMLButtonElement).value)
        TextUpdates()
        PurchaseFruitPerSecond(FruitValue)
    })
})


function PurchaseFruitPerSecond(FruitValue: number) {
    ClickSound.play()
    let FruitPerSecond = FruitPerSecondFunction()
    if (FruitAmount > FruitValue) {
        SetFruitAmount(FruitAmount - FruitValue, FruitPerSecond += FruitValue)
    }
}


ShopContainer?.addEventListener('click', () => {
    const ClickedButton = event?.target as HTMLElement
    const Value = Number(ClickedButton.dataset.array)

if (ClickedButton.dataset.category === "Shop") {
    console.log(Prices.Shop[Value].FruitPerSecond)
}

if (ClickedButton.dataset.category === "ShopUpgrades") {
    console.log(Prices.ShopUpgrades[Value].FruitFromClick)
}

if (ClickedButton.dataset.category === "ShopPotions") {
    console.log(Prices.ShopPotions[Value].FruitMultiplier)
}

if (ClickedButton.dataset.category === "Prestige") {
    console.log(Prices.PrestigeShop[Value].FruitPerSecondMultiplier)
}

})





export function UpdateButtonStatus() {
    const Buttons = document.querySelectorAll('button')

    // turns buttons to be disabled if you dont have enough fruit
    Buttons.forEach(button => {
        const ButtonValue = Number(button.value)
        if (FruitAmount < ButtonValue) {
            button.disabled = true
        } else {
            button.disabled = false
        }
    })
}