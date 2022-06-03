import React, { useState } from 'react'

const NewAttraction = () => {
    const [ name, setName ] = useState("");

    const handleChange = e => {
        setName(e.target.value)
    }

  return (
    <div>
      <h1>New Attraction</h1>
      <form>
          <div>
              <label>Attraction Name: </label>
              <input type="text" value={ name } onChange={ handleChange }/>
          </div>
        <br />
          <input type="submit" value="Create Attraction"/>
      </form>
    </div>
  )
}

export default NewAttraction
