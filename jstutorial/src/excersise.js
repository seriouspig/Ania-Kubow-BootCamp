document.addEventListener('DOMContentLoaded', () => {

    const bob = document.querySelector('.face')
    const style = window.getComputedStyle(bob)
    let pos = parseInt(style.getPropertyValue('left').slice(0, -2))
    let vert = parseInt(style.getPropertyValue('top').slice(0, -2))

    let eye = document.querySelectorAll('.eye')
    
    console.log(pos)
    
    

    function moveBob(hor, ver) {
        pos += hor;
        vert += ver;
        console.log('Hi')
        bob.style.left = pos + 'px'
        bob.style.top = vert + 'px'
        console.log(pos)
    
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'ArrowRight') {
            eye[0].style.justifyContent = "flex-end"
            eye[1].style.justifyContent = "flex-end"
            moveBob(50, 0)
        } else if 
            (event.code === 'ArrowLeft') {
            eye[0].style.justifyContent = "flex-start"
            eye[1].style.justifyContent = "flex-start"
            moveBob(-50, 0)
        } else if 
            (event.code === 'ArrowDown') {
            moveBob(0, 50)
        } else if 
            (event.code === 'ArrowUp') {
            moveBob(0, -50)
    }
    })

})