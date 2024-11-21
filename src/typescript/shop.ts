import { FruitAmount, SetFruitAmount, TextUpdates } from "./script.js"
import { Prices } from './types.js'

const ClickSound = new Audio('Audio/click.mp3')
const Shop = document.querySelectorAll('.Shop')
const ShopContainer = document.getElementById('ShopContainer')




ShopContainer?.addEventListener('click', () => {
    const ClickedButton = event?.target as HTMLElement
    const Category = ClickedButton.dataset.category
    const Value = Number(ClickedButton.dataset.array)
    const ShopItem = Prices.Shop[Value]
    const ShopUpgrades = Prices.ShopUpgrades[Value]
    const ShopPotions = Prices.ShopPotions[Value]
    const PrestigeShop = Prices.PrestigeShop[Value]
    TextUpdates()
    

    if (Category === "Shop" && FruitAmount > ShopItem.Price) {
        SetFruitAmount(FruitAmount - ShopItem.Price, ShopItem.FruitPerSecond ?? 0)
        ShopItem.FruitPerSecond *= 1.25
        ShopItem.Price *= 1.25
        ClickSound.play()
    }

    if (Category === "ShopUpgrades") {
        console.log(ShopUpgrades.FruitFromClick)
        ClickSound.play()
    }

    if (Category === "ShopPotions") {
        console.log(ShopPotions.FruitMultiplier)
        ClickSound.play()
    }

    if (Category === "Prestige") {
        console.log(PrestigeShop.FruitPerSecondMultiplier)
        ClickSound.play()
    }

})

function Buttons () {
    const Buttons = document.querySelectorAll('button')
    Buttons.forEach(button => {
        if (FruitAmount < 5) {
            button.disabled = true
        } else {
            button.disabled = false
        }
    })
} setInterval(Buttons, 1000)