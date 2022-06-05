import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';

const AttractionCard = ( { attraction, deleteAttraction } ) => {
 
  return (
    <ul>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} - <Button variant="outlined" color="error" onClick={ (e) => deleteAttraction(e, attraction.id) }> Delete </Button></NavLink> 
    </ul>
  )
}

export default AttractionCard