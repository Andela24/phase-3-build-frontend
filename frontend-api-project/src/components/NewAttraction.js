import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';

const NewAttraction = () => {
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
        const resp = await fetch('http://localhost:9292/attractions/new', options)
        const data = await resp.json();
        console.log(data);

        navigate("/attraction");


        //redirect
    }

  return (
    <div>
      <h1>New Attraction</h1>
      <form onSubmit={ handleSubmit }>
          <div class="label">
              <label htmlFor='name'>Attraction Name: </label>
              <TextField id="outlined-size-small" variant="outlined" type="text" size="small" value={ name } onChange={ handleChange } autoFocus={ true }/>
          </div>
        <br />
          <TextField color="success" type="submit" value="Create Attraction"/>
      </form>
    </div>
  )
}

export default NewAttraction
