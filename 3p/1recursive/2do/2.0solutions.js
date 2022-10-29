
function fibonacci(n) {
    if (n <= 2){
        return 1
    }         
    else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

function power(n,m){
    if(m==0){
        return 1
    }
    else{       
        return n * power(n, m - 1)
    }
}

function factorial(n) {
    if(n<1){
        return 1
    }
    else{
        return n * factorial(n-1)
    }
}


console.log("fibonacci");
console.log(fibonacci(5))
console.log("power");
console.log(power(2,3))
console.log("factorial");
console.log(factorial(3))