import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button';

const AttractionCard = ( { attraction, deleteAttraction } ) => {
 
  return (
    <li>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} - <button onClick={ (e) => deleteAttraction(e, attraction.id) }> Delete </button></NavLink> 
      {/* <p>{attraction.description}</p> */}
    </li>
  )
}

export default AttractionCard