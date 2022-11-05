import React from 'react'
import './FormBook.css'





function FormBook() {
  const name = "John Oni"



  return (
    <main className="main main__contact">
      <h1>Contact Me</h1>
      <p className="main__heading">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="form">
        <div className="form__name">
          <div className="name__input">
            <label htmlFor="first_name">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
          </div>
          <div className="name__input">
            <label htmlFor="last_name">
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="email__input">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="yourname@email.com" />
        </div>
        <div className="text__input">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div className="checkbox__input">
          <input type="checkbox" className="form__checkbox" />
          <label htmlFor="textarea">
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>
        <button 
          className='btn__submit' 
          id="btn__submit"
        >
          Send message
        </button>
      </form>
    </main>
  )
}

export default FormBook
