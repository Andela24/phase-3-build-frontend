import React from 'react'
import { NavLink } from 'react-router-dom'

const AttractionCard = ( { attraction } ) => {
  return (
    <li>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} </NavLink> 
      {/* <p>{attraction.description}</p> */}
    </li>
  )
}

export default AttractionCard