function fib(n){
    if(n<=0){
        throw new Error("Invalid number")
    }
    if(n<=2){
        return 1
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(9))