let tela = document.getElementById("display")
let button = document.getElementsByClassName("Botoes")
let currentNumber = ""
let CurrentOperator = ""

function c (){
    currentNumber = ""
    tela.value = 0
}
function addValue(value){
    currentNumber += value
    tela.value = currentNumber
}

function addValue2(op, op2){
    CurrentOperator += op
    tela.value = currentNumber += op
}

function addValue3(){
    let rs = eval(currentNumber) 
    currentNumber = rs
    tela.value = rs
}