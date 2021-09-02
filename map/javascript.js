document.addEventListener('DOMContentLoaded', () => {

    const housemates2018 = [
        {
            name: 'Ahmed',
            age: 24
        }, 
        {
            name: 'Ellen',
            age: 35
        }, 
        {
            name: 'Woody',
            age: 30
        }
    ]

    const housemates2021 = housemates2018.map(housemate => housemate.age + 3) 

    console.log(housemates2021)

    const shows = ['Lupin', 'Cobra Kai', '24', 'Mr.Robot']

    const shortTitles = shows.filter(show => show.length <= 5)
    console.log(shortTitles)

    const scores = [3, 5, 6, 7]

    /* scores.reduce((accumulator, currentValue) => accumulator + currentValue) */

    const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(total)

    const numbers = [1,3,6,5,4]

    const result = numbers.every(number => number < 10)
    console.log(result)

    const word = "Pedro"

    const letters = word.split('')
    console.log(letters)

    const sentence = 'Common baby light my fire'

    console.log(sentence.split(' ')[2])

    

})