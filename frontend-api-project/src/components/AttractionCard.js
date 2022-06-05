import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';

const AttractionCard = ( { attraction, deleteAttraction } ) => {
 
  return (
    <li>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} - <Button onClick={ (e) => deleteAttraction(e, attraction.id) }> Delete </Button></NavLink> 
    </li>
  )
}

export default AttractionCard