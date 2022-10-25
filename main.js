function dollars_to_tenge(tenge){
    let ratio = 473.33
    return tenge * ratio
}

function between_zero(number){
    if (number > 0 && number < 1){
        console.log("between zero and one")
    }else {
        console.log("not between zero and one")
    }
}

function perimeter(a, b){
    return a*2 + b*2
}