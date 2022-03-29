const palindromes = function (pal) {
    const regExp = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    const spaceRE = /\s+/g;
    pal = pal.replace(regExp,'').replace(spaceRE,"").toLowerCase();
    let j = pal.length - 1;
    for(let i = 0;i<pal.length;i++){
        if(pal.charAt(i) === pal.charAt(j)){
            j--;
            continue;
        }else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
