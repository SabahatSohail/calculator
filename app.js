function getNumber(num){
    var input = document.getElementById("input");
input.value += num
}

function clearresult(){
    var input = document.getElementById("input");
input.value = ""
}

function calculation(){
    var input = document.getElementById("input")
    input.value = eval(input.value)
}

function square(){
    var input = document.getElementById("input")
    input.value = input.value*input.value
}

function percentage(){
    var input = document.getElementById("input")
input.value = eval(input.value)/100
}

function clr(){
    var input = document.getElementById("input")
input.value = Math.floor(input.value/10)
}