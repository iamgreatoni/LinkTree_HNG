import React from 'react'
import './Links.css'

import { data } from './data';

function Links() {
  const buttonLinks = data.map(item => (
    <li key={item.id} id={item.id} className='card' >
      <a href={item.link} id={item.id} target="_blank" rel="noreferrer" >
        {item.description}
      </a>
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
