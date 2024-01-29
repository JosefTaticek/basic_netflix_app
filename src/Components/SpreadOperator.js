import React from 'react'

const SpreadOperator = () => {


    //Joining fields
    const studentsGroup = ["David", "Jana", "Martin"]
    const allStudents = ["Harry", "Hermiona", ...studentsGroup, "Pavel"] //...studentsGroup will add elements from it's field to allStudents


    //Function arguments
    const numbers = [1, 2, 3]
    const multipleNumbers = (a, b, c) => {
        console.log(a * b * c);


    //Field copying
    const students1 = ["Jan", "Monika", "Dalibor"]
    const students2 = students1
    students2.push("Pavel") //Will add "Pavel" to both students 1 & students 2
    console.log(students1);
    console.log(students2);


    //Spread operator
    const students3 = ["Jan", "Monika", "Dalibor"]
    const student4 = [...students3] 
    student4.push("Pavel") //Will add "Pavel" only to students 4


    //Contacion
    const names1 = ["David", "Martin"]
    const names2 = ["Jana", "Pavla"]
    const newArray1 = names1.concat(names2) //Will add names1 & names2 together
    console.log(newArray1);


    //Spread operator
    const newArray2 = [...names1, "Dana", ...names2]
    console.log(newArray2);
    }


  return <div>
    <h1>test</h1>
  </div>
}

export default SpreadOperator