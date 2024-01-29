import "./SearchBar.css"
import {useState} from "react"

const SearchBar = () => {

    const [firstName, setFirstName] = useState("") //2. Using useState, value is saved to firstName
    const [names, setNames] = useState([]) //4. Using useState, we will save the value from the search bar

    const formSubmit= (event)=>{ //(event) - has a lot of information about the send (click on CTA), has a lot of methods
        event.preventDefault() //Prevents default behaviour - will not refresh the page permanently and we will see the log below
        console.log(firstName); //Will log the name to the console

        if(firstName){
            setNames((names)=>{
                return [...names, firstName] //Spread operator (JS), take names and add it to firstName 
            })
        } else {
            console.log("Nebylo nic vyplněno");
        } //Backup mechanism -> check that in the send is some text, if not, log error message
    
        setFirstName("") //After click on CTA, let's delete text from search bar
    }

  return <div>
    <form>
        <div>
            <input 
                type="email" 
                placeholder="E-mailová adresa" 
                className="emailAdress" 
                value={firstName} //3. From firstName, it's set as the value of this search bar
                onChange={(event) => setFirstName(event.target.value)}/> {/*1. We are catching every change in the bar and saving it to firstName. Event - data about the data send, target (target place - search bar), value (text)*/}
            <input 
                onClick={formSubmit} 
                type="submit" 
                value="Začít" 
                className="submitButton"/>
        </div>
    </form>

    
    {/*
    {names.map( (oneName, index) => { //Adding index and key={index} so that we dont get child error
      return <p key={index}>{oneName}</p>
    }
    )} 
    */}


  </div>
}

export default SearchBar
