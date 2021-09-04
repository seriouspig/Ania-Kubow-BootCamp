document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const hexagon = document.querySelector('.hexagon')
    const circle = document.querySelector('.circle')

    let clickCount = 0;

    function clicked() {
        console.log('Clicked somewhere')
    }

    function toggleColor() {
        hexagon.classList.toggle('red-hexagon')
        clickCount ++
        if (clickCount > 10) {
            hexagon.removeEventListener('click', toggleColor)
        }
    }

    const circleStyle = window.getComputedStyle(circle)

    let height = parseInt(circleStyle.getPropertyValue('top').slice(0, -2))
    console.log(height)

    /* const style = window.getComputedStyle(bob)
    let pos = parseInt(style.getPropertyValue('left').slice(0, -2)) */


    function moveCircle() {
        console.log('circle clicked')
        height += 50
        circle.style.top = height + 'px'
        if (height > 300) {
            circle.removeEventListener('click', moveCircle)
        }
    }


    body.addEventListener('click', clicked)

    hexagon.addEventListener('click', toggleColor)

    circle.addEventListener('click', moveCircle)

})