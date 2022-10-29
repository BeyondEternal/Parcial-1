function fibonacci(n){
    for(let i = 1;i<=n;i++){
        console.log(fib(i))
    }
}

function fib(n) {
    if (n <= 2){
        return 1
    } 
        
    else{
        return fib(n-1) + fib(n-2)
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
fibonacci(5)
console.log("power");
console.log(power(2,3))
console.log("factorial");
console.log(factorial(3))