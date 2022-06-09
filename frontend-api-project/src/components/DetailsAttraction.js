import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const DetailsAttraction = () => {
  const [attractions, setAttractions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing]= useState(false);
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
      setIsEditing('');
    }

     return (
      <div>
        <h1>{attractions?.name}</h1>
        <p className="text">{attractions?.description}</p>
        <Button onClick={handleClick}>Edit</Button>
        {isEditing ? <><TextField id="outlined-size-small" variant="outlined" type="text" size="small" value={currentText} onChange={(e) => setCurrentText(e.target.value)}/> <Button onClick={handleSubmit}>Submit</Button> </>: null }
      
      </div>
    )
  }

export default DetailsAttraction
