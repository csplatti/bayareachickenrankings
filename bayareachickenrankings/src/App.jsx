import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <div className="tierlist_container">
        <div className="S-label label">S</div>
        <div className="S-area"></div>
        <div className="A-label label">A</div>
        <div className="A-area"></div>
        <div className="B-label label">B</div>
        <div className="B-area"></div>
        <div className="C-label label">C</div>
        <div className="C-area"></div>
        <div className="D-label label">D</div>
        <div className="D-area"></div>
        <div className="F-label label">F</div>
        <div className="F-area"></div>
    </div>
  )
}

export default App
