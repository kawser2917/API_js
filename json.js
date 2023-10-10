const student = {id: 1,name: "Kaharul Islam", city:"Dhaka"}

// Converting js object to JSON
const StudentJSON = JSON.stringify(student)

// Conver json to js object
const studentObj = JSON.parse(StudentJSON)

const numbers = [10,20,30,40,50,60,70]

const numbersJson = JSON.stringify(numbers)

console.log(student)
console.log(StudentJSON)
console.log(studentObj)
console.log(numbersJson)