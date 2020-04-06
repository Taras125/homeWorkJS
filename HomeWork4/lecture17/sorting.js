const numberArray = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5, 0, 56, 1, 1, 1, 70];
let uniqueArray = sortUnique(numberArray)
console.log(uniqueArray)

function sortUnique(array) {
    if (array.length === 0) return array
    array = array.sort()
    let result = [array[0]]
    for (let i = 1; i < array.length - 1; i++) {
        if (result[result.length - 1] === array[i]) {
            continue
        }
        result.push(array[i])
    }
    return result
}


