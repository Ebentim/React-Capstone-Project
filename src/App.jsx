import './App.css'
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import Reservation from './Pages/Reservation';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  const handleCount = ()=>{
    setCount(count => count +1)
  }
  return (
    <div className='App'>
      <NavigationBar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
