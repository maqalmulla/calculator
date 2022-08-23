let add = (a,b) => {
    return a + b
}

let multiply = (a,b) => {
    return a * b
}

let divide = (a, b) => {
    if(b == 0){
        alert('Naughty..Dont do that')
    }
    return a / b
}

let subtract = (a, b) => {
    return a - b
}

let operate = (a, b, operator) => {
    a = parseInt(a)
    b = parseInt(b)
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

let zero = document.querySelector('.zero button')
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
let division = document.querySelector('.divide button')
let operator = document.querySelector('.equal button')
let result = document.querySelector('.result')
let clear = document.querySelector('.AC')

let insert = (num) =>{
    if(sign == ''){
        num1.push(num)
        console.log(num1)
        result.innerHTML = result.innerHTML + num
    }else{
        num2.push(num)
        console.log(num2)
        result.innerHTML = result.innerHTML + num
    }
}

let operation = (signOperator) => {
    if(sign != ''){
        alert('Sign is already selected!'); 
        return
    } 
    sign = signOperator
    console.log('sign')
    result.innerHTML = ' ' + result.innerHTML + signOperator + ' ' 
}

one.addEventListener('click', () => {
    insert(1)
})

two.addEventListener('click', () => {
    insert(2)
})
three.addEventListener('click', () => {
    insert(3)
})

four.addEventListener('click', () => {
    insert(4)
})
five.addEventListener('click', () => {
    insert(5)
})
six.addEventListener('click', () => {
    insert(6)
})

seven.addEventListener('click', () => {
    insert(7)
})

eight.addEventListener('click', () => {
    insert(8)
})

nine.addEventListener('click', () => {
    insert(9)
})

zero.addEventListener('click', () => {
    insert(0)
})

plus.addEventListener('click', () => {
    operation('+')
})

minus.addEventListener('click', () => {
    operation('-')
})

product.addEventListener('click', () => {
    operation('x')
})

division.addEventListener('click', () => {
    operation('/')
})

operator.addEventListener('click', () => {
    let finalResult = operate(num1.join(''), num2.join(''), sign)
    result.innerHTML = finalResult
})

clear.addEventListener('click', () => {
    result.innerHTML = ''
    num1 = []
    num2 = []
    sign = ''
})




