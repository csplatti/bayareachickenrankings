import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <div className="tierlist_container">
        <div className="S-label label">
            <span class="label_text">S</span>
        </div>
        <div className="S-area"></div>

        <div className="A-label label">
            <span class="label_text">A</span>
        </div>
        <div className="A-area"></div>

        <div className="B-label label">
            <span class="label_text">B</span>
        </div>
        <div className="B-area"></div>

        <div className="C-label label">
            <span class="label_text">C</span>
        </div>
        <div className="C-area"></div>

        <div className="D-label label">
            <span class="label_text">D</span>
        </div>
        <div className="D-area"></div>

        <div className="F-label label">
            <span class="label_text">F</span>
        </div>
        <div className="F-area"></div>
    </div>
    <div>
        
    </div>
    </>
  )
}

export default App
