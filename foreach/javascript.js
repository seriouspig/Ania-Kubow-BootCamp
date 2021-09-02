document.addEventListener('DOMContentLoaded', () => {

    const hearts = Array.from(document.querySelectorAll('.heart'))

    const isHeartBroken = hearts.some(heart => heart.hasChildNodes())

    console.log(isHeartBroken)
    



})