import React, {useState} from 'react'
import  { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';

const NewDestination = () => {
        const [ name, setName ] = useState("");
        const navigate = useNavigate();
    
        const handleChange = e => {
            setName(e.target.value)
        }
        const handleSubmit = async e => {
            e.preventDefault();
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            const body = {name: name }
            const options = {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            }
            const resp = await fetch('http://localhost:9292/destination/new', options)
            const data = await resp.json();
            console.log(data);
    
            navigate("/destination");
        }


  return (
    <div>
      <h1>Create Destination</h1>
      <form onSubmit={ handleSubmit }>
      <div class="label">
              <label htmlFor='name'>Enter City Name: </label>
              <TextField id="outlined-size-small" variant="outlined" type="text" size="small" value={name} onChange={handleChange} autoFocus= {true}/>
          </div>
        <br />
          <TextField color="success" type="submit" value="Create Destination"/>
      </form>
    </div>
  )
}

export default NewDestination
