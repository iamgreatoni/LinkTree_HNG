import React from 'react'
import './Footer.css'

import ZuriIcon from "../../assets/zuri.svg";
import I4gIcon from "../../assets/I4G.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={ZuriIcon} alt="HNG" className="hng__img" />
        <p className="footer__text">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4gIcon} alt="Ingressive 4 Good" className="i4g__img" />
      </div>
    </footer>
  )
}

export default Footer
