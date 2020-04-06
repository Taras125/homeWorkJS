

// var numberArray = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5];
// numberArray.sort (function (a, b) {
//     return a - b;
// });
// console.log(numberArray);
 

let bubbleSort = [23, 2, 45, 56, 1, 22, 134, 8, 33, 22, 44, 44, 3, 0, 5]
sort(bubbleSort)
console.log(bubbleSort)

function sort(array) {
    let lastIndex = bubbleSort.length - 1
    for (let i = 0; i < lastIndex; i++) {
        for (let index = 0; index < lastIndex - i; index++) {
            let nextIndex = index + 1

            let firstNumber = array[index]
            let nextNumber = array[nextIndex]

            if (firstNumber < nextNumber) {
                continue
            }
            swap(array, index, nextIndex)
        }
    }
}
function swap(array, firstIndex, nextIndex) {
    let firstElement = array[firstIndex]
    let secondElement = array[nextIndex]
    array[firstIndex] = secondElement
    array[nextIndex] = firstElement
}






