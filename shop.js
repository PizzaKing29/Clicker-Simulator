import { GetFruitAmount } from "./script"
const ClickSound = new Audio('Audio/click.mp3')

export function PurchaseFruitPerSecond(FruitValue) {
    console.log(FruitValue)
    ClickSound.play()
}


export function PurchaseUpgrades(FruitValue) {
    
}


export function PurchasePotions(FruitValue) {

}


export function UpdateButtonStatus() {
    const Buttons = document.querySelectorAll('button')
    const FruitAmount = GetFruitAmount()

    Buttons.forEach(button => {
        const ButtonValue = Number(button.value)
        if (FruitAmount < ButtonValue) {
            button.disabled = true
        } else {
            button.disabled = false
        }
    })
}
