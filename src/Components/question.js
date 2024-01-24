import React from 'react'
import "./question.css"
import {useState} from "react"
import { FaAngleDoubleDown } from "react-icons/fa";

const Question = ({title, info}) => {
    const [show, setShow] = useState(false)

    return <div className="one-question">
        <section onClick={()=>setShow(!show)}>
            <h2>{title}</h2>
            <button className="button-clickable" ><FaAngleDoubleDown /></button>
        </section>
        {show && <p>{info}</p>}
    </div>
}

export default Question
