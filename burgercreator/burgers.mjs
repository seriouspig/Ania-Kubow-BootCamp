
/* import fetch from "node-fetch"; */

document.addEventListener('DOMContentLoaded', () => {

const beerDisplay = document.querySelector('.name')
const button = document.querySelector('.button')

function getData() {
    // GET
fetch('https://my-burger-api.herokuapp.com/burgers')
.then(response => response.json())
.then(data => {
    const randomNumber = Math.floor(Math.random() * data.length)
    const beerName = data[randomNumber].name
    console.log(beerName)
    beerDisplay.innerHTML = beerName
})

}

button.addEventListener('click', getData)

// POST requests
/* const data = {
    id: 29,
    name: 'Ken Burger',
    restaurant: 'Ken Restaurant'
} */

/* fetch('https://my-burger-api.herokuapp.com/burgers', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success: ', data)
    })
    .catch((error) => {
        console.error('Error: ', error)
    })
 */
    // PUT request

    /* const data = {
        
            id: 29,
            name: "Kenny Rogers Burger",
            restaurant: "Ken Restaurant"
            
    }

    fetch ('https://my-burger-api.herokuapp.com/burgers/29', {
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
    })
        .then((response) => response.json()) 
        .then((data) => {
            console.log('Succsess: ', data)
        })
        .catch((error) => {
            console.error('Error: ', error)
        }) */

    // DELETE request

    fetch('https://my-burger-api.herokuapp.com/burgers/29', {
        method: 'DELETE'
    })
    .then((response) => response.json()) 
        .then((data) => {
            console.log('Succsess: ', data)
        })
        .catch((error) => {
            console.error('Error: ', error)
        })



})