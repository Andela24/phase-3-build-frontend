// import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'

// const DetailsDestination = () => {
//     const [destinations, setDestinations] = useState(null);

//     const { id }  = useParams();

//   useEffect(() => {
//   fetch(`http://localhost:9292/destination/${id}`)
//   .then(resp => resp.json())
//   .then(data => setDestinations(data))

//   }, [])


//   return (
//     <div>
//       <h1> {destinations.attractions.description}</h1>
//     </div>
//   )
// }

// export default DetailsDestination
