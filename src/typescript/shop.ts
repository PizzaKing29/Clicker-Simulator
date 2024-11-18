import { GetFruitAmount, GetFruitPerSecond, SetFruitAmount, UpdateLocalStorage } from "./script.js"

const ClickSound = new Audio('Audio/click.mp3')
const Shop = document.querySelectorAll('.Shop')

Shop.forEach(button => {
    button.addEventListener('click', () => {
        const FruitValue = parseInt((button as HTMLButtonElement).value)
        UpdateLocalStorage()
        PurchaseFruitPerSecond(FruitValue)
    })
})


function PurchaseFruitPerSecond(FruitValue: number) {
    let FruitAmount = GetFruitAmount()
    let FruitPerSecond = GetFruitPerSecond()
    ClickSound.play()
    if (FruitAmount > FruitValue) {
        SetFruitAmount(FruitAmount - FruitValue, FruitPerSecond += FruitValue)
        console.log(FruitValue)
    }
}

export function PurchaseUpgrades(FruitValue: number) {
    
}


export function PurchasePotions(FruitValue: number) {

}


export function UpdateButtonStatus() {
    const Buttons = document.querySelectorAll('button')
    let FruitAmount = GetFruitAmount()

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