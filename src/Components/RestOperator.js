import React from 'react'

const RestOperator = () => {

    /*Default method:
    const sum = (a, b) =>{
        return a + b
    }
    */
   const sum = (...allNumbers) => {
        let result = 0
        for (const oneNumber of allNumbers){
            result = result + oneNumber
        }
        return result
   }
    //Function will take one by one numbers from the field and sum it together



    console.log(sum(1, 2)); //Will print 3 to the console
    console.log(sum(1, 2, 3));
    console.log(sum(1, 2, 3, 5, 10)); //Will print 21 to the console



  return <div>
    <h1>Test</h1>
  </div>
}

export default RestOperator