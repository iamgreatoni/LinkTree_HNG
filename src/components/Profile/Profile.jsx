import React from 'react'
import ProfileImg from './ProfileImg/ProfileImg'
import Links from './Links/Links'
import './Profile.css'
import Socials from './Socials/Socials'

function Profile() {
  return (
    <section className='top__section'>
      <ProfileImg />
      <Links />
      <Socials />
    </section>
  )
}

export default Profile

