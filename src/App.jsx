import { Button, ChakraProvider, extendTheme } from '@chakra-ui/react'
import './App.css'
import Home from './components/Home';
import { useState } from 'react';
const customTheme = extendTheme({
  colors:{
    primary: "#056608",
    secondary: "#FFF700",
    tertiary: "#05660880",
    defaults: "#000000"
  }
})
function App() {
  const [count, setCount] = useState(0)
  const handleCount = ()=>{
    setCount(count => count +1)
  }
  return (
    <ChakraProvider theme={customTheme}>
      <Home/>
      <Button bg='primary' color='secondary' _hover={{backgroundColor: "secondary", border: "none", color: "defaults"}} _active={{border: "none"}} onClick={handleCount}> count {count}</Button>
    </ChakraProvider>
  )
}

export default App
