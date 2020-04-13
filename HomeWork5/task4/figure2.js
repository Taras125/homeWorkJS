let n = prompt('Enter number: ')

for (let i = 0; i < n; i++) {
    let rectangle = createRectangle(i + 1)
    document.body.appendChild(rectangle)
}

function createRectangle() {
    let rectangle = document.createElement('div')
    rectangle.innerHTML
    return rectangle
}