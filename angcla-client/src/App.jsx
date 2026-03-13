import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "APP">
        <header className = "APP-header">
          <h1>Welcome to my React App BRO!</h1>
          <p> 
            NAME: [Christian Constantino Angcla]  <br />
            EMAIL: [angclacc@students.national-u.edu.ph] <br /> <br />
            OTHER PERSONAL INFO: <br />
            GIT: <a href="https://github.com/ChristianAngcla/angcla-webprog.git" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </p>
          
        </header>
      </div> 
    </>
  )
}

export default App
