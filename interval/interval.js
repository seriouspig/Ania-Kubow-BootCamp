// setInterval(function, milliseconds)

const text = 'Alert'

const time = 1000

let counter = 1

function showAlert() {
    
    console.log('Beep ' + counter)
    counter ++
    
}


const refreshIntervalId = setInterval(showAlert, time)

function stopBeeper() {
    clearInterval(refreshIntervalId)
}


setTimeout(stopBeeper, 10100)