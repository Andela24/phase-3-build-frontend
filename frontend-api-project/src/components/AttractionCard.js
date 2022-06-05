import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const AttractionCard = ( { attraction } ) => {
    const [ attractions, setAttractions ] = useState([]);

    const deleteAttraction = async id => {
        const resp = fetch(`http://localhost:9292/attractions/${id}`, {method: "DELETE"} )
        const data = await resp.json();
    
        removeAttraction( id ); //removing it from state
        
      }
    const removeAttraction = id => {
      setAttractions(attractions.filter( attraction => attraction.id !== id))
      
    }
    
  return (
    <li>
      <NavLink to={`/attractions/${attraction.id}`}> {attraction.name} - <button onClick={ () => deleteAttraction(attraction.id) }> Delete </button></NavLink> 
      {/* <p>{attraction.description}</p> */}
    </li>
  )
}

export default AttractionCard