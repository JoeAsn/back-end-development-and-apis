function isPrime(number){
    if(number < 2) return false
    let factor = 0 ;
    for(let i = 1 ; i <= number ; i++){
        if(number % i === 0) ++factor
    }
    return factor > 2 ? false : true
}
module.exports = isPrime ;