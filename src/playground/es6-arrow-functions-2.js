// arguements object - no longer bound with arrow functions 

// const add = (a, b) => {
//     console.log(arguements);
//     return a + b;
// }
// console.log(add(55, 1, 1001))


// this keyword - no longer bound
// es5 method
// const user = {
//     name: 'Andrew',
//     cities: ['Philadelphia', 'New York', 'Dublin'],
//     printPlacesLived: function (){
//         console.log(this.name);
//         console.log(this.cities);
// }
// }
// user.printPlacesLived() 

// es6 method
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived(){
       return this.cities.map((city) => this.name + ' has lived in ' + city)
        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
        }
}

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 5,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())