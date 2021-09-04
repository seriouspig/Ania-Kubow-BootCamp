document.addEventListener('DOMContentLoaded', () => {

    const circle = document.querySelector('.circle')
    let xAxis = 0
    let yAxis = 0
    const mouth = document.querySelector('.mouth')


    /* function control(event){
        if (event.key === 'ArrowLeft') {
            console.log('Left pressed')
        } else if (event.key === 'ArrowRight') {
            console.log('Right pressed')
        } else if (event.key === 'ArrowUp') {
            console.log('Up pressed')
        } else if (event.key === 'ArrowDown') {
            console.log('Down pressed')
        }
    } */

    function control(e) {
        switch (e.key) {
            case 'ArrowLeft':
                console.log('Left pressed')
                xAxis -= 10
                circle.style.left = xAxis + 'px'
                break;
            case 'ArrowRight':
                console.log('Right pressed')
                xAxis += 10
                circle.style.left = xAxis + 'px'
                break;
            case 'ArrowUp':
                console.log('Up pressed')
                yAxis -= 10;
                circle.style.top = yAxis + 'px'
                mouth.classList.remove('sad')
                break;
            case 'ArrowDown':
                console.log('Down pressed')
                yAxis += 10;
                circle.style.top = yAxis + 'px'
                mouth.classList.add('sad')
                break;
            default: 
                console.log('Key not recognised')
        }
    }




    document.addEventListener('keydown', control)



})