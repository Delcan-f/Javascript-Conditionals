// console.log("Conditionals, Loops and Functions")

// // If

// let noOfStudents = "20"

// // Loose equality - ==
// if (noOfStudents == 20) {
//     console.log("loose")
//     console.log("There are 20 students")
// }

// // Strict Equality - ===
// if (noOfStudents === 20) {
//     console.log("strict")
//     console.log("There are 20 students")
// }

// // If...else if loadder
// // and - &&
// // or - || 

// const hour = 21

// if (hour < 12) {
//     console.log("Good Morning")
// } else if (hour < 17) {
//     console.log("Good Afternoon")
// } else if (hour < 20) {
//     console.log("Good Evening")
// } else {
//     console.log("Good Night")
// }

// // Switch Case

// const day = 5

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log("Wrong day")
// }

// //Multiple switch cases - fallthrough
// switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Week day")
//         break
//     case 6:
//     case 7:
//         console.log("Weekend")
//         break
//     default:
//         console.log("Wrong day")
// }

// // Ternary Operator 

// const isRaining = true

// let action = ""

// if (isRaining) {
//     action = "Take an umbrella"
// } else {
//     action = "Nothing"
// }

// console.log(action)

// // Python - what to do for true condition - if condition - else false condition 
// // JS - condition ? what to do for true condition : what to do for false condition
// const action2 = isRaining ? "Take an umbrella" : "Nothing"

// console.log(action2)

// // Short circuit logic 
// // && 
// // ||
// let num = 5
// let den = 10
// let division

// if (den !== 0) {
//     division = num / den
// }

// console.log(division)

// let division2 = den !== 0 && num / den
// console.log(division2)

// // ||
// let username = "user1"

// let displayName = username

// if (!username) {
//     displayName = "guest"
// }

// console.log(displayName)

// let displayName2 = username || "guest"

// console.log(displayName2)

// // Loops 

// // For Loop
// for (let i = 0; i < 5; i++) {
//     console.log(`This is iteration number ${i}`)
// }

// // while and do...while loop
// let j = 0

// while (j < 5) {
//     console.log(`J's value in while loop: ${j}`)
//     j++ 
// }

// let k = 0

// do {
//     console.log`K's value in do while loop: ${k}`
// } while (k < 5)

// for...of => arrays
// for...in -> objects

const fruits = ["Mango", "Orange", "Apple"]

for (let fruit of fruits) {
    console.log(fruit)
}

const person = {
    name: "john",
    city: "Syndey",
    age: 27
}

for (let key in person) {
    console.log(key)
    console.log(person[key])
    console.log("\n")
}


fruits.forEach(function fruitloop(fruit, index) {
    console.log(fruit, index)
})

const upperCaseFruits = fruits.map(function fruitloop(fruit, index) {
    return fruit.toUpperCase()
})

console.log(upperCaseFruits)

const newFruits = ["Mango", "Orange", "Apple", "Banana"]

const filteredFruits = newFruits.filter(function filterLoop(fruit) {
    return fruit.length > 5 
})

console.log(filteredFruits)