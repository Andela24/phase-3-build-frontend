import React, { useEffect, useState } from 'react';
import AttractionCard from './AttractionCard';

const AttractionList = () => {
  const [ attractions, setAttractions ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/attractions')
      .then(resp => resp.json())
      .then(data => setAttractions(data))
  },[])

  const attractionCard = attractions.map((attraction, index) => <AttractionCard key= { index } attraction= { attraction }/> )

return (
  <div>
    <h1>Attractions</h1>
    { attractionCard }
  </div>
)
}

export default AttractionList
