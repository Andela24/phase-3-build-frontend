import React from 'react'
import { NavLink } from 'react-router-dom'

const DestinationCard = ( { destination } ) => {
  return (
    <li>
      <NavLink to={`/destinations/${destination.id}`}> {destination.name} </NavLink>
    </li>
  )
}

export default DestinationCard
