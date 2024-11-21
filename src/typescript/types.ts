type Prices = {
    Shop: ShopItem[]
    ShopUpgrades: ShopUpgrades[]
    ShopPotions: ShopPotions[]
    PrestigeShop: PrestigeShop[]
}

type ShopItem =
    |{ FruitPerSecond: number, Price: number }
    |{ MegaFruit: number, Price: number }

type ShopUpgrades = {
    FruitFromClick: number
    Price: number
}

type ShopPotions = {
    FruitMultiplier: number
    Price: number
    Minutes: number
}

type PrestigeShop = {
    FruitPerSecondMultiplier: number
    Price: number
}

export let Prices: Prices = {
    Shop: [
        {FruitPerSecond: 0.1, Price: 20},
        {FruitPerSecond: 0.3, Price: 35},
        {FruitPerSecond: 0.5, Price: 50},
        {FruitPerSecond: 1, Price: 75},
        {FruitPerSecond: 1.5, Price: 120},
        {MegaFruit: 5, Price: 1500}
    ],
            
    ShopUpgrades: [
        {FruitFromClick: 2, Price: 100},
        {FruitFromClick: 5, Price: 300},
        {FruitFromClick: 10, Price: 900},
        {FruitFromClick: 15, Price: 2000},
    ],
            
    ShopPotions: [
        {FruitMultiplier: 1.5, Price: 15000, Minutes: 5},
        {FruitMultiplier: 5, Price: 45000, Minutes: 20}
    ],
            
    PrestigeShop: [
        {FruitPerSecondMultiplier: 1.25, Price: 1e9}
    ]
}