// Class declaration

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const rect1 = new Rectangle(300, 100)

console.log(rect1)

class Ghost {
    constructor(name, speed, color, startingPoint) {
        this.name = name;
        this.speed = speed;
        this.color = color;
        this.startingPoint = startingPoint;
    }
}

const blinky = new Ghost('Blinky', 300, 'blue', 4)
const inky = new Ghost('Inky', 250, 'blue', 10)
const pinky = new Ghost('Pinky', 350, 'pink', 20)
const clyde = new Ghost ('Clyde', 450, 'orange', 15)

console.log(clyde.startingPoint)