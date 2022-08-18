let add = (a,b) => {
    return a + b
}

let multiply = (a,b) => {
    return a * b
}

let divide = (a, b) => {
    return a / b
}

let subtract = (a, b) => {
    return a - b
}

let operate = (a, b, operator) => {
    if(operator == '+'){
        let result = add(a, b);
        return result;
    }else if(operator == 'x'){
        let result = multiply(a, b);
        return result;
    }else if(operator == '/'){
        let result = divide(a, b);
        return result;
    }else if(operator == '-'){
        let result = subtract(a, b);
        return result;
    }
}

let num1 = []
let num2 = []
let sign = ''

let one = document.querySelector('.one button')
let two = document.querySelector('.two button')
let three = document.querySelector('.three button')
let four = document.querySelector('.four button')
let five = document.querySelector('.five button')
let six = document.querySelector('.six button')
let seven = document.querySelector('.seven button')
let eight = document.querySelector('.eight button')
let nine = document.querySelector('.nine button')
let plus = document.querySelector('.plus button')
let minus = document.querySelector('.minus button')
let product = document.querySelector('.multiplu button')
let division = document.querySelector('.division button')
let operator = document.querySelector('.equal button')
let result = document.querySelector('.result')

one.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

two.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})
three.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

four.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})
five.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})
six.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

seven.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

eight.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

nine.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

plus.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

minus.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

one.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

one.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

one.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})

one.addEventListener('click', () => {
    if(sign == ''){
        num1.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }else{
        num2.push('1')
        result.innerHTML = `${num1.join('')} ${operator} ${num2.join('')}`
    }
})


