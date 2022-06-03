import React, { useState } from 'react'

const NewAttraction = () => {
    const [ name, setName ] = useState("");

    const handleChange = e => {
        setName(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefaul()
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
