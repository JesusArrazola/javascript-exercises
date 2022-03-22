const sumAll = function(a,b) {
    let sum = 0;
    if( (a<0||b<0)|| (typeof a !=='number' || typeof b !== 'number')){
        return "ERROR";
    }

    if(b<a){
        let aux = a;
        a = b;
        b = aux;
    }

    for(let i=a;i<=b;i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
