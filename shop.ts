import { GetFruitAmount, GetFruitPerSecond, SetFruitAmount } from "./script"

const ClickSound = new Audio('Audio/click.mp3')
window.PurchaseFruitPerSecond = PurchaseFruitPerSecond
window.PurchaseUpgrades = PurchaseUpgrades
window.PurchasePotions = PurchasePotions

export function PurchaseFruitPerSecond(FruitValue) {
    let FruitAmount = GetFruitAmount()
    let FruitPerSecond = GetFruitPerSecond()
    ClickSound.play()
    if (FruitAmount > FruitValue) {
        SetFruitAmount(FruitAmount - FruitValue, FruitPerSecond += FruitValue)
        console.log()
    }
}

export function PurchaseUpgrades(FruitValue) {
    
}


export function PurchasePotions(FruitValue) {

}


export function UpdateButtonStatus() {
    const Buttons = document.querySelectorAll('button')
    let FruitAmount = GetFruitAmount()

    Buttons.forEach(button => {
        const ButtonValue = Number(button.value)
        if (FruitAmount < ButtonValue) {
            button.disabled = true
        } else {
            button.disabled = false
        }
    })
}