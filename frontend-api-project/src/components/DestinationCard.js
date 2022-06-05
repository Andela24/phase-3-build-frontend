import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';


const DestinationCard = ( { destination } ) => {
  return (
    <li>
      <NavLink to={`/destinations/${destination.id}`}><Button> {destination.name} </Button></NavLink>
    </li>
   
  )
}

export default DestinationCard
