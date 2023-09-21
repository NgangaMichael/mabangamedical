import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Lab from './components/Lab'
import Messages from './components/Messages'
import Patients from './components/Patients'
import Pharmacy from './components/Pharmacy'
import Schedule from './components/Schedule'
import Notfound from './components/Notfound'

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/lab' element={<Lab />} />
          <Route exact path='/messages' element={<Messages />} />
          <Route exact path='/patients' element={<Patients />} />
          <Route exact path='/pharmacy' element={<Pharmacy />} />
          <Route exact path='/schedule' element={<Schedule />} />
          <Route exact path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  )
}
