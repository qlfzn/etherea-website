import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Hero from './pages/HomePage'
import Order from './pages/OrderPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/order' element={<Order/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
