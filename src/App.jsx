import './App.css'
import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/footer/Footer';
import Homepage from './Pages/Homepage';
import Reservation from './Pages/Reservation';
import { Route, Routes } from 'react-router-dom';
import { ReserveProvider } from './contexts/ReserveContext';
function App() {

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
