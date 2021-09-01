const users = [
    {
        name: 'Piotr',
        followers: 34,
        is_followed: true
    },
    {
        name: 'Lukasz',
        followers: 123,
        is_followed: false
    },
    {
        name: 'Tomek',
        followers: 32,
        is_followed: true
    }
]

console.log(users[0])

function messageSender(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].is_followed == true) {
            console.log(users[i].name + ', you got a message')
        } else {
            console.log(users[i].name + ', sorry, no message for you')
        }
    }
}

messageSender(users);

function sendReminder(name, time) {
    console.log('Hi ' + name + ', your meeting is at ' + time + '.')
}

sendReminder('Paul', 1)