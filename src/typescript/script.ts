import { formatter } from './format.js'
import { UpdateButtonStatus } from './shop.js'


const Fruit = document.getElementById('Fruit') as HTMLElement
const FruitAmountElement = document.getElementById('FruitAmountElement') as HTMLElement
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement') as HTMLElement
const OnePerSecond = document.getElementById('OnePerSecond') as HTMLElement
const ThreePerSecond = document.getElementById('ThreePerSecond') as HTMLElement
const FivePerSecond = document.getElementById('FivePerSecond') as HTMLElement
const TenPerSecond = document.getElementById('TenPerSecond') as HTMLElement
const ResetProgress = document.getElementById('ResetProgress') as HTMLElement


export let FruitAmount: number = Number(localStorage.getItem("FruitAmount"))
let PriceIncrease: number = 1 // starting amount
let ClickMultiplier: number = 1 // starting amount
export let FruitPerSecond: number = Number(localStorage.getItem("FruitPerSecond"))

UpdateLocalStorage()

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
        FruitPerSecondElement.textContent = `${formatter(FruitPerSecond)} Fruit Per Second`
    }
}
DisplayFruit()

function DisplayShop () {
    OnePerSecond.textContent = `+1 Fruit Per Second:  Fruit`
}
DisplayShop()

export function SetFruitAmount (NewAmount: number, NewFruitPerSecond: number) {
    FruitAmount = NewAmount
    FruitPerSecond = NewFruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
}




export function GetFruitAmount () {
    return FruitAmount
}



export function GetFruitPerSecond () {
    return FruitPerSecond
}


// clicking fruit system
Fruit.addEventListener('click', ()=> {
    FruitAmount += 1 * ClickMultiplier
    DisplayFruit()
    DisplayShop()
})


// adds to your fruit count every second
function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
    DisplayShop()
    UpdateLocalStorage()
}

setInterval(IncrementFruit, 1000)

export function UpdateLocalStorage () {
    localStorage.setItem("FruitAmount", FruitAmount.toString())
    localStorage.setItem("FruitPerSecond", FruitPerSecond.toString())
}

ResetProgress.addEventListener('dblclick', () => {
    localStorage.clear()
    FruitAmount = 0
    FruitPerSecond = 1
    DisplayFruit()
    UpdateButtonStatus()
    DisplayShop()
    UpdateLocalStorage()
})