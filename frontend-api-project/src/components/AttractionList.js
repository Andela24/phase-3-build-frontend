import React, { useState, useState } from 'react';
import AttractionCard from './AttractionCard';

const AttractionList = () => {
  const [ attractions, setAttractions ] = useState([]);

  useEffect( ()=> {
    fetch('http://localhost:9292/destination')
      .then(resp => resp.json())
      .then(data => setDestinations(data))
  },[])

  const destinationCard = destinations.map((destination, index) => <DestinationCard key= { index } destination= { destination }/> )

return (
  <div>
    <h1>Destinations</h1>
    { destinationCard }
  </div>
)
}

export default AttractionList
