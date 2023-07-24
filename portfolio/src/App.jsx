import './app.scss'
import {useState} from 'react'
import Topbar from "./Components/topbar/Topbar"
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'
import Intro from './Components/intro/Intro'
import Works from './Components/works/Works'
import Menu from './Components/Menu/Menu'
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  )
}

export default App
