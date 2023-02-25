import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
const Home = () => {
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>navigate('/about')}>Go to About</button>
    </div>
  )
}

export default Home