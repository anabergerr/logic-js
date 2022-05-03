// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

const reverseObject = (obj) => {
    const newObj = {}
    const keys = Object.keys(obj)
    // const obj = {name: 'ana', idade: 24} -> obj[name] -> isso me retorna 'ana' 
    keys.forEach(key => newObj[obj[key]] = key)
    return newObj

}
