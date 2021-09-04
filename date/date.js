document.addEventListener('DOMContentLoaded', () => {

const display = document.querySelector('.date')


const today = new Date()

const date = today.getDate()

const day = today.getDay()

const fullYear = today.getFullYear()

const hours = today.getHours()

const isoString = today.toISOString()


const christmas = new Date('2021-12-24T14:42:17.833Z')

console.log(christmas - today)


const millisecondsToXmas = christmas - today
const minutes = millisecondsToXmas / 60000

display.textContent = Math.round(minutes)





})