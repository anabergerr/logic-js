// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const charactersInString = (string,letter) => {
    if(string && letter) {
        const stringSplit = string.split(letter).length - 1;
        return stringSplit
    }
    return 'add param'
    
    //const manyTimesLetter = stringSplit.filter((letter) => letter === letra)
    //return manyTimesLetter.length
}

console.log(charactersInString());

module.exports = {
    charactersInString,
}

