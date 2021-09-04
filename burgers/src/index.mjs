import fetch from "node-fetch"

// GET
fetch('https://my-burger-api.herokuapp.com/burgers')
    .then(response => response.json())
    .then(data => console.log(data))