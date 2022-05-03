// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

const charactersInString = (string,letter) => {
    const stringSplit = string.split(letter).length - 1;
    return stringSplit
    //const manyTimesLetter = stringSplit.filter((letter) => letter === letra)
    //return manyTimesLetter.length
}

console.log(typeof charactersInString);

module.exports = {
    charactersInString,
}

