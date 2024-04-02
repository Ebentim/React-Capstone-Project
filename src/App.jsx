import './App.css'
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Homepage from './Pages/Homepage';
function App() {
  const [count, setCount] = useState(0)
  const handleCount = ()=>{
    setCount(count => count +1)
  }
  return (
    <div className='App'>
      <NavigationBar/>
      <Homepage/>
    </div>
  )
}

export default App
