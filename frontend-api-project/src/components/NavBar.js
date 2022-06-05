import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <div>
      <ul>
          <li><NavLink to="/"><Button>Home</Button></NavLink></li>
          <li><NavLink to="/destination"><Button>Destinations</Button></NavLink></li>
          <li><NavLink to="/attraction"><Button>List Attractions</Button></NavLink></li>
          <li><NavLink to="/attraction/new"><Button>Create New Attractions</Button></NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar
