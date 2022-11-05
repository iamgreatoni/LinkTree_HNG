import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'

import { data } from './data';

function Links() {
  const buttonLinks = data.map(item => (
    <li key={item.id} id={item.id} className='card' >
      {
        item.id !== "contact" ? (
          <a href={item.link} id={item.id} target="_blank" rel="noreferrer" >
            {item.description}
          </a>
        ) : (
          <Link to={item.link}>
          {item.description}
          </Link>
        )
      }
    </li>
  ));

  return (
    <div className='container'>
      <ul>
        {buttonLinks}
      </ul>
    </div>
  )
}

export default Links
