import React, { useEffect, useState} from 'react'

const DestinationList = () => {
    const [ destinations, setDestinations ] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:9393/destinations')
        .then(resp => resp.json)
        .then(data => setDestinations(data))
    },[])

  return (
    <div>
      <h1>Destinations</h1>
    </div>
  )
}

export default DestinationList
