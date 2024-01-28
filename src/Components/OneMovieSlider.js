import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import "./OneMovieSlider.css"
import { useState } from "react"
import data from "../Data/data"


const OneMovieSlider = () => {
  const [index, setIndex] = useState(0)
  const {image, title, description} = data[index]


  const checkMovieNumber = (movieIndex) => {
      if (movieIndex < 0) {
          return data.length - 1
      } else if (movieIndex > data.length - 1) {
          return 0
      } else {
          return movieIndex
      }
  }


  const nextMovie = () => {
      setIndex( (index) => {
          const newIndex = index + 1
          return checkMovieNumber(newIndex)
      })
  }


  const previousMovie = () => {
      setIndex( (index) => {
          const newIndex = index - 1
          return checkMovieNumber(newIndex)
      })
  }



  return (
    <div className="one-movie">
      <img src={image} alt=""/>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={previousMovie}>
        <FaAngleLeft />
      </button>
      <button onClick={nextMovie}>
        <FaAngleRight />
      </button>

    </div>
  )
}

export default OneMovieSlider