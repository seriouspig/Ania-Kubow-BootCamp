document.addEventListener('DOMContentLoaded', () => {

    const square = document.createElement('div')

    const body = document.querySelector('body')

    body.appendChild(square)

    const image = document.createElement('img')

    body.appendChild(image)

    // .setAttribute
    image.setAttribute('src', 'images/48388053.jpg')
    image.style.width = 100 + 'px'

    //.getAttribute

    const imagePath = image.getAttribute('src')
    console.log(imagePath)


})