import { formatter } from './format.js'
import { Prices } from './types.js'

const Fruit = document.getElementById('Fruit') as HTMLElement
const FruitAmountElement = document.getElementById('FruitAmountElement') as HTMLElement
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement') as HTMLElement
const OnePerSecond = document.getElementById('OnePerSecond') as HTMLElement
const ThreePerSecond = document.getElementById('ThreePerSecond') as HTMLElement
const FivePerSecond = document.getElementById('FivePerSecond') as HTMLElement
const TenPerSecond = document.getElementById('TenPerSecond') as HTMLElement
const FifteenPerSecond = document.getElementById('FifteenPerSecond') as HTMLElement
const ResetProgress = document.getElementById('ResetProgress') as HTMLElement

export let FruitAmount: number = Number(localStorage.getItem("FruitAmount"))
let PriceIncrease: number = 1 // starting amount
let ClickMultiplier: number = 1 // starting amount
let FruitIncrease: number = 1
export let FruitPerSecond: number = Number(localStorage.getItem("FruitPerSecond"))

// type ShopItem = {
    //     Fruit: number
    //     Price: number
    // }
    
    // type Prices = {
        //     Shop: ShopItem[]
        //     Upgrades: ShopItem[]
        // }
        

TextUpdates()
        

export function TextUpdates () {
    localStorage.setItem("FruitAmount", FruitAmount.toString())
    localStorage.setItem("FruitPerSecond", FruitPerSecond.toString())

    OnePerSecond.textContent = `+${formatter(Number(Prices.Shop[0].FruitPerSecond?.toFixed(2)))} Fruit Per Second: ${formatter(Number(Prices.Shop[0].Price?.toFixed(2)))} Fruit`
    ThreePerSecond.textContent = `+${formatter(Number(Prices.Shop[1].FruitPerSecond?.toFixed(2)))} Fruit Per Second: ${formatter(Number(Prices.Shop[1].Price?.toFixed(2)))} Fruit`
    FivePerSecond.textContent = `+${formatter(Number(Prices.Shop[2].FruitPerSecond?.toFixed(2)))} Fruit Per Second: ${formatter(Number(Prices.Shop[2].Price?.toFixed(2)))} Fruit`
    TenPerSecond.textContent = `+${formatter(Number(Prices.Shop[3].FruitPerSecond?.toFixed(2)))} Fruit Per Second: ${formatter(Number(Prices.Shop[3].Price?.toFixed(2)))} Fruit`
    FifteenPerSecond.textContent = `+${formatter(Number(Prices.Shop[4].FruitPerSecond?.toFixed(2)))} Fruit Per Second: ${formatter(Number(Prices.Shop[4].Price?.toFixed(2)))} Fruit`
    DisplayFruit()
}



// update fruit amount
function DisplayFruit () {
    if (FruitAmount >= Infinity) {
        FruitAmountElement.textContent = `Fruit Amount: ${FruitAmount}`
    } else {
        FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`
    }

    if (FruitPerSecond >= Infinity) {
        FruitPerSecondElement.textContent = `${FruitPerSecond} Fruit Per Second`
    } else {
        FruitPerSecondElement.textContent = `${formatter(Number(FruitPerSecond.toFixed(5)))} Fruit Per Second`
    }
}



export function SetFruitAmount (NewAmount: number, NewFruitPerSecond: number) {
    FruitAmount = NewAmount
    FruitPerSecond += NewFruitPerSecond
}



// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 1 * ClickMultiplier
    TextUpdates()
})


// adds to your fruit count every second
function IncrementFruit() {
    FruitAmount += FruitPerSecond
    TextUpdates()
}
setInterval(IncrementFruit, 1000)



// resets progress
ResetProgress.addEventListener('dblclick', () => {
    localStorage.clear()
    FruitAmount = 0
    FruitPerSecond = 1
    TextUpdates()
})