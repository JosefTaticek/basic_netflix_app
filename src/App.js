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
  
  //4. .map & filter

  //a) .map
  const data = [5, 6, 7, 8]
  const novaData = data.map((jednoCislo)=>{
    return jednoCislo + 10
  })
  console.log(novaData);

  //b) .filter
  const data2 = [5, 6, 7, 8] 
  const vymazaneCislo = 5

  const novaData2 = data.filter((jednoCislo2)=>{
    return jednoCislo2 != vymazaneCislo 
  })
  console.log(novaData2);

  
  //5. Props



  //6. useEffect 
  const useEffect = (()=>{
  })

  //7. Práce s API
  const getQuote = async () => {
    const response = await fetch("https://api.kanye.rest/")
    const data = await response.json()
    console.log(data["quote"]);
  }

  getQuote()

  return <div className="cta-button">
    <h1>{title}</h1>
    <button type="button" onClick={buttonHandler}>Změnit title</button>

  </div>
}



export default App