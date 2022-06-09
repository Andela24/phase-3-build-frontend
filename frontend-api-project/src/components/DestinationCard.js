import React from 'react'
import Button from '@mui/material/Button';


const DestinationCard = ( { destination, deleteDestination } ) => {
  

  return (
    <ul>
      <button className="link"> {destination.name} </button> - <Button variant="outlined" color="error" onClick={ (e) => deleteDestination(e, destination.id) }> Delete </Button>
    </ul>
   
  )
}

export default DestinationCard
