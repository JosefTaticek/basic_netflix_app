import {useState} from "react"
import "./index.css"

import allMovies from "./Data/data"
import categories from "./Data/data_categories"
import questions from "./Data/data_faq"

import Question from "./Components/question"
import OneMovieSlider from "./Components/OneMovieSlider"
import SearchBar from "./Components/SearchBar"
import SpreadOperator from "./Components/SpreadOperator"
import RestOperator from "./Components/RestOperator"
import AdvancedSearchBar from "./Components/AdvancedSearchBar"
import NavBar from "./Components/NavBar"

import profile_kids from "./images/profile_kids.png";
import device_pile from "./images/device-pile.png";
import videodevices from "./videos/videodevices.m4v";
import tv_image from "./images/tv_image.png";

import app from "./images/app.png"



const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("romantický")
  //Filter films written to typeOfMovie
  const vysledneFilmy = allMovies.filter((oneMovie)=>{
    return oneMovie["category"] === typeOfMovie
  })
  
  //MAIN RETURN PART
  return <div className="whole_page">



    <div>
      <NavBar />
    </div>



    <div>
      <div>
        <h1 className="border-header">X</h1>
      </div> 
    </div>


    <div>
      <div className="tv_container">
        <div className="tv_container_text">
          <h1>Užijte si podívanou na televizi</h1>
          <p>Dívejte se na Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray přehrávačích a dalších zařízeních.</p>
        </div>  
        <div className="tv_container_img">
          <img src={tv_image} alt="netflix_tv" />
        </div> 
      </div> 
    </div>



    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>



    <div>
      <div className="app_container">
        <div className="app_container_img">
          <img src={app} alt="stranger_things_app" />
        </div> 
        <div className="app_container_text">
          <h1>Stáhněte si svoje oblíbené pořady, abyste se mohli dívat i offline</h1>
          <p>Uložte si svoje oblíbené pořady, abyste se měli pořád na co dívat.</p>
        </div>  
      </div> 
    </div>



    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>



    <div>
      <div className="video_container">
        <div className="video_container_text">
          <h1>Dívejte se kdekoli</h1>
          <p>Streamujte neomezeně filmy a TV pořady na telefonu, tabletu, notebooku nebo televizi.</p>
        </div>  
        <div className="video_container_video">
          <img src={device_pile} alt="stranger_things_video" />
          <video playsInline muted autoPlay loop className="overlay-video">
          <source src={videodevices} type="video/mp4"/>
          </video>
        </div> 
      </div> 
    </div>



    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>



    <div>
      <div className="profiles_children">
      <img src={profile_kids} alt="kids" />
        <div>
          <h1>Vytvořte profily pro děti</h1>
          <p>S vaším členstvím se děti můžou vydat za dobrodružstvím i se svými oblíbenými hrdiny, a to v prostředí, které je stvořené přímo pro ně.</p>
        </div>
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



    <div>
      <div className="search-bar">
        <h2>Jste připraveni se dívat? Pro vytvoření nebo obnovení členství zadejte e-mail.</h2>
        <SearchBar />
      </div>
    </div>



    <div>
      <div>
        <h1 className="border">X</h1>
      </div> 
    </div>



    {/*
    <div>
      <div>
        <SpreadOperator />
      </div>
    </div>

    <div>
      <div>
        <RestOperator />
      </div>
    </div>
    */} 



    <div>
      <div>
        <h1 className="register_form">Registrujte se</h1>
        <AdvancedSearchBar />
      </div>
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


  </div>
}

export default App