import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';


const DestinationCard = ( { destination } ) => {
  return (
    <ul>
     <li class="navigation"><NavLink to={`/destinations/${destination.id}`}><Button> {destination.name} </Button></NavLink></li> 
    </ul>
   
  )
}

export default DestinationCard
