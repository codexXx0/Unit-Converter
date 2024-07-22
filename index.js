/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let h4El = document.querySelectorAll("#h4")

function strict(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max
        }
    }
}

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-el").click();
    }
}
)

btnEl.addEventListener("click" , function() {

    let inputElValue = inputEl.value
    let inputElValueOne = inputElValue * 3.281 
    let inputElValueOnee = inputElValue / 3.281

    let inputElValueTwo = inputElValue * 0.264
    let inputElValueTwoo = inputElValue / 0.264

    let inputElValueThree = inputElValue * 2.204
    let inputElValueThreee = inputElValue / 2.204


    if (inputElValue < 0 ) {
        let inputElValue = 0 
        let inputElValueOne = inputElValue * 3.281 
        let inputElValueOnee = inputElValue / 3.281
    
        let inputElValueTwo = inputElValue * 0.264
        let inputElValueTwoo = inputElValue / 0.264
    
        let inputElValueThree = inputElValue * 2.204
        let inputElValueThreee = inputElValue / 2.204

        h4El[0].textContent = `${inputElValue} meter = ${inputElValueOne.toFixed(4)} feet | ${inputElValue} feet = ${inputElValueOnee.toFixed(4)} meter  ` 
        h4El[1].textContent = `${inputElValue} liter = ${inputElValueTwo.toFixed(4) } gallon | ${inputElValue} gallon = ${inputElValueTwoo.toFixed(4)} liter  `
        h4El[2].textContent = `${inputElValue} kilo = ${inputElValueThree.toFixed(4) } pound | ${inputElValue} pound = ${inputElValueThreee.toFixed(4)} kilo  `    
    } else if (inputElValue > 999999) {
        let inputElValue = 9999
        let inputElValueOne = inputElValue * 3.281 
        let inputElValueOnee = inputElValue / 3.281
    
        let inputElValueTwo = inputElValue * 0.264
        let inputElValueTwoo = inputElValue / 0.264
    
        let inputElValueThree = inputElValue * 2.204
        let inputElValueThreee = inputElValue / 2.204
    
        h4El[0].textContent = `${inputElValue} meter = ${inputElValueOne.toFixed(4)} feet | ${inputElValue} feet = ${inputElValueOnee.toFixed(4)} meter  ` 
        h4El[1].textContent = `${inputElValue} liter = ${inputElValueTwo.toFixed(4) } gallon | ${inputElValue} gallon = ${inputElValueTwoo.toFixed(4)} liter  `
        h4El[2].textContent = `${inputElValue} kilo = ${inputElValueThree.toFixed(4) } pound | ${inputElValue} pound = ${inputElValueThreee.toFixed(4)} kilo  `
    } else {
        h4El[0].textContent = `${inputElValue} meter = ${inputElValueOne.toFixed(4)} feet | ${inputElValue} feet = ${inputElValueOnee.toFixed(4)} meter  ` 
        h4El[1].textContent = `${inputElValue} liter = ${inputElValueTwo.toFixed(4) } gallon | ${inputElValue} gallon = ${inputElValueTwoo.toFixed(4)} liter  `
        h4El[2].textContent = `${inputElValue} kilo = ${inputElValueThree.toFixed(4) } pound | ${inputElValue} pound = ${inputElValueThreee.toFixed(4)} kilo  `
    }
})

