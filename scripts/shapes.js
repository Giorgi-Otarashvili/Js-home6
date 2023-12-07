class Shape {
    constructor (name) {
        this.name = name
    
    }
    

getName () {
let userName = this.name
    return userName
}

area () {
    return "Area calculation not implemented for generic shape.";

}
}


class Circle extends Shape {
    constructor( name,   radius ) {
super (name)
this.radius = radius 

    }
  area (){
    return Math.PI * this.radius * this.radius
  }
}

const myCircle = new Circle("Circle", 5)

console.log("Name:", myCircle.getName())
console.log("Radius:", myCircle.radius)
console.log("Area of Circle:", myCircle.area())


class Rectangle extends Shape {
    constructor (name , width, height){
        super (name)
        this.width = width
        this.height = height
    }
    area () {
        return this.width * this.height
    }
} 
const myRectangle = new Rectangle ("Rectangle", 4, 4)

console.log("Name:", myRectangle.getName ())
console.log("Width:",myRectangle.width)
console.log("Height:", myRectangle.height)
console.log("Area of myRectangle:",myRectangle.area())

class Triangle extends Shape {
    constructor (name, base, height) {
        super (name)
        this.base = base
        this.height = height
    }
    area (){
        return (this.base * this.height) / 2
    }
}

const myTriangle = new Triangle ("Triangle" ,6 ,4)
console.log("Name:", myTriangle.getName())
console.log("Base", myTriangle.base)
console.log("Height:",myTriangle.height)
console.log("area of triangle", myTriangle.area())












