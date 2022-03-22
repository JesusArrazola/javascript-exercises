const divBy = (a,n) => a%n===0;

const leapYears = function(year) {
    return (
        divBy(year,4) && (!divBy(year,100) || (divBy(year,100) && divBy(year,400)))
    );
};

// Do not edit below this line
module.exports = leapYears;
