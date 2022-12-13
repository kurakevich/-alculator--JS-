let numberOne = document.querySelector('.number-one')
let numberTwo = document.querySelector('.number-two')

let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let divideButton = document.querySelector('.divide')
let multiplyButton = document.querySelector('.multiply')

let result = document.querySelector('.result')

let clear = document.querySelector('.clear')

// Нажатие на "Очистить"
clear.addEventListener('click', function(){
    numberOne.value = ''
    numberTwo.value = ''
    result.innerText = ''
})

//Нажатие на +
plusButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)

    let sum = numOne + numTwo

    result.innerText = sum
})

//Нажатие на -
minusButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)

    let minus = numOne - numTwo

    result.innerText = minus
})

//Нажатие на / 
divideButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)

    let divide = numOne / numTwo

    result.innerText = divide
})

//Нажатие на *
multiplyButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)

    let multiply = numOne * numTwo

    result.innerText = multiply
})





