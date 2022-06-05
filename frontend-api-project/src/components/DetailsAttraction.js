import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const DetailsAttraction = () => {
  const [ attractions, setAttractions ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const { id }  = useParams();

  useEffect(() => {
  fetch(`http://localhost:9292/attractions/${id}`)
  .then(resp => resp.json())
  .then(data => setAttractions(data))

   setLoading(false)
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }
  else {
    // const attractionCards = attractions.destination.map((attraction, index) => <AttractionCard key={ index } attraction={ attraction } /> ) 
    return (
      <div>
        {/* <h1><NavLink to={ `/attraction/${attractions.id}/description`} >{ attractions.description }</NavLink></h1> */}
        <h1> {attractions.name} </h1>
      </div>
    )
  }

}

export default DetailsAttraction
