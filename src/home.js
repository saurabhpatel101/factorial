import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
    <div id='calculate'>
        <Link to="/factorial"> <button>Calculate</button></Link>
    </div>
  )
}

export default  Home;