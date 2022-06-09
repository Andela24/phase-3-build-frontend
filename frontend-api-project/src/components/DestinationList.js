import React, { useEffect, useState} from 'react'
import DestinationCard from './DestinationCard';

const DestinationList = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect( ()=> {
      fetch('http://localhost:9292/destination')
        .then(resp => resp.json())
        .then(data => setDestinations(data))
    },[])

    const deleteDestination = async (e, id) => {
      e.preventDefault();
      const resp = fetch(`http://localhost:9292/destination/${id}`, {method: "DELETE"} )
  
      removeDestination( id ); //removing it from state
      
    }
  const removeDestination = id => {
    setDestinations(destinations.filter( destination => destination.id !== id))
    
  }


    const destinationCard = destinations.map((destination, index) => <DestinationCard key= { index } destination= { destination } deleteDestination= {deleteDestination}/> )
   
    
  return (
    <div>
      <h1>Destinations</h1>
      { destinationCard }
    </div>
  )
}

export default DestinationList
