const student = {id: 1,name: "Kaharul Islam", city:"Dhaka"}

// Converting js object to JSON
const StudentJSON = JSON.stringify(student)

// Conver json to js object
const studentObj = JSON.parse(StudentJSON)

console.log(student)
console.log(StudentJSON)
console.log(studentObj)