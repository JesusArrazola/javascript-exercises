/**
 * 
 * @param {Array} people 
 * @returns Object
 */
const findTheOldest = function(people) {
    return people.reduce((acc,curr)=>{
        //console.log(acc,curr);
        if(!acc) return curr;
        if(!("yearOfDeath" in curr)){
            curr.yearOfDeath = new Date().getFullYear();
        }
        if(!("yearOfDeath" in acc)){
            acc.yearOfDeath = new Date().getFullYear();
        }
        return (curr.yearOfDeath-curr.yearOfBirth)>=(acc.yearOfDeath-acc.yearOfBirth)?curr:acc;
    },null);
};

// Do not edit below this line
module.exports = findTheOldest;
