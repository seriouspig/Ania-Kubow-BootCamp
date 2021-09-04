console.log(Math.random())

const tetris = ['L', 'Z', 'I']

function getRandomTetramino(arr) {
    let randIndex = Math.floor(Math.random() * (arr.length))
    console.log(tetris[randIndex])

}

getRandomTetramino(tetris)