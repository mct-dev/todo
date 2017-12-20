import React from 'react'
import { Link } from 'react-router-dom'

const Filter = () => (
  <div className="links">
    <Link to='/'>All</Link>
    <Link to='/active'>Active</Link>
    <Link to='/completed'>Completed</Link>
  </div>
)

export default Filter