import {useState, useEffect} from "react"

const App = () => {
  
  //1. Destructuring

  const vychoziPole = ["David", "Hermiona", "Harry"]
  const [student1, student2, student3] = vychoziPole

  //2. UseState
  const [title, setTitle] = useState("Původní text")
  const buttonHandler = (()=>{
    setTitle("Nový text")
  })
  
  
  return <div className="cta-button">
    <h1>{title}</h1>
    <button type="button" onClick={buttonHandler}>Změnit title</button>

  </div>
}


export default App