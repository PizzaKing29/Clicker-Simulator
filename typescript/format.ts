export function formatter (number: number) {

    if (number < 1000) return Math.round(number)

    const match = [
        {value: 1e3, Symbol: "K"},
        {value: 1e6, Symbol: "Million"},
        {value: 1e9, Symbol: "Billion"},
        {value: 1e12, Symbol: "Trillion"},
        {value: 1e15, Symbol: "Quadrillion"},
        {value: 1e18, Symbol: "Quintillion"},
        {value: 1e21, Symbol: "Sextillion"},
        {value: 1e24, Symbol: "Septillion"},
        {value: 1e27, Symbol: "Octillion"},
        {value: 1e30, Symbol: "Nonillion"},
        {value: 1e33, Symbol: "Decillion"},
        {value: 1e36, Symbol: "Undecillion"},
        {value: 1e39, Symbol: "Duodecillion"},
        {value: 1e42, Symbol: "Tredecillion"},
        {value: 1e45, Symbol: "Quattuordecillion"},
        {value: 1e48, Symbol: "Quindecillion"},
        {value: 1e51, Symbol: "Sexdecillion"},
        {value: 1e54, Symbol: "Septendecillion"},
        {value: 1e57, Symbol: "Octodecillion"},
        {value: 1e60, Symbol: "Novemdecillion"},
        {value: 1e63, Symbol: "Vigintillion"},
        {value: 1e66, Symbol: "Unvigintillion"},
        {value: 1e69, Symbol: "Duovigintillion"},
        {value: 1e72, Symbol: "Tresvigintillion "},
        {value: 1e75, Symbol: "Quattuorvigintillion"},
        {value: 1e78, Symbol: "Quinvigintillion"},
        {value: 1e81, Symbol: "Sexvigintillion "},
        {value: 1e84, Symbol: "Septenvigintillion"},
        {value: 1e87, Symbol: "Octovigintillion"},
        {value: 1e90, Symbol: "Novenvigintillion"},
        {value: 1e93, Symbol: "Trigintillion"}
    ]

    let item = match.findLast(function(object){
        return number >= object.value
    })

    if(!item) {
        return "Number isnt in the list"
    }

    return (number / item.value).toFixed(2) + item.Symbol

}