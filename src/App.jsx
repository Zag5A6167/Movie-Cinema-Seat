import { useState } from 'react'
import SeatBooking from './components/SeatBooking'
import './App.css'
import MovieScreen from './components/MovieScreen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MovieScreen/>
      <SeatBooking/>
      
    </>
  )
}

export default App
