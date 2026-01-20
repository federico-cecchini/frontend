import { BrowserRouter as Router, Routes, Route } from 'react-router'

import Home from './view/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  )
}

export default App
