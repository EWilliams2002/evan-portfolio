import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div>
        <header className="nav-bar">
            <img src="/assets/react.svg" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
        

      </div>



      <h1>Vite + React</h1>


      <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      </div>



      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  )
}

export default App
