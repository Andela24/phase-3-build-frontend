import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';


const DestinationCard = ( { destination, deleteDestination } ) => {
  

  return (
    <ul>
     <li class="navigation"><NavLink to={`/destination/${destination.id}`}> {destination.name} - <Button variant="outlined" color="error" onClick={ (e) => deleteDestination(e, destination.id) }> Delete </Button></NavLink> </li>
    </ul>
   
  )
}

export default DestinationCard
