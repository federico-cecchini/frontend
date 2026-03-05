import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ReactGA from 'react-ga4'

import Home from './view/Home'
import About from './view/About'
import Services from './view/Services'
import AnalyticsTracker from './components/AnalyticsTracker'
import './App.css'

function App() {
  ReactGA.initialize("G-XSQ24LRHD8")

  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/services' Component={Services}/>
      </Routes>
    </Router>
  )
}

export default App
