import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeDetails from './screens/Home/HomeDetails'
import ContactMe from './screens/ContactMe/ContactMe'

function App() {
  return (
    <main className="container">
      <Router >
        <Routes>
          <Route exact path="/" element={ <HomeDetails /> } />
          <Route exact path="/contact" element={ <ContactMe />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
