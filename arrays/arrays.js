// Using 'map' write a function that converts farenheit to celcius.add

const temperatures = [23, 140, 212, 41]

function getCelcius(far) {
    return far.map(temp => (temp - 32) * (5/9))
}

console.log(getCelcius(temperatures))

// String reverser

const word = "Dupa"

function stringReverser(word) {
    let reversedWord = []
    for (i=word.length-1; i>-1; i--) {
        reversedWord.push(word[i])
    }
    reversedWord = reversedWord.join('')
    return reversedWord
}

console.log(stringReverser(word))

// Using 'some' write a function that checks an array for a 'falsey' value

const arr = [11, NaN, [], 'Angels']

function checkForFalsey(arr) {
    return arr.some(value => !value)
}

console.log(checkForFalsey(arr))

// Using 'reduce' write a function that will return the total number of characters in an array of strings

const stringArray = ['Rabbit', 'Football', 'Cracking']

function getTotal(arr) {
    return arr.reduce((accumulator, value) => accumulator + value.length, 0)
}

console.log(getTotal(stringArray))

// Using 'every' write a function that checks whether every number in an array is a square number

const sqnums = [9, 16, 81]

function checkSquares() {
    return sqnums.every(num => (
        num > 0 && Math.sqrt(num) % 1 === 0
    ))
}

console.log(checkSquares(sqnums))

// Using an array method, write a function that returns the string elements of an array that have a given length or larger

const words = ['Florida', 'dog', 'phone']

function getWords(arr, len) {
    return words.filter(word => word.length >= len)
}

console.log(getWords(words, 5))

// Using an array method, write a function that converts an array of cm values as strings, into an array of numbers

const strvals = ['23cm', '5.6cm', '1000cm']

function getValues() {
    return strvals.map(num => parseFloat(num))
}

console.log(getValues(strvals))

// Using 'split' nad 'filter' write a function that counts the number of vowels in a sentence

const sentence = 'In West Philadelphia, born and raised'

function getVowelCount(sent) {
    let strArr = sent.toLowerCase().split('')
    const strArrVowels = strArr.filter(char => ["a","e","i","o","u"].includes(char))
    return strArrVowels.length
}

console.log(getVowelCount(sentence))

// Using 'split', 'map' and 'join' write a function that capitalises the first letter of each word in a sentence

const sentenceToCapitalise = 'the queens gambit'

function capitalise(sent) {
    const sentArr = sent.split(" ")
    const capitArr = sentArr.map(word => word[0].toUpperCase().concat(word.slice(1)))
    return capitArr.join(" ")
}

console.log(capitalise(sentenceToCapitalise))