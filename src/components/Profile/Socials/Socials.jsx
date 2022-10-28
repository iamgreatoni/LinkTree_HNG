import React from 'react'
import './Socials.css'

import SlackIcon from "../../../assets/slack.svg";
import GithubIcon from "../../../assets/github.svg";

function Socials() {
  return (
    <div className='socials'>
      <a href="#slack">
          <img src={SlackIcon} alt="slack" />
      </a>
      <a href="https://twitter.com/IAmGreat_Oni" target="_blank" rel="noreferrer">
          <img src={GithubIcon} alt="github" />
      </a>
    </div>
  )
}

export default Socials
