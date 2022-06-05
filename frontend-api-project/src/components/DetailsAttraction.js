import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailsAttraction = () => {
  const [ attractions, setAttractions ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ isEditing, setIsEditing]= useState(false);
  const [currentText, setCurrentText]= useState('');

  const { id }  = useParams();

  useEffect(() => {
  fetch(`http://localhost:9292/attractions/${id}`)
  .then(resp => resp.json())
  .then(data => setAttractions(data))

   setLoading(false)
  }, [])

  if(loading) {
    return <h1>Loading...</h1> }
 
   const handleClick = (e) => {
    e.preventDefault();

    setIsEditing(!isEditing);
    setCurrentText(attractions?.description);

    }
    const handleSubmit = async e => {
      e.preventDefault();
      const headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
      const options = {
          method: "PATCH",
          headers,
          body: JSON.stringify({description: currentText})
      }
      const resp = await fetch(`http://localhost:9292/attractions/${id}`, options)
      const data = await resp.json();

      setAttractions(data);
    }

     return (
      <div>
        <h1>{attractions?.name}</h1>
        <p>{attractions?.description}</p>
        <button onClick={handleClick}>Edit</button>
        {isEditing ? <><input type="text" value={currentText} onChange={(e) => setCurrentText(e.target.value)}/> <button onClick={handleSubmit}>Submit</button> </>: null }
      
      </div>
    )
  }

export default DetailsAttraction
