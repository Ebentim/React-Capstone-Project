import './App.css'
import { useState } from 'react';
import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/footer/Footer';
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
      <>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
        <Footer/>
      </>
    </ReserveProvider>
  )
}

export default App
