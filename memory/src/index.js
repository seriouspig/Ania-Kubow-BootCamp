document.addEventListener('DOMContentLoaded', () => {

    // card options
    const cards = [
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        }
    ]

    cards.sort(() => 0.5 - Math.random())
    console.log(cards)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i=0; i<cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src',  'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cards[cardId].name)
        console.log(cardsChosen)      
        cardsChosenIds.push(cardId)  
        this.setAttribute('src', cards[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 1000)
        }
    }

    function checkForMatch() {
        const cardsArr = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image')
            cardsArr[optionOneId].setAttribute('src', 'src/images/blank.png')
            cardsArr[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You have found a match!!!')
            cardsArr[optionOneId].setAttribute('src', 'src/images/white.png')
            cardsArr[optionTwoId].setAttribute('src', 'src/images/white.png')
            cardsArr[optionOneId].removeEventListener('click', flipCard)
            cardsArr[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cardsArr[optionOneId].setAttribute('src', 'src/images/blank.png')
            cardsArr[optionTwoId].setAttribute('src', 'src/images/blank.png')
            /* alert('Sorry, try again') */
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.innerHTML = cardsWon.length
        if (cardsWon.length === cards.length/2) {
            resultDisplay.innerHTML = "Congratulations!!! You have won!"
        }
        
    }

    createBoard()  

})