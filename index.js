/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let h4El = document.querySelectorAll("#h4")



btnEl.addEventListener("click" , function() {

    let inputElValue = inputEl.value
    let inputElValueOne = inputEl.value * 3.281 
    let inputElValueOnee = inputEl.value / 3.281

    let inputElValueTwo = inputEl.value * 0.264
    let inputElValueTwoo = inputEl.value / 0.264

    let inputElValueThree = inputEl.value * 2.204
    let inputElValueThreee = inputEl.value / 2.204


    h4El[0].textContent = `${inputElValue} meter = ${inputElValueOne.toFixed(4)} feet | ${inputElValue} feet = ${inputElValueOnee.toFixed(4)} meter  ` 
    h4El[1].textContent = `${inputElValue} liter = ${inputElValueTwo.toFixed(4) } gallon | ${inputElValue} gallon = ${inputElValueTwoo.toFixed(4)} liter  `
    h4El[2].textContent = `${inputElValue} kilo = ${inputElValueThree.toFixed(4) } pound | ${inputElValue} pound = ${inputElValueThreee.toFixed(4)} kilo  `
})

