import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <Link to="/factorial"> <button>Calculate</button></Link>
    </div>
  )
}

export default  Home;