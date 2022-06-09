import React, { useEffect, useState } from 'react';
import AttractionCard from './AttractionCard';

const AttractionList = () => {
  const [ attractions, setAttractions ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/attractions')
      .then(resp => resp.json())
      .then((data) => setAttractions(data))
  },[])

  const deleteAttraction = async (e, id) => {
    e.preventDefault();
    const resp = fetch(`http://localhost:9292/attractions/${id}`, {method: "DELETE"} )

    removeAttraction( id );
    
  }
const removeAttraction = id => {
  setAttractions(attractions.filter( attraction => attraction.id !== id))
  
}

const attractionCard = attractions.map((attraction, index) => <AttractionCard key= { index } attraction= { attraction } deleteAttraction= { deleteAttraction }/> )

return (
  <div>
    <h1>Attractions</h1>
    { attractionCard }
  </div>
)
}

export default AttractionList
