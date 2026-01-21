import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './view/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={Home}/>
        <Route path='/services' Component={Home}/>
      </Routes>
    </Router>
  )
}

export default App
