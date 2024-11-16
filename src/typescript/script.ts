import { formatter } from './format.js'
import { UpdateButtonStatus } from './shop.js'

const Fruit = document.getElementById('Fruit') as HTMLElement
const FruitAmountElement = document.getElementById('FruitAmountElement') as HTMLElement
const FruitPerSecondElement = document.getElementById('FruitPerSecondElement') as HTMLElement
const OnePerSecond = document.getElementById('OnePerSecond') as HTMLElement
const ThreePerSecond = document.getElementById('ThreePerSecond') as HTMLElement
const FivePerSecond = document.getElementById('FivePerSecond') as HTMLElement
const TenPerSecond = document.getElementById('TenPerSecond') as HTMLElement

export let FruitAmount: number = 0
let PriceIncrease: number = 1 // starting amount
let ClickMultiplier: number = 1 // starting amount
export let FruitPerSecond: number = 1

// update fruit amount
function DisplayFruit () {
    FruitAmountElement.textContent = `Fruit Amount: ${formatter(FruitAmount)}`
    FruitPerSecondElement.textContent = `${formatter(FruitPerSecond)} Fruit Per Second`
}

function DisplayShop () {
    OnePerSecond.textContent = `+1 Fruit Per Second:  Fruit`
}

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


function IncrementFruit() {
    FruitAmount += FruitPerSecond
    DisplayFruit()
    UpdateButtonStatus()
    DisplayShop()
}

setInterval(IncrementFruit, 1000)