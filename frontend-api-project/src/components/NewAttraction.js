import React, { useState } from 'react'

const NewAttraction = () => {
    const [ name, setName ] = useState("");

    const handleChange = e => {
        setName(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefaul();
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
    }

  return (
    <div>
      <h1>New Attraction</h1>
      <form onSubmit={ handleSubmit }>
          <div>
              <label htmlFor='name'>Attraction Name: </label>
              <input type="text" id='name' value={ name } onChange={ handleChange } autoFocus={ true }/>
          </div>
        <br />
          <input type="submit" value="Create Attraction"/>
      </form>
    </div>
  )
}

export default NewAttraction
