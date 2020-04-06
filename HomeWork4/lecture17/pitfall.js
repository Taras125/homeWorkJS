let number = prompt('Enter number from 0 to 100 000');

if (number < 0 || number > 100000) {
    console.log('Incorrect number')
}

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i + ' is divided "2" and "3"')
        continue
    }

    if (i % 2 === 0) {
        console.log(i + ' is divided "2"')
        continue
    }

    if (i % 3 === 0) {
        console.log(i + ' is divided "3"')
        continue
    }
}