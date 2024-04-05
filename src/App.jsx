import './App.css'
import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import Reservation from './Pages/Reservation';
import { Route, Routes } from 'react-router-dom';
import { ReserveProvider } from './contexts/ReserveContext';
function App() {
  const [count, setCount] = useState(0)
  const handleCount = ()=>{
    setCount(count => count +1)
  }
  return (
    <ReserveProvider>
      <div className='App'>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
        <Footer/>
      </div>
    </ReserveProvider>
  )
}

export default App
