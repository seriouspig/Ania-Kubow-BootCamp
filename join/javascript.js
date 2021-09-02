document.addEventListener('DOMContentLoaded', () => {

    const textDisplay = document.querySelector('.text')

    const emotions = ['sad', 'happy', 'excited']
    const newWord = emotions.join("-")

    textDisplay.innerHTML =  newWord




})