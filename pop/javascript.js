document.addEventListener('DOMContentLoaded', () => {

    const display = document.querySelector('.box')

    const movies = ['Argo', 'Aliens', 'Fear', 'Terminator']

    movies.pop()

    movies.shift()

    movies.unshift('Batman')

    movies.push('Superman')

    movies.splice(1,2, 'Hook')

    movies.splice(1,0, 'Kill Bill')


    

    display.innerHTML = movies

})