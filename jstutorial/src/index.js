document.addEventListener('DOMContentLoaded', () => {
    

var name = 'Piotr'

document.getElementById("printer").innerHTML = printName();
    

printer = name;

function printName() {
    return ('Hi ' + name)
}

printName();

function findX(){
    let x = 1
    {
        let x = 2
        console.log('examle 1: ' + x)
    }
    console.log('examlpe 2: ' + x)
}

findX()

const count = [1,2,3,4,5]

count = [1,2,3,8]

const user = {
    name: 'Piotr',
    lastName: 'Gryko',
    age: 43,
    pets: 'Hamster'
}

console.log(user)

})