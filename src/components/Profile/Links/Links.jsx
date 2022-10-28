import React from 'react'
import './Links.css'

import { Data } from './data'

function Links() {
  const buttonLinks = Data.map((item) => {
    <li key={item.id} id={item.id} >
      <a href={item.link} id={item.id} target="_blank" rel="noreferrer" >
        {item.description}
      </a>
    </li>
  });

  return (
    <div className='container'>
      <ul>
        {buttonLinks}
      </ul>
    </div>
  )
}

export default Links
