const myElement = document.createElement('div')
myElement.style.width = '100px'
myElement.style.height = '100px'
myElement.style.background = 'red'
document.body.appendChild(myElement)


myElement.addEventListener('click', toRectangle)

function toRectangle() {
    myElement.style.borderRadius = '100%'
    myElement.style.background = 'black'
    myElement.style.width = '200px'
    myElement.style.height = '200px'
    setTimeout(toTriangle, 1000)
}

function toTriangle() {
    myElement.style.borderRadius = '200%'
    myElement.style.width = '500'
    myElement.style.height = '500'
    myElement.style.borderLeft = '450 solid transparent'
    myElement.style.borderRight = '450px solid transparent'
    myElement.style.borderTop = '100px solid red'
   
}