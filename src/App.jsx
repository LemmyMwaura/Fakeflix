import { useState } from 'react'
import HomeScreen from './components/HomeScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HomeScreen/>
    </div>
  )
}

export default App
