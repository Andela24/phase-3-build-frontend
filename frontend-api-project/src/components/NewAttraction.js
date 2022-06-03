import React from 'react'

const NewAttraction = () => {
  return (
    <div>
      <h1>New Attraction</h1>
      <form>
          <div>
              <label>Attraction Name: </label>
              <input type="text" />
          </div>

          <input type="submit" value="Create Attraction"/>
      </form>
    </div>
  )
}

export default NewAttraction
