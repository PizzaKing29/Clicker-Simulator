const ClickSound = new Audio('Audio/click.mp3')
window.PurchaseFruitPerSecond = PurchaseFruitPerSecond
window.PurchaseUpgrades = PurchaseUpgrades
window.PurchasePotions = PurchasePotions

export function PurchaseFruitPerSecond(FruitValue) {
    ClickSound.play()
    console.log()
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