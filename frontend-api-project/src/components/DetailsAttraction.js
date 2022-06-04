import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const DetailsAttraction = () => {
  const [ attractions, setAttractions ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const { id }  = useParams();

  useEffect(async () => {
    const resp = await fetch(`http://localhost:9292/attraction/${id}`)
    const data = await resp.json();

    setAttractions(data);
    setLoading(false);
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }
  else {
    // const attractionCards = attractions.destination.map((attraction, index) => <AttractionCard key={ index } attraction={ attraction } /> ) 
    return (
      <div>
        <h1><NavLink to={ `/attraction/${attractions.description.id}`} >{ attractions.description }</NavLink></h1>
      </div>
    )
  }

}

export default DetailsAttraction
