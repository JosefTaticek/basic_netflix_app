import React from 'react'
import "./AdvancedSearchBar.css"
import {useState} from "react"

const AdvancedSearchBar = () => {

    const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""}) //Refactored useState, object
    const [users, setUsers] = useState([])//Field, we gonna save the data to this variable


    const formChange = (event)=>{
        const name = event.target.name
        const value = event.target.valueě

        setOneUser({...oneUser, [name]: value}) //Dynamic variable filling
    }


    const formSubmit=(event)=>{ //Prevention of multiple-loading
        event.preventDefault()

        if (oneUser.firstName && oneUser.lastName && oneUser.email && oneUser.password){
            //const newUser={firstName: oneUser.firstName, lastName: oneUser.lastName, email: oneUser.email, password: oneUser.password} //JS object
            const newUser = {...oneUser, id: new Date().getTime} //Adding id to each user
            setUsers((users)=>{
                return [...users, newUser]//we are putting both fullName & email to 1 object (user) using spread operator
            })
            setOneUser({fullName: "", email: "", age: ""}) //Delete of the content in the field after submit
        } else {
            console.log("Něco nebylo vyplněno");
        }
    }

  return <div>
        <form>
            <input type="text" 
                placeholder="First name" 
                className="input-first-name"
                value={oneUser.firstName} //Needed to add here oneUser, because of the useState refactoring
                onChange={formChange} //Refactored because of new useState
                name="firstName" //Added name="" so that we can control it while using function formChange
            />
            
            <input type="text" 
                placeholder="Last name" 
                className="input-last-name"
                value={oneUser.lastName}
                onChange={formChange}
                name="lastName"
            />
                
        
            <input 
                type="email" 
                placeholder="E-mail adress" 
                className="input-email"
                value={oneUser.email}
                onChange={formChange}
                name="email"
            />

            <input 
                type="password" 
                placeholder="Password" 
                className="input-password"
                value={oneUser.password}
                onChange={formChange} 
                name="password"
            />

            <input 
                type="submit" 
                value="Submit" 
                onClick={formSubmit}    
            />
    </form>

    
    {users.map((oneUser)=>{
        //Mapping of the user
        const {id, firstName, lastName, email, password} = oneUser

        return <div className="item" key={id}>
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
            <h4>{password}</h4>  
        </div>
    })}
  </div>
}

export default AdvancedSearchBar