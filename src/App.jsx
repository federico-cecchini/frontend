import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './view/Home'
import About from './view/About'
import Services from './view/Services'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
  )
}

export default App
