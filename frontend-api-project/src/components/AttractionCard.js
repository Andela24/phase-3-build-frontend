import React from 'react'
import { NavLink } from 'react-router-dom'

const AttractionCard = ( { attraction, deleteAttraction } ) => {
 
  return (
    <li>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} - <button onClick={ () => deleteAttraction(attraction.id) }> Delete </button></NavLink> 
      {/* <p>{attraction.description}</p> */}
    </li>
  )
}

export default AttractionCard