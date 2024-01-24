import {useState} from "react"
import "./index.css"
import allMovies from "./Data/data"
import categories from "./Data/data_categories"
import questions from "./Data/data_faq"
import Question from "./Components/question"
import OneMovieSlider from "./Components/OneMovieSlider"

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("romantický")
  //Filter films written to typeOfMovie
  const vysledneFilmy = allMovies.filter((oneMovie)=>{
    return oneMovie["category"] === typeOfMovie
  })
  
  return <div>
    <div className="all-buttons">
      { //Buttons with texts from categories, after click -> setTypeOfMovie to the name of category
        categories.map((oneCategory, index)=>{ //Index = category of the film (0, 1, 2)
          return <button className="one-button" key={index} onClick={(()=>setTypeOfMovie(oneCategory))}>{oneCategory}</button>
        })
      }
    </div>
    <div className="all-movies">
    {
      //Rendering of films & texts
      vysledneFilmy.map((oneMovie)=>{
        const {id, image, title, age, tags, description } = oneMovie //Destructuring
        
        return <div key={id} className="one-movie">
          <img src={image} alt="" />
          <h2>{title}</h2>
          <p>{age}</p>
          <p>{tags}</p>
          <p>{description}</p>
        </div>
      })
      
    } 
    </div>


    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>
  

    <div>
      <div className="slider">
        <OneMovieSlider />
      </div>
    </div>


    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>
    
    <div className="FAQ_component"> 
      <div className="all-questions"> 
        {/*FAQ page*/}
        <h1>Často kladené dotazy</h1>
        {
        questions.map((oneQuestion)=>{ //Mapping of data from data_faq.js
          return <Question key={oneQuestion.id} {...oneQuestion}/>
          })
        }
      </div>
    </div>
  </div>
  
}

export default App