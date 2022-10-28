import React from 'react'
import ProfileImg from './ProfileImg/ProfileImg'
import Links from './Links/Links'
import './Profile.css'

function Profile() {
  return (
    <section className='top__section'>
      <ProfileImg />
      <Links />
    </section>
  )
}

export default Profile

